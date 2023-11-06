function calcular() {
    const shapeSelect = document.getElementById('shapeSelect');
    const selectedShape = shapeSelect.value;
    const result = document.getElementById('result');
    const areaResult = document.getElementById('areaResult');
    const volumeResult = document.getElementById('volumeResult');
    
    // Função para calcular a área e o volume das diferentes formas
    function calcularAreaVolume() {
        switch (selectedShape) {
            case 'cubo':
                const cubeSide = parseFloat(document.getElementById('cubeSide').value);
                const cubeArea = 6 * cubeSide * cubeSide;
                const cubeVolume = cubeSide * cubeSide * cubeSide;
                areaResult.textContent = cubeArea.toFixed(2);
                volumeResult.textContent = cubeVolume.toFixed(2);
                break;
            case 'cilindro':
                const cylinderRadius = parseFloat(document.getElementById('cylinderRadius').value);
                const cylinderHeight = parseFloat(document.getElementById('cylinderHeight').value);
                const cylinderArea = 2 * Math.PI * cylinderRadius * (cylinderRadius + cylinderHeight);
                const cylinderVolume = Math.PI * cylinderRadius * cylinderRadius * cylinderHeight;
                areaResult.textContent = cylinderArea.toFixed(2);
                volumeResult.textContent = cylinderVolume.toFixed(2);
                break;
            case 'paralelepipedo':
                const prismLength = parseFloat(document.getElementById('rectangularPrismLength').value);
                const prismWidth = parseFloat(document.getElementById('rectangularPrismWidth').value);
                const prismHeight = parseFloat(document.getElementById('rectangularPrismHeight').value);
                const prismArea = 2 * (prismLength * prismWidth + prismWidth * prismHeight + prismHeight * prismLength);
                const prismVolume = prismLength * prismWidth * prismHeight;
                areaResult.textContent = prismArea.toFixed(2);
                volumeResult.textContent = prismVolume.toFixed(2);
                break;
            case 'esfera':
                const sphereRadius = parseFloat(document.getElementById('sphereRadius').value);
                const sphereArea = 4 * Math.PI * sphereRadius * sphereRadius;
                const sphereVolume = (4/3) * Math.PI * sphereRadius * sphereRadius * sphereRadius;
                areaResult.textContent = sphereArea.toFixed(2);
                volumeResult.textContent = sphereVolume.toFixed(2);
                break;
            case 'cone':
                const coneRadius = parseFloat(document.getElementById('coneRadius').value);
                const coneHeight = parseFloat(document.getElementById('coneHeight').value);
                const coneArea = Math.PI * coneRadius * (coneRadius + Math.sqrt(coneHeight * coneHeight + coneRadius * coneRadius));
                const coneVolume = (1/3) * Math.PI * coneRadius * coneRadius * coneHeight;
                areaResult.textContent = coneArea.toFixed(2);
                volumeResult.textContent = coneVolume.toFixed(2);
                break;
            case 'piramide':
                const pyramidLength = parseFloat(document.getElementById('pyramidLength').value);
                const pyramidWidth = parseFloat(document.getElementById('pyramidWidth').value);
                const pyramidHeight = parseFloat(document.getElementById('pyramidHeight').value);
                const pyramidArea = pyramidLength * pyramidWidth + pyramidLength * Math.sqrt(pyramidWidth/2 * pyramidWidth/2 + pyramidHeight * pyramidHeight) + pyramidWidth * Math.sqrt(pyramidLength/2 * pyramidLength/2 + pyramidHeight * pyramidHeight);
                const pyramidVolume = (1/3) * pyramidLength * pyramidWidth * pyramidHeight;
                areaResult.textContent = pyramidArea.toFixed(2);
                volumeResult.textContent = pyramidVolume.toFixed(2);
                break;
        }
    }
    
    // Chama a função para calcular a área e o volume quando o botão "Calcular" é clicado
    calcularAreaVolume();
}