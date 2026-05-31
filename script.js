const allergenNames = {
    milk: { cn: '牛奶/乳制品', emoji: '🥛' },
    egg: { cn: '鸡蛋', emoji: '🥚' },
    nuts: { cn: '坚果/花生', emoji: '🥜' },
    wheat: { cn: '小麦/麸质', emoji: '🌾' },
    soy: { cn: '大豆', emoji: '🫘' },
    fish: { cn: '鱼类', emoji: '🐟' },
    shellfish: { cn: '甲壳类/贝类', emoji: '🦐' },
    sesame: { cn: '芝麻', emoji: '🖤' },
    mustard: { cn: '芥末', emoji: '🌭' },
    celery: { cn: '芹菜', emoji: '🥬' },
    lupin: { cn: '羽扇豆', emoji: '🌱' },
    molluscs: { cn: '软体动物', emoji: '🐚' },
    sulphites: { cn: '亚硫酸盐', emoji: '🧂' },
    gluten: { cn: '麸质', emoji: '🌾' }
};

const foodData = [
    { id: 1, name: '米饭', emoji: '🍚', category: 'grains', calories: 116, protein: 2.6, carbs: 25.6, fat: 0.3, fiber: 0.3, allergens: [] },
    { id: 2, name: '馒头', emoji: '🥟', category: 'grains', calories: 221, protein: 7.0, carbs: 45.7, fat: 1.1, fiber: 1.3, allergens: ['wheat'] },
    { id: 3, name: '红薯', emoji: '🍠', category: 'grains', calories: 86, protein: 1.6, carbs: 20.1, fat: 0.1, fiber: 3.0, allergens: [] },
    { id: 4, name: '燕麦', emoji: '🥣', category: 'grains', calories: 389, protein: 16.9, carbs: 66.3, fat: 6.9, fiber: 10.6, allergens: ['nuts', 'gluten'] },
    { id: 5, name: '玉米', emoji: '🌽', category: 'grains', calories: 96, protein: 3.4, carbs: 21.0, fat: 1.5, fiber: 2.4, allergens: [] },
    { id: 6, name: '面包', emoji: '🍞', category: 'grains', calories: 265, protein: 9.0, carbs: 49.0, fat: 3.2, fiber: 2.7, allergens: ['wheat', 'milk', 'sulphites'] },
    
    { id: 7, name: '青菜', emoji: '🥬', category: 'vegetables', calories: 15, protein: 1.5, carbs: 2.7, fat: 0.3, fiber: 1.6, allergens: [] },
    { id: 8, name: '西兰花', emoji: '🥦', category: 'vegetables', calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4, fiber: 2.6, allergens: [] },
    { id: 9, name: '胡萝卜', emoji: '🥕', category: 'vegetables', calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8, allergens: [] },
    { id: 10, name: '番茄', emoji: '🍅', category: 'vegetables', calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, allergens: [] },
    { id: 11, name: '黄瓜', emoji: '🥒', category: 'vegetables', calories: 15, protein: 0.8, carbs: 2.9, fat: 0.1, fiber: 0.5, allergens: [] },
    { id: 12, name: '茄子', emoji: '🍆', category: 'vegetables', calories: 23, protein: 1.1, carbs: 5.4, fat: 0.2, fiber: 1.9, allergens: [] },
    { id: 29, name: '芹菜', emoji: '🥬', category: 'vegetables', calories: 16, protein: 0.7, carbs: 3.0, fat: 0.2, fiber: 1.6, allergens: ['celery'] },
    { id: 30, name: '蘑菇', emoji: '🍄', category: 'vegetables', calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3, fiber: 1.0, allergens: [] },
    
    { id: 13, name: '苹果', emoji: '🍎', category: 'fruits', calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2, fiber: 2.4, allergens: [] },
    { id: 14, name: '香蕉', emoji: '🍌', category: 'fruits', calories: 89, protein: 1.1, carbs: 22.8, fat: 0.3, fiber: 2.6, allergens: [] },
    { id: 15, name: '橙子', emoji: '🍊', category: 'fruits', calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1, fiber: 2.4, allergens: [] },
    { id: 16, name: '葡萄', emoji: '🍇', category: 'fruits', calories: 67, protein: 0.6, carbs: 17.2, fat: 0.4, fiber: 0.9, allergens: ['sulphites'] },
    { id: 17, name: '草莓', emoji: '🍓', category: 'fruits', calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3, fiber: 2.0, allergens: [] },
    { id: 18, name: '西瓜', emoji: '🍉', category: 'fruits', calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2, fiber: 0.4, allergens: [] },
    { id: 31, name: '猕猴桃', emoji: '🥝', category: 'fruits', calories: 61, protein: 1.1, carbs: 15.0, fat: 0.5, fiber: 3.0, allergens: [] },
    { id: 32, name: '桃子', emoji: '🍑', category: 'fruits', calories: 39, protein: 0.9, carbs: 9.5, fat: 0.3, fiber: 1.5, allergens: [] },
    
    { id: 19, name: '鸡胸肉', emoji: '🍗', category: 'protein', calories: 165, protein: 31.0, carbs: 0.0, fat: 3.6, fiber: 0.0, allergens: [] },
    { id: 20, name: '牛肉', emoji: '🥩', category: 'protein', calories: 250, protein: 26.0, carbs: 0.0, fat: 15.0, fiber: 0.0, allergens: [] },
    { id: 21, name: '鱼', emoji: '🐟', category: 'protein', calories: 127, protein: 20.6, carbs: 0.0, fat: 4.5, fiber: 0.0, allergens: ['fish'] },
    { id: 22, name: '虾', emoji: '🦐', category: 'protein', calories: 99, protein: 20.9, carbs: 0.2, fat: 1.7, fiber: 0.0, allergens: ['shellfish', 'molluscs'] },
    { id: 23, name: '鸡蛋', emoji: '🥚', category: 'protein', calories: 155, protein: 13.0, carbs: 1.1, fat: 11.0, fiber: 0.0, allergens: ['egg'] },
    { id: 24, name: '豆腐', emoji: '🧈', category: 'protein', calories: 76, protein: 8.0, carbs: 1.9, fat: 4.8, fiber: 0.4, allergens: ['soy'] },
    { id: 33, name: '扇贝', emoji: '🦪', category: 'protein', calories: 88, protein: 17.4, carbs: 3.9, fat: 0.8, fiber: 0.0, allergens: ['shellfish', 'molluscs'] },
    { id: 34, name: '鱿鱼', emoji: '🦑', category: 'protein', calories: 92, protein: 15.6, carbs: 3.1, fat: 1.4, fiber: 0.0, allergens: ['molluscs'] },
    
    { id: 25, name: '牛奶', emoji: '🥛', category: 'dairy', calories: 54, protein: 3.2, carbs: 5.0, fat: 3.2, fiber: 0.0, allergens: ['milk'] },
    { id: 26, name: '酸奶', emoji: '🥛', category: 'dairy', calories: 72, protein: 3.5, carbs: 7.5, fat: 3.3, fiber: 0.0, allergens: ['milk'] },
    { id: 27, name: '豆浆', emoji: '🥤', category: 'dairy', calories: 31, protein: 3.0, carbs: 1.2, fat: 1.6, fiber: 0.8, allergens: ['soy'] },
    { id: 28, name: '黄豆', emoji: '🫘', category: 'dairy', calories: 359, protein: 35.0, carbs: 34.2, fat: 16.0, fiber: 15.5, allergens: ['soy'] },
    { id: 35, name: '芝麻酱', emoji: '🖤', category: 'dairy', calories: 595, protein: 17.0, carbs: 22.7, fat: 52.7, fiber: 5.9, allergens: ['sesame', 'nuts'] },
    { id: 36, name: '芥末酱', emoji: '🌭', category: 'dairy', calories: 269, protein: 5.2, carbs: 19.5, fat: 18.5, fiber: 3.2, allergens: ['mustard'] }
];

