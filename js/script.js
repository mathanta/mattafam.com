function createButton(url, imageSrc, text) {
    document.write(`
        <a href="${url}" class="custom-button" target="_blank">
            <div class="image-container">
                <img src="images/${imageSrc}" alt="${imageSrc}" class="button-img">
            </div>
            <div class="text-container">
                <div class="btn-text">${text}</div>
            </div>
        </a>
    `);
}

function createDropdownButton(imageSrc, text, dropdownOptions) {
    document.write(`
        <div class="dropdown-button-container">
            <a href="#" class="custom-button" onclick="toggleDropdown(event)">
                <div class="image-container">
                    <img sg src="images/${imageSrc}" alt="${imageSrc}" class="button-img">
                </div>
                <div class="text-container">
                    <div class="btn-text">${text}</div>
                </div>
            </a>
            <div class="dropdown-content">
                ${dropdownOptions.map(option => 
                    `<a href="${option.url}" target="_blank" class="${option.class}">${option.text}</a>`
                ).join('')}
            </div>
        </div>
    `);
}

function toggleDropdown(event) {
    event.preventDefault();
    const dropdownContent = event.target.closest('.dropdown-button-container').querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-button-container')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});