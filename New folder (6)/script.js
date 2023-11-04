 // Sample data for menu categories and items
 const menuData = {
    categories: [
        { short_name: 'Lunch', name: 'Lunch' },
        { short_name: 'Dinner', name: 'Dinner' },
        { short_name: 'Sushi', name: 'Sushi' },
    ],
    items: {
        Lunch: ['Item 1', 'Item 2', 'Item 3'],
        Dinner: ['Item 4', 'Item 5', 'Item 6'],
        Sushi: ['Item 7', 'Item 8', 'Item 9'],
    },
};

function loadCategory(category) {
    const menuItems = menuData.items[category];
    displayMenuItems(menuItems);
}

function loadRandomCategory() {
    const randomCategory = getRandomCategoryShortName();
    loadCategory(randomCategory);
}

function displayMenuItems(items) {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = '';

    if (items && items.length > 0) {
        const ul = document.createElement('ul');
        items.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        menuItemsContainer.appendChild(ul);
    } else {
        menuItemsContainer.textContent = 'No items available for this category.';
    }
}

function getRandomCategoryShortName() {
    const categories = menuData.categories;
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].short_name;
}