const dietaryGuidelines = {
    china: {
        name: '中国居民膳食指南',
        flag: '🇨🇳',
        grains: { min: 2, max: 3, target: 2.5, label: '谷薯类' },
        vegetables: { min: 3, max: 5, target: 4, label: '蔬菜类' },
        fruits: { min: 2, max: 4, target: 3, label: '水果类' },
        protein: { min: 2, max: 3, target: 2.5, label: '蛋白质' },
        dairy: { min: 1, max: 2, target: 1.5, label: '奶豆类' }
    },
    usa: {
        name: '美国膳食指南',
        flag: '🇺🇸',
        grains: { min: 3, max: 5, target: 4, label: '谷物' },
        vegetables: { min: 2, max: 4, target: 3, label: '蔬菜' },
        fruits: { min: 1, max: 3, target: 2, label: '水果' },
        protein: { min: 2, max: 4, target: 3, label: '蛋白质' },
        dairy: { min: 2, max: 3, target: 2.5, label: '乳制品' }
    },
    japan: {
        name: '日本膳食指南',
        flag: '🇯🇵',
        grains: { min: 4, max: 6, target: 5, label: '主食' },
        vegetables: { min: 3, max: 5, target: 4, label: '蔬菜' },
        fruits: { min: 2, max: 3, target: 2.5, label: '水果' },
        protein: { min: 3, max: 5, target: 4, label: '主菜' },
        dairy: { min: 1, max: 2, target: 1.5, label: '奶制品' }
    },
    mediterranean: {
        name: '地中海饮食',
        flag: '🇬🇷',
        grains: { min: 4, max: 6, target: 5, label: '全谷物' },
        vegetables: { min: 4, max: 6, target: 5, label: '蔬菜' },
        fruits: { min: 3, max: 5, target: 4, label: '水果' },
        protein: { min: 2, max: 4, target: 3, label: '鱼类/豆类' },
        dairy: { min: 2, max: 3, target: 2.5, label: '乳制品' }
    }
};

