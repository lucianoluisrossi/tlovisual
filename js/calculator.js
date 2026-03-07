/* ===================================
   LED CALCULATOR LOGIC
   ================================ */

// SCREEN CONFIGURATIONS DATABASE
const screens = {
    indoor: {
        p2_5: { pitch: 2.5, moduleSize: 0.5, weight: 8, power: 800, brightness: 1200 },
        p3: { pitch: 3.0, moduleSize: 0.5, weight: 7.5, power: 700, brightness: 1000 },
        p3_9: { pitch: 3.9, moduleSize: 0.5, weight: 7, power: 650, brightness: 900 }
    },
    outdoor: {
        p4: { pitch: 4.0, moduleSize: 0.5, weight: 9, power: 850, brightness: 4500 },
        p4_8: { pitch: 4.8, moduleSize: 0.5, weight: 8.5, power: 800, brightness: 5000 },
        p5: { pitch: 5.0, moduleSize: 0.5, weight: 8, power: 750, brightness: 5500 },
        p6: { pitch: 6.0, moduleSize: 0.5, weight: 7.5, power: 700, brightness: 6000 }
    }
};

// MAIN CALCULATION FUNCTION
function calculate() {
    // Get input values
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const eventType = document.getElementById('eventType').value;
    const useType = document.getElementById('useType').value;

    // Validation
    if (!width || !height || !distance) {
        alert('Por favor completa todos los campos');
        return;
    }

    if (width <= 0 || height <= 0 || distance <= 0) {
        alert('Los valores deben ser mayores a cero');
        return;
    }

    // Calculate optimal pitch based on viewing distance
    // Formula: optimal pitch (mm) ≈ distance (m) * 0.25 to 0.35
    const optimalPitchMin = distance * 0.25;
    const optimalPitchMax = distance * 0.35;

    // Select screen based on event type
    const availableScreens = screens[eventType];
    let selectedScreen = null;
    let selectedPitchName = '';

    // Find the pitch closest to the optimal range
    for (const [name, spec] of Object.entries(availableScreens)) {
        if (spec.pitch >= optimalPitchMin && spec.pitch <= optimalPitchMax) {
            selectedScreen = spec;
            selectedPitchName = name.toUpperCase().replace('_', '.');
            break;
        }
    }

    // If no exact match, use the closest one
    if (!selectedScreen) {
        const pitches = Object.entries(availableScreens);
        const closest = pitches.reduce((prev, curr) => {
            const prevDiff = Math.abs(prev[1].pitch - optimalPitchMin);
            const currDiff = Math.abs(curr[1].pitch - optimalPitchMin);
            return currDiff < prevDiff ? curr : prev;
        });
        selectedScreen = closest[1];
        selectedPitchName = closest[0].toUpperCase().replace('_', '.');
    }

    // Calculations
    const moduleSize = selectedScreen.moduleSize;
    const modulesX = Math.ceil(width / moduleSize);
    const modulesY = Math.ceil(height / moduleSize);
    const totalModules = modulesX * modulesY;

    const finalWidth = (modulesX * moduleSize).toFixed(2);
    const finalHeight = (modulesY * moduleSize).toFixed(2);

    const pixelDensity = 1000 / selectedScreen.pitch; // pixels per meter
    const resolutionX = Math.round(finalWidth * pixelDensity);
    const resolutionY = Math.round(finalHeight * pixelDensity);

    const totalWeight = Math.round(totalModules * selectedScreen.weight);
    const totalPower = (totalModules * selectedScreen.power / 1000).toFixed(1);

    // Update UI
    document.getElementById('pitchResult').textContent = selectedPitchName;
    document.getElementById('resolutionResult').textContent = `${resolutionX} × ${resolutionY} px`;
    document.getElementById('modulesResult').textContent = `${modulesX} × ${modulesY} = ${totalModules}`;
    document.getElementById('weightResult').textContent = `${totalWeight} kg`;
    document.getElementById('powerResult').textContent = `${totalPower} kW`;

    // Update visualization
    updateVisualization(finalWidth, finalHeight);
    document.querySelector('.dimension-width').textContent = `${finalWidth}m`;
    document.querySelector('.dimension-height').textContent = `${finalHeight}m`;

    // Update recommendations
    updateRecommendations(selectedPitchName, distance, eventType, totalModules, useType);

    // Add result animation
    document.querySelectorAll('.result-card').forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.5s ease';
        }, index * 100);
    });
}