const categoryColors = {
    grains: '#FFC107',
    vegetables: '#4CAF50',
    fruits: '#F44336',
    protein: '#2196F3',
    dairy: '#9C27B0'
};

const categoryLabels = {
    grains: '谷薯类',
    vegetables: '蔬菜类',
    fruits: '水果类',
    protein: '蛋白质',
    dairy: '奶豆类'
};

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const dayNames = {
    monday: '周一',
    tuesday: '周二',
    wednesday: '周三',
    thursday: '周四',
    friday: '周五',
    saturday: '周六',
    sunday: '周日'
};

const mealTypes = ['breakfast', 'lunch', 'dinner'];
const mealNames = {
    breakfast: '🌅 早餐',
    lunch: '☀️ 午餐',
    dinner: '🌙 晚餐'
};

let currentGuideline = 'china';
let userAllergens = [];
let plateFoods = [];
let weeklyPlan = {};
let shoppingListData = [];

function init() {
    loadFromStorage();
    renderFoodItems();
    setupDragAndDrop();
    setupTabs();
    setupButtons();
    setupFilters();
    renderWeeklyGrid();
    loadHistory();
    updateNutrition();
}

function loadFromStorage() {
    const savedAllergens = localStorage.getItem('userAllergens');
    const savedWeeklyPlan = localStorage.getItem('weeklyPlan');
    
    if (savedAllergens) {
        userAllergens = JSON.parse(savedAllergens);
    }
    if (savedWeeklyPlan) {
        weeklyPlan = JSON.parse(savedWeeklyPlan);
    }
}

function renderFoodItems(filter = 'all') {
    const foodItemsContainer = document.getElementById('foodItems');
    foodItemsContainer.innerHTML = '';
    
    let filteredFoods = foodData;
    if (filter !== 'all') {
        filteredFoods = foodData.filter(food => food.category === filter);
    }
    
    filteredFoods.forEach(food => {
        const foodElement = document.createElement('div');
        foodElement.className = 'food-item';
        foodElement.draggable = true;
        foodElement.dataset.id = food.id;
        
        const hasAllergen = food.allergens.some(a => userAllergens.includes(a));
        if (hasAllergen) {
            foodElement.classList.add('allergen-warning');
        }
        
        foodElement.innerHTML = `
            <span class="emoji">${food.emoji}</span>
            <span class="name">${food.name}</span>
            <span class="calories">${food.calories}kcal</span>
        `;
        foodItemsContainer.appendChild(foodElement);
    });
    
    setupDragAndDrop();
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderFoodItems(e.target.dataset.filter);
        });
    });
}

function setupDragAndDrop() {
    const foodItems = document.querySelectorAll('.food-item');
    const plateSections = document.querySelectorAll('.plate-section');
    
    foodItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    plateSections.forEach(section => {
        section.addEventListener('dragover', handleDragOver);
        section.addEventListener('dragleave', handleDragLeave);
        section.addEventListener('drop', handleDrop);
    });
}

let draggedFood = null;

function handleDragStart(e) {
    draggedFood = e.target.closest('.food-item');
    draggedFood.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'copy';
}

function handleDragEnd(e) {
    if (draggedFood) {
        draggedFood.classList.remove('dragging');
        draggedFood = null;
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    if (draggedFood) {
        const foodId = parseInt(draggedFood.dataset.id);
        const food = foodData.find(f => f.id === foodId);
        const section = e.currentTarget;
        const category = section.dataset.category;
        
        const hasAllergen = food.allergens.some(a => userAllergens.includes(a));
        if (hasAllergen) {
            showAllergenAlert(food);
            return;
        }
        
        if (food.category === category) {
            addFoodToPlate(food, section);
        } else {
            showCategoryMismatch(food, category);
        }
    }
}

function showAllergenAlert(food) {
    const alert = document.getElementById('allergenAlert');
    const message = document.getElementById('allergenMessage');
    
    const detectedAllergens = food.allergens
        .filter(a => userAllergens.includes(a))
        .map(a => allergenNames[a]?.cn || a);
    
    message.textContent = `${food.name} 包含过敏原: ${detectedAllergens.join(', ')}`;
    alert.style.display = 'block';
    
    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

function addFoodToPlate(food, section) {
    plateFoods.push(food);
    
    const foodElement = document.createElement('span');
    foodElement.className = 'plate-food';
    foodElement.textContent = food.emoji;
    foodElement.title = `${food.name} - 点击删除`;
    foodElement.dataset.foodId = food.id;
    
    foodElement.addEventListener('click', function() {
        removeFoodFromPlate(food, foodElement);
    });
    
    section.appendChild(foodElement);
    
    updateNutrition();
}

function removeFoodFromPlate(food, foodElement) {
    const index = plateFoods.findIndex(f => f.id === food.id);
    if (index !== -1) {
        plateFoods.splice(index, 1);
        foodElement.remove();
        updateNutrition();
    }
}

function showCategoryMismatch(food, targetCategory) {
    const suggestions = document.getElementById('suggestions');
    const correctCategory = categoryLabels[food.category];
    suggestions.innerHTML = `
        <h4>⚠️ 类别不匹配</h4>
        <p>${food.name} 属于 ${correctCategory}，请放到正确的区域！</p>
    `;
}

function updateNutrition() {
    const totals = calculateTotals();
    const score = calculateScore(totals);
    const suggestions = generateSuggestions(totals);
    
    renderNutritionBreakdown(totals);
    document.getElementById('score').textContent = Math.round(score);
    renderSuggestions(suggestions);
}

function calculateTotals() {
    const totals = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        fiber: 0,
        categories: {
            grains: 0,
            vegetables: 0,
            fruits: 0,
            protein: 0,
            dairy: 0
        }
    };
    
    plateFoods.forEach(food => {
        totals.calories += food.calories;
        totals.protein += food.protein;
        totals.carbs += food.carbs;
        totals.fat += food.fat;
        totals.fiber += food.fiber;
        totals.categories[food.category]++;
    });
    
    return totals;
}

function calculateScore(totals) {
    const guideline = dietaryGuidelines[currentGuideline];
    let score = 0;
    let categoryCount = 0;
    
    Object.keys(guideline).forEach(key => {
        if (key === 'name' || key === 'flag') return;
        const category = guideline[key];
        const actual = totals.categories[key];
        
        if (actual >= category.min && actual <= category.max) {
            score += 20;
        } else if (actual > 0) {
            const diff = Math.abs(actual - category.target);
            score += Math.max(0, 20 - diff * 5);
        }
        
        if (actual > 0) categoryCount++;
    });
    
    if (categoryCount === 5) {
        score += 20;
    } else if (categoryCount === 4) {
        score += 10;
    }
    
    return Math.min(100, Math.max(0, score));
}

function generateSuggestions(totals) {
    const guideline = dietaryGuidelines[currentGuideline];
    const suggestions = [];
    
    Object.keys(guideline).forEach(key => {
        if (key === 'name' || key === 'flag') return;
        const category = guideline[key];
        const actual = totals.categories[key];
        
        if (actual === 0) {
            suggestions.push(`❌ 缺少 ${category.label}，建议添加 ${category.min}-${category.max} 份`);
        } else if (actual < category.min) {
            suggestions.push(`⚠️ ${category.label} 偏少 (${actual}/${category.min})，建议再添加一些`);
        } else if (actual > category.max) {
            suggestions.push(`⚠️ ${category.label} 偏多 (${actual}/${category.max})，建议减少一些`);
        } else {
            suggestions.push(`✅ ${category.label} 适量 (${actual}份)，搭配很好！`);
        }
    });
    
    if (totals.calories > 800) {
        suggestions.push(`⚠️ 热量偏高 (${Math.round(totals.calories)}kcal)，注意控制分量`);
    } else if (totals.calories < 400 && plateFoods.length > 0) {
        suggestions.push(`⚠️ 热量偏低 (${Math.round(totals.calories)}kcal)，可以再丰富一些`);
    }
    
    return suggestions;
}

function renderNutritionBreakdown(totals) {
    const breakdown = document.getElementById('nutritionBreakdown');
    const guideline = dietaryGuidelines[currentGuideline];
    
    const nutrients = [
        { name: '热量', value: `${Math.round(totals.calories)} kcal`, color: '#FF6B6B' },
        { name: '蛋白质', value: `${totals.protein.toFixed(1)} g`, color: '#4ECDC4' },
        { name: '碳水化合物', value: `${totals.carbs.toFixed(1)} g`, color: '#45B7D1' },
        { name: '脂肪', value: `${totals.fat.toFixed(1)} g`, color: '#96CEB4' },
        { name: '膳食纤维', value: `${totals.fiber.toFixed(1)} g`, color: '#DDA0DD' }
    ];
    
    let html = nutrients.map(nutrient => `
        <div class="nutrient-item">
            <div>
                <span class="nutrient-name">${nutrient.name}</span>
                <span class="nutrient-value">${nutrient.value}</span>
            </div>
        </div>
    `).join('');
    
    Object.keys(guideline).forEach(key => {
        if (key === 'name' || key === 'flag') return;
        const category = guideline[key];
        const actual = totals.categories[key];
        const percentage = Math.min(100, (actual / category.target) * 100);
        
        html += `
            <div class="nutrient-item">
                <div style="width: 100%;">
                    <div style="display: flex; justify-content: space-between;">
                        <span class="nutrient-name">${category.label}</span>
                        <span class="nutrient-value">${actual} / ${category.target}份</span>
                    </div>
                    <div class="nutrient-bar">
                        <div class="nutrient-progress" style="width: ${percentage}%; background: ${categoryColors[key]};"></div>
                    </div>
                </div>
            </div>
        `;
    });
    
    breakdown.innerHTML = html;
}

function renderSuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = `
        <h4>💡 改进建议</h4>
        <ul>
            ${suggestions.map(s => `<li>${s}</li>`).join('')}
        </ul>
    `;
}