// UPDATE VISUAL PREVIEW
function updateVisualization(width, height) {
    const viz = document.getElementById('screenViz');
    const ratio = width / height;
    
    let displayWidth, displayHeight;
    if (ratio > 1.67) {
        displayWidth = 300;
        displayHeight = 300 / ratio;
    } else {
        displayHeight = 180;
        displayWidth = 180 * ratio;
    }

    viz.style.width = displayWidth + 'px';
    viz.style.height = displayHeight + 'px';
    viz.textContent = `${width}m × ${height}m`;
}

// UPDATE RECOMMENDATIONS
function updateRecommendations(pitch, distance, eventType, modules, useType) {
    const recommendations = [];

    // Pitch recommendation
    recommendations.push(
        `Pantalla ${pitch} ${eventType === 'outdoor' ? 'Outdoor' : 'Indoor'} es ideal para esta distancia`
    );

    // Distance-based recommendations
    if (distance < 5) {
        recommendations.push('Excelente definición para eventos corporativos y presentaciones');
    } else if (distance < 15) {
        recommendations.push('Perfecta para conciertos medianos y eventos sociales');
    } else {
        recommendations.push('Ideal para conciertos grandes y festivales al aire libre');
    }

    // Module count recommendations
    if (modules < 100) {
        recommendations.push('Configuración ligera, montaje rápido (2-3 horas)');
    } else if (modules < 200) {
        recommendations.push('Requiere estructura de soporte tipo truss o ground support');
    } else {
        recommendations.push('Requiere estructura reforzada y equipo técnico especializado');
    }

    // Event type specific
    if (eventType === 'outdoor') {
        recommendations.push('Recomendamos sistema de protección contra lluvia (IP65)');
    } else {
        recommendations.push('Sistema con control de brillo automático para interiores');
    }

    // Use type specific
    if (useType === 'rental') {
        recommendations.push('Montaje y desmontaje incluido en el servicio de alquiler');
    } else {
        recommendations.push('Instalación permanente con certificación de seguridad incluida');
    }

    // Render recommendations
    const list = document.getElementById('recommendations');
    list.innerHTML = recommendations.map(r => 
        `<li><span class="check-icon">✓</span> ${r}</li>`
    ).join('');
}

// AUTO-CALCULATE ON INPUT CHANGE
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('change', calculate);
    input.addEventListener('input', debounce(calculate, 500));
});

// DEBOUNCE FUNCTION
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// SEND TO WHATSAPP
function sendToWhatsApp() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const distance = document.getElementById('distance').value;
    const pitch = document.getElementById('pitchResult').textContent;
    const eventType = document.getElementById('eventType').value;

    const message = `
Hola TLO Visual! Hice una consulta en su calculadora:

📐 Dimensiones: ${width}m × ${height}m
📏 Distancia: ${distance}m
💎 Pitch recomendado: ${pitch}
🎪 Tipo: ${eventType === 'outdoor' ? 'Outdoor' : 'Indoor'}

¿Pueden enviarme un presupuesto?
    `;
    
    const url = `https://wa.me/34686514064?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// EXPORT PDF (Future feature)
function exportPDF() {
    alert('Función de exportar PDF próximamente disponible');
    // TODO: Implement PDF generation with jsPDF
}

// SHARE CONFIGURATION (Future feature)
function shareConfiguration() {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const distance = document.getElementById('distance').value;
    
    const url = `${window.location.origin}${window.location.pathname}?w=${width}&h=${height}&d=${distance}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Configuración TLO Visual',
            text: `Configuración de pantalla LED ${width}x${height}m`,
            url: url
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copiado al portapapeles!');
        });
    }
}

// LOAD FROM URL PARAMETERS
window.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('w')) {
        document.getElementById('width').value = urlParams.get('w');
    }
    if (urlParams.has('h')) {
        document.getElementById('height').value = urlParams.get('h');
    }
    if (urlParams.has('d')) {
        document.getElementById('distance').value = urlParams.get('d');
    }
    
    // Calculate on load
    calculate();
});

// Initial calculation
window.onload = function() {
    calculate();
};