function setupButtons() {
    document.getElementById('clearPlate').addEventListener('click', clearPlate);
    document.getElementById('saveScore').addEventListener('click', saveScore);
    document.getElementById('addToMeal').addEventListener('click', addToMealPlan);
    document.getElementById('guidelineSelect').addEventListener('change', changeGuideline);
    document.getElementById('allergenBtn').addEventListener('click', openAllergenModal);
    document.getElementById('saveAllergens').addEventListener('click', saveAllergens);
    document.getElementById('closeModal').addEventListener('click', closeAllergenModal);
    document.getElementById('clearWeekly').addEventListener('click', clearWeeklyPlan);
    document.getElementById('generateShoppingList').addEventListener('click', generateShoppingList);
    document.getElementById('saveWeeklyPlan').addEventListener('click', saveWeeklyPlan);
    document.getElementById('exportText').addEventListener('click', exportShoppingListAsText);
    document.getElementById('exportCSV').addEventListener('click', exportShoppingListAsCSV);
    document.getElementById('clearShoppingList').addEventListener('click', clearShoppingList);
}

function clearPlate() {
    plateFoods = [];
    
    const plateSections = document.querySelectorAll('.plate-section');
    plateSections.forEach(section => {
        const foods = section.querySelectorAll('.plate-food');
        foods.forEach(food => food.remove());
    });
    
    updateNutrition();
    
    document.getElementById('suggestions').innerHTML = '<p>餐盘已清空，重新开始搭配吧！</p>';
}

function saveScore() {
    const score = parseInt(document.getElementById('score').textContent);
    const totals = calculateTotals();
    
    const record = {
        score: score,
        date: new Date().toLocaleString('zh-CN'),
        calories: Math.round(totals.calories),
        foodCount: plateFoods.length
    };
    
    let history = JSON.parse(localStorage.getItem('nutritionHistory') || '[]');
    history.unshift(record);
    history = history.slice(0, 10);
    localStorage.setItem('nutritionHistory', JSON.stringify(history));
    
    loadHistory();
    
    alert(`得分 ${score} 已保存！');
}

function addToMealPlan() {
    if (plateFoods.length === 0) {
        alert('请先在餐盘中添加食物！');
        return;
    }
    
    const mealType = document.getElementById('mealType').value;
    const day = document.getElementById('daySelect').value;
    
    if (!weeklyPlan[day]) {
        weeklyPlan[day] = {};
    }
    
    weeklyPlan[day][mealType] = [...plateFoods];
    
    saveWeeklyPlanToStorage();
    renderWeeklyGrid();
    
    alert(`已添加到 ${dayNames[day]} ${mealNames[mealType].split(' ')[1]}！`);
    clearPlate();
}

function changeGuideline(e) {
    currentGuideline = e.target.value;
    const guideline = dietaryGuidelines[currentGuideline];
    document.getElementById('guidelineInfo').textContent = `${guideline.flag} ${guideline.name}`;
    updateNutrition();
}

function openAllergenModal() {
    const modal = document.getElementById('allergenModal');
    modal.style.display = 'flex';
    
    const checkboxes = modal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.checked = userAllergens.includes(cb.value);
    });
}

function closeAllergenModal() {
    document.getElementById('allergenModal').style.display = 'none';
}

function saveAllergens() {
    const checkboxes = document.querySelectorAll('#allergenModal input[type="checkbox"]:checked');
    userAllergens = Array.from(checkboxes).map(cb => cb.value);
    localStorage.setItem('userAllergens', JSON.stringify(userAllergens));
    closeAllergenModal();
    renderFoodItems();
    
    alert('过敏原设置已保存！');
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tab}Tab`).classList.add('active');
        });
    });
}

function renderWeeklyGrid() {
    const grid = document.getElementById('weeklyGrid');
    grid.innerHTML = '';
    
    days.forEach(day => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.innerHTML = `<h3>${dayNames[day]}</h3>`;
        
        mealTypes.forEach(mealType => {
            const mealFoods = (weeklyPlan[day] && weeklyPlan[day][mealType]) ? weeklyPlan[day][mealType] : [];
            const foodEmojis = mealFoods.map(f => f.emoji).join(' ');
            
            dayCard.innerHTML += `
                <div class="meal-slot">
                    <h4>${mealNames[mealType]}</h4>
                    <div class="food-list ${mealFoods.length === 0 ? 'empty' : ''}">
                        ${mealFoods.length > 0 ? mealFoods.map(f => `<span>${f.emoji}</span>`).join('') : ''}
                    </div>
                </div>
            `;
        });
        
        grid.appendChild(dayCard);
    });
}

function clearWeeklyPlan() {
    if (confirm('确定要清空一周食谱计划吗？')) {
        weeklyPlan = {};
        saveWeeklyPlanToStorage();
        renderWeeklyGrid();
    }
}

function saveWeeklyPlan() {
    saveWeeklyPlanToStorage();
    alert('食谱计划已保存！');
}

function saveWeeklyPlanToStorage() {
    localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
}

function generateShoppingList() {
    const foodCount = {};
    
    Object.values(weeklyPlan).forEach(dayMeals => {
        Object.values(dayMeals).forEach(meal => {
            meal.forEach(food => {
                if (!foodCount[food.id]) {
                    foodCount[food.id] = { ...food, count: 0 };
                }
                foodCount[food.id].count++;
            });
        });
    });
    
    shoppingListData = Object.values(foodCount);
    renderShoppingList();
    
    alert('购物清单已生成！');
    
    document.querySelector('[data-tab="shopping"]').click();
}

function renderShoppingList() {
    const listContainer = document.getElementById('shoppingList');
    const itemCount = document.getElementById('itemCount');
    const totalCalories = document.getElementById('totalCalories');
    
    if (shoppingListData.length === 0) {
        listContainer.innerHTML = '<p class="empty-list">暂无购物清单，先去规划一周食谱吧！</p>';
        itemCount.textContent = '0';
        totalCalories.textContent = '0 kcal';
        return;
    }
    
    const categorized = {
        grains: shoppingListData.filter(f => f.category === 'grains'),
        vegetables: shoppingListData.filter(f => f.category === 'vegetables'),
        fruits: shoppingListData.filter(f => f.category === 'fruits'),
        protein: shoppingListData.filter(f => f.category === 'protein'),
        dairy: shoppingListData.filter(f => f.category === 'dairy')
    };
    
    let html = '';
    Object.keys(categorized).forEach(category => {
        if (categorized[category].length > 0) {
            html += `
                <div class="shopping-category">
                    <h4>${categoryLabels[category]}</h4>
                    <div class="shopping-items">
                        ${categorized[category].map(food => `
                            <div class="shopping-item" data-id="${food.id}">
                                <span class="emoji">${food.emoji}</span>
                                <span class="name">${food.name} x${food.count}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });
    
    listContainer.innerHTML = html;
    
    const totalCals = shoppingListData.reduce((sum, f) => sum + (f.calories * f.count), 0);
    itemCount.textContent = shoppingListData.length;
    totalCalories.textContent = `${Math.round(totalCals)} kcal`;
    
    document.querySelectorAll('.shopping-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
        });
    });
}

function exportShoppingListAsText() {
    if (shoppingListData.length === 0) {
        alert('购物清单为空！');
        return;
    }
    
    let text = '🛒 购物清单\n';
    text += '=' .repeat(30) + '\n\n';
    
    const categorized = {
        grains: shoppingListData.filter(f => f.category === 'grains'),
        vegetables: shoppingListData.filter(f => f.category === 'vegetables'),
        fruits: shoppingListData.filter(f => f.category === 'fruits'),
        protein: shoppingListData.filter(f => f.category === 'protein'),
        dairy: shoppingListData.filter(f => f.category === 'dairy')
    };
    
    Object.keys(categorized).forEach(category => {
        if (categorized[category].length > 0) {
            text += `【${categoryLabels[category]}】\n';
            categorized[category].forEach(food => {
                text += `  ${food.emoji} ${food.name} x${food.count}\n`;
            });
            text += '\n';
        }
    });
    
    const totalCals = shoppingListData.reduce((sum, f) => sum + (f.calories * f.count), 0);
    text += `总计: ${shoppingListData.length} 种食物，约 ${Math.round(totalCals)} kcal\n`;
    text += `生成时间: ${new Date().toLocaleString('zh-CN')}`;
    
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '购物清单.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function exportShoppingListAsCSV() {
    if (shoppingListData.length === 0) {
        alert('购物清单为空！');
        return;
    }
    
    let csv = '名称,类别,数量,热量(kcal),蛋白质(g),碳水(g),脂肪(g)\n';
    
    shoppingListData.forEach(food => {
        csv += `"${food.name}","${categoryLabels[food.category]}",${food.count},${food.calories * food.count},${(food.protein * food.count).toFixed(1)},${(food.carbs * food.count).toFixed(1)},${(food.fat * food.count).toFixed(1)}\n`;
    });
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '购物清单.csv';
    a.click();
    URL.revokeObjectURL(url);
}

function clearShoppingList() {
    if (confirm('确定要清空购物清单吗？')) {
        shoppingListData = [];
        renderShoppingList();
    }
}

function loadHistory() {
    const historyList = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('nutritionHistory') || '[]');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p>暂无记录</p>';
        return;
    }
    
    historyList.innerHTML = history.map(record => `
        <div class="history-item">
            <div>
                <span class="history-score">${record.score}分</span>
                <span style="margin-left: 15px; color: #666;">${record.calories}kcal</span>
            </div>
            <span class="history-date">${record.date}</span>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);
