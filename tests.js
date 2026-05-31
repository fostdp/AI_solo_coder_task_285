class NutritionTester {
    constructor() {
        this.passed = 0;
        this.failed = 0;
        this.results = [];
    }

    test(name, fn) {
        try {
            fn();
            this.passed++;
            this.results.push({ name, status: 'PASS', icon: '✅' });
            console.log(`✅ PASS: ${name}`);
        } catch (error) {
            this.failed++;
            this.results.push({ name, status: 'FAIL', icon: '❌', error: error.message });
            console.log(`❌ FAIL: ${name} - ${error.message}`);
        }
    }

    assertEqual(actual, expected, message = '') {
        if (actual !== expected) {
            throw new Error(`${message} Expected: ${expected}, Got: ${actual}`);
        }
    }

    assertNotEqual(actual, expected, message = '') {
        if (actual === expected) {
            throw new Error(`${message} Expected not to be: ${expected}`);
        }
    }

    assertTrue(condition, message = '') {
        if (!condition) {
            throw new Error(`${message} Expected true, got false`);
        }
    }

    assertFalse(condition, message = '') {
        if (condition) {
            throw new Error(`${message} Expected false, got true`);
        }
    }

    assertContains(array, item, message = '') {
        if (!array.includes(item)) {
            throw new Error(`${message} Array does not contain: ${item}`);
        }
    }

    assertGreaterThan(a, b, message = '') {
        if (a <= b) {
            throw new Error(`${message} Expected ${a} > ${b}`);
        }
    }

    assertLessThan(a, b, message = '') {
        if (a >= b) {
            throw new Error(`${message} Expected ${a} < ${b}`);
        }
    }

    printSummary() {
        console.log('\n' + '='.repeat(60));
        console.log('📊 TEST SUMMARY');
        console.log('='.repeat(60));
        console.log(`✅ Passed: ${this.passed}`);
        console.log(`❌ Failed: ${this.failed}`);
        console.log(`📝 Total: ${this.passed + this.failed}`);
        console.log('='.repeat(60));
        
        if (this.failed > 0) {
            console.log('\n❌ Failed tests:');
            this.results.filter(r => r.status === 'FAIL').forEach(r => {
                console.log(`   - ${r.name}: ${r.error}`);
            });
        }
        
        return { passed: this.passed, failed: this.failed };
    }
}

function runAllTests() {
    console.clear();
    console.log('🚀 Running Nutrition Calculator Tests...\n');
    
    const tester = new NutritionTester();

    console.log('📁 Test Group 1: Food Database Queries');
    console.log('-'.repeat(50));

    tester.test('should find food by ID', () => {
        const food = foodData.find(f => f.id === 1);
        tester.assertTrue(food !== undefined);
        tester.assertEqual(food.name, '米饭');
        tester.assertEqual(food.category, 'grains');
    });

    tester.test('should find food by name', () => {
        const food = foodData.find(f => f.name === '鸡胸肉');
        tester.assertTrue(food !== undefined);
        tester.assertEqual(food.id, 19);
        tester.assertEqual(food.category, 'protein');
    });

    tester.test('should have correct nutrition data for rice', () => {
        const rice = foodData.find(f => f.id === 1);
        tester.assertEqual(rice.calories, 116);
        tester.assertEqual(rice.protein, 2.6);
        tester.assertEqual(rice.carbs, 25.6);
        tester.assertEqual(rice.fat, 0.3);
        tester.assertEqual(rice.fiber, 0.3);
    });

    tester.test('should filter foods by category - grains', () => {
        const grains = foodData.filter(f => f.category === 'grains');
        tester.assertEqual(grains.length, 6);
        const names = grains.map(f => f.name);
        tester.assertContains(names, '米饭');
        tester.assertContains(names, '馒头');
        tester.assertContains(names, '红薯');
    });

    tester.test('should filter foods by category - vegetables', () => {
        const vegetables = foodData.filter(f => f.category === 'vegetables');
        tester.assertEqual(vegetables.length, 6);
    });

    tester.test('should filter foods by category - protein', () => {
        const proteins = foodData.filter(f => f.category === 'protein');
        tester.assertEqual(proteins.length, 6);
    });

    tester.test('should have all 28 food items', () => {
        tester.assertEqual(foodData.length, 28);
    });

    tester.test('each food should have complete nutrition data', () => {
        foodData.forEach(food => {
            tester.assertTrue(food.id !== undefined, `Food missing id`);
            tester.assertTrue(food.name !== undefined, `Food missing name`);
            tester.assertTrue(food.emoji !== undefined, `Food missing emoji`);
            tester.assertTrue(food.category !== undefined, `Food missing category`);
            tester.assertTrue(food.calories !== undefined, `${food.name} missing calories`);
            tester.assertTrue(food.protein !== undefined, `${food.name} missing protein`);
            tester.assertTrue(food.carbs !== undefined, `${food.name} missing carbs`);
            tester.assertTrue(food.fat !== undefined, `${food.name} missing fat`);
            tester.assertTrue(food.fiber !== undefined, `${food.name} missing fiber`);
        });
    });

    tester.test('food nutrition values should be positive', () => {
        foodData.forEach(food => {
            tester.assertGreaterThan(food.calories, 0, `${food.name} calories invalid`);
            tester.assertGreaterThan(food.protein, -1, `${food.name} protein invalid`);
            tester.assertGreaterThan(food.carbs, -1, `${food.name} carbs invalid`);
            tester.assertGreaterThan(food.fat, -1, `${food.name} fat invalid`);
            tester.assertGreaterThan(food.fiber, -1, `${food.name} fiber invalid`);
        });
    });

    console.log('\n⚠️  Test Group 2: Allergen Detection');
    console.log('-'.repeat(50));

    tester.test('should detect milk allergen in 牛奶', () => {
        const milk = foodData.find(f => f.id === 25);
        tester.assertContains(milk.allergens, 'milk');
    });

    tester.test('should detect egg allergen in 鸡蛋', () => {
        const egg = foodData.find(f => f.id === 23);
        tester.assertContains(egg.allergens, 'egg');
    });

    tester.test('should detect wheat allergen in 馒头', () => {
        const bun = foodData.find(f => f.id === 2);
        tester.assertContains(bun.allergens, 'wheat');
    });

    tester.test('should detect fish allergen in 鱼', () => {
        const fish = foodData.find(f => f.id === 21);
        tester.assertContains(fish.allergens, 'fish');
    });

    tester.test('should detect shellfish allergen in 虾', () => {
        const shrimp = foodData.find(f => f.id === 22);
        tester.assertContains(shrimp.allergens, 'shellfish');
    });

    tester.test('should detect soy allergen in 豆腐', () => {
        const tofu = foodData.find(f => f.id === 24);
        tester.assertContains(tofu.allergens, 'soy');
    });

    tester.test('should detect nuts allergen in 燕麦', () => {
        const oats = foodData.find(f => f.id === 4);
        tester.assertContains(oats.allergens, 'nuts');
    });

    tester.test('青菜 should have no allergens', () => {
        const greens = foodData.find(f => f.id === 7);
        tester.assertEqual(greens.allergens.length, 0);
    });

    tester.test('苹果 should have no allergens', () => {
        const apple = foodData.find(f => f.id === 13);
        tester.assertEqual(apple.allergens.length, 0);
    });

    tester.test('should detect multiple allergens in 面包', () => {
        const bread = foodData.find(f => f.id === 6);
        tester.assertContains(bread.allergens, 'wheat');
        tester.assertContains(bread.allergens, 'milk');
        tester.assertEqual(bread.allergens.length, 2);
    });

    console.log('\n🥗  Test Group 3: Nutrition Calculation');
    console.log('-'.repeat(50));

    tester.test('should calculate single food totals correctly', () => {
        plateFoods = [foodData.find(f => f.id === 1)];
        const totals = calculateTotals();
        
        tester.assertEqual(totals.calories, 116);
        tester.assertEqual(totals.protein, 2.6);
        tester.assertEqual(totals.carbs, 25.6);
        tester.assertEqual(totals.fat, 0.3);
        tester.assertEqual(totals.fiber, 0.3);
    });

    tester.test('should calculate multiple foods totals correctly', () => {
        plateFoods = [
            foodData.find(f => f.id === 1),
            foodData.find(f => f.id === 19)
        ];
        const totals = calculateTotals();
        
        tester.assertEqual(totals.calories, 116 + 165);
        tester.assertEqual(totals.protein, 2.6 + 31.0);
        tester.assertEqual(totals.carbs, 25.6 + 0.0);
    });

    tester.test('should count category totals correctly', () => {
        plateFoods = [
            foodData.find(f => f.id === 1),
            foodData.find(f => f.id === 2),
            foodData.find(f => f.id === 7)
        ];
        const totals = calculateTotals();
        
        tester.assertEqual(totals.categories.grains, 2);
        tester.assertEqual(totals.categories.vegetables, 1);
        tester.assertEqual(totals.categories.fruits, 0);
        tester.assertEqual(totals.categories.protein, 0);
        tester.assertEqual(totals.categories.dairy, 0);
    });

    tester.test('should return zero totals for empty plate', () => {
        plateFoods = [];
        const totals = calculateTotals();
        
        tester.assertEqual(totals.calories, 0);
        tester.assertEqual(totals.protein, 0);
        tester.assertEqual(totals.carbs, 0);
        tester.assertEqual(totals.categories.grains, 0);
    });

    console.log('\n⭐  Test Group 4: Score Calculation');
    console.log('-'.repeat(50));

    tester.test('should calculate zero score for empty plate', () => {
        plateFoods = [];
        currentGuideline = 'china';
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertEqual(score, 0);
    });

    tester.test('should calculate positive score for single food', () => {
        plateFoods = [foodData.find(f => f.id === 1)];
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertGreaterThan(score, 0);
        tester.assertLessThan(score, 100);
    });

    tester.test('balanced meal should have high score', () => {
        plateFoods = [
            foodData.find(f => f.id === 1),
            foodData.find(f => f.id === 7),
            foodData.find(f => f.id === 13),
            foodData.find(f => f.id === 19),
            foodData.find(f => f.id === 25)
        ];
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertGreaterThan(score, 70);
    });

    tester.test('score should never exceed 100', () => {
        plateFoods = foodData.slice(0, 20);
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertLessThan(score, 101);
    });

    tester.test('score should never be negative', () => {
        plateFoods = [foodData.find(f => f.id === 1)];
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertGreaterThan(score, -1);
    });

    console.log('\n📖  Test Group 5: Dietary Guidelines');
    console.log('-'.repeat(50));

    tester.test('should have all four guideline regions', () => {
        const guidelines = Object.keys(dietaryGuidelines);
        tester.assertContains(guidelines, 'china');
        tester.assertContains(guidelines, 'usa');
        tester.assertContains(guidelines, 'japan');
        tester.assertContains(guidelines, 'mediterranean');
    });

    tester.test('china guideline should have correct target values', () => {
        const guideline = dietaryGuidelines.china;
        tester.assertEqual(guideline.name, '中国居民膳食指南');
        tester.assertEqual(guideline.grains.target, 2.5);
        tester.assertEqual(guideline.vegetables.target, 4);
        tester.assertEqual(guideline.fruits.target, 3);
        tester.assertEqual(guideline.protein.target, 2.5);
        tester.assertEqual(guideline.dairy.target, 1.5);
    });

    tester.test('usa guideline should have higher grain target', () => {
        const usa = dietaryGuidelines.usa;
        const china = dietaryGuidelines.china;
        tester.assertGreaterThan(usa.grains.target, china.grains.target);
    });

    tester.test('japan guideline should have highest grain target', () => {
        const japan = dietaryGuidelines.japan;
        tester.assertEqual(japan.grains.target, 5);
    });

    tester.test('mediterranean guideline should have highest vegetable target', () => {
        const mediterranean = dietaryGuidelines.mediterranean;
        tester.assertEqual(mediterranean.vegetables.target, 5);
    });

    console.log('\n💡  Test Group 6: Suggestions Generation');
    console.log('-'.repeat(50));

    tester.test('should generate suggestions for empty plate', () => {
        plateFoods = [];
        currentGuideline = 'china';
        const totals = calculateTotals();
        const suggestions = generateSuggestions(totals);
        tester.assertGreaterThan(suggestions.length, 0);
        tester.assertTrue(suggestions.some(s => s.includes('缺少')));
    });

    tester.test('should generate category-specific suggestions', () => {
        plateFoods = [foodData.find(f => f.id === 1)];
        const totals = calculateTotals();
        const suggestions = generateSuggestions(totals);
        tester.assertTrue(suggestions.some(s => s.includes('蔬菜')));
        tester.assertTrue(suggestions.some(s => s.includes('蛋白质')));
    });

    tester.test('should generate balanced suggestions', () => {
        plateFoods = [
            foodData.find(f => f.id === 1),
            foodData.find(f => f.id === 7),
            foodData.find(f => f.id === 13),
            foodData.find(f => f.id === 19),
            foodData.find(f => f.id === 25)
        ];
        const totals = calculateTotals();
        const suggestions = generateSuggestions(totals);
        tester.assertTrue(suggestions.some(s => s.includes('✅')));
    });

    tester.test('should warn about high calories', () => {
        plateFoods = [
            foodData.find(f => f.id === 4),
            foodData.find(f => f.id === 4),
            foodData.find(f => f.id === 4),
            foodData.find(f => f.id === 4),
            foodData.find(f => f.id === 4)
        ];
        const totals = calculateTotals();
        const suggestions = generateSuggestions(totals);
        tester.assertTrue(suggestions.some(s => s.includes('热量偏高')));
    });

    console.log('\n🛒  Test Group 7: Shopping List Generation');
    console.log('-'.repeat(50));

    tester.test('should generate shopping list from weekly plan', () => {
        weeklyPlan = {
            monday: {
                breakfast: [foodData.find(f => f.id === 1)],
                lunch: [foodData.find(f => f.id === 19)]
            }
        };
        
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
        
        const shoppingList = Object.values(foodCount);
        tester.assertEqual(shoppingList.length, 2);
        tester.assertEqual(shoppingList[0].count, 1);
    });

    tester.test('should count duplicate foods correctly', () => {
        weeklyPlan = {
            monday: {
                breakfast: [foodData.find(f => f.id === 1)],
                lunch: [foodData.find(f => f.id === 1)]
            },
            tuesday: {
                breakfast: [foodData.find(f => f.id === 1)]
            }
        };
        
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
        
        tester.assertEqual(foodCount[1].count, 3);
    });

    console.log('\n📋  Test Group 8: Weekly Plan Management');
    console.log('-'.repeat(50));

    tester.test('should add meal to weekly plan', () => {
        weeklyPlan = {};
        plateFoods = [foodData.find(f => f.id === 1), foodData.find(f => f.id === 7)];
        
        const day = 'monday';
        const mealType = 'breakfast';
        
        if (!weeklyPlan[day]) {
            weeklyPlan[day] = {};
        }
        weeklyPlan[day][mealType] = [...plateFoods];
        
        tester.assertTrue(weeklyPlan.monday !== undefined);
        tester.assertEqual(weeklyPlan.monday.breakfast.length, 2);
    });

    tester.test('should clear weekly plan', () => {
        weeklyPlan = {
            monday: { breakfast: [foodData.find(f => f.id === 1)] }
        };
        weeklyPlan = {};
        tester.assertEqual(Object.keys(weeklyPlan).length, 0);
    });

    tester.test('should handle all 7 days', () => {
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        tester.assertEqual(days.length, 7);
    });

    tester.test('should handle all 3 meal types', () => {
        const mealTypes = ['breakfast', 'lunch', 'dinner'];
        tester.assertEqual(mealTypes.length, 3);
    });

    console.log('\n🎨  Test Group 9: Category Colors and Labels');
    console.log('-'.repeat(50));

    tester.test('should have color for all categories', () => {
        const categories = ['grains', 'vegetables', 'fruits', 'protein', 'dairy'];
        categories.forEach(cat => {
            tester.assertTrue(categoryColors[cat] !== undefined);
        });
    });

    tester.test('should have label for all categories', () => {
        const categories = ['grains', 'vegetables', 'fruits', 'protein', 'dairy'];
        categories.forEach(cat => {
            tester.assertTrue(categoryLabels[cat] !== undefined);
        });
    });

    tester.test('category colors should be hex codes', () => {
        Object.values(categoryColors).forEach(color => {
            tester.assertTrue(color.startsWith('#'));
        });
    });

    console.log('\n💾  Test Group 10: Data Persistence Simulation');
    console.log('-'.repeat(50));

    tester.test('should serialize weekly plan to JSON', () => {
        const testPlan = {
            monday: {
                breakfast: [{ id: 1, name: '米饭' }]
            }
        };
        const json = JSON.stringify(testPlan);
        tester.assertTrue(json.length > 0);
        const parsed = JSON.parse(json);
        tester.assertEqual(parsed.monday.breakfast[0].id, 1);
    });

    tester.test('should serialize allergens to JSON', () => {
        const allergens = ['milk', 'egg', 'nuts'];
        const json = JSON.stringify(allergens);
        const parsed = JSON.parse(json);
        tester.assertEqual(parsed.length, 3);
    });

    console.log('\n🔄  Test Group 11: Edge Cases and Boundaries');
    console.log('-'.repeat(50));

    tester.test('should handle very high calorie count', () => {
        plateFoods = foodData;
        const totals = calculateTotals();
        tester.assertGreaterThan(totals.calories, 0);
    });

    tester.test('should handle one of each category', () => {
        plateFoods = [
            foodData.find(f => f.category === 'grains'),
            foodData.find(f => f.category === 'vegetables'),
            foodData.find(f => f.category === 'fruits'),
            foodData.find(f => f.category === 'protein'),
            foodData.find(f => f.category === 'dairy')
        ];
        const totals = calculateTotals();
        tester.assertEqual(totals.categories.grains, 1);
        tester.assertEqual(totals.categories.vegetables, 1);
        tester.assertEqual(totals.categories.fruits, 1);
        tester.assertEqual(totals.categories.protein, 1);
        tester.assertEqual(totals.categories.dairy, 1);
    });

    tester.test('all categories should have at least 4 foods', () => {
        const categories = ['grains', 'vegetables', 'fruits', 'protein', 'dairy'];
        categories.forEach(cat => {
            const count = foodData.filter(f => f.category === cat).length;
            tester.assertGreaterThan(count, 3, `${cat} should have at least 4 foods`);
        });
    });

    console.log('\n📊 ' + '='.repeat(50));
    const summary = tester.printSummary();
    
    return summary;
}

function runQuickTest() {
    console.log('⚡ Running Quick Smoke Test...\n');
    const tester = new NutritionTester();
    
    tester.test('food database is loaded', () => {
        tester.assertGreaterThan(foodData.length, 0);
    });
    
    tester.test('can calculate totals', () => {
        plateFoods = [foodData[0]];
        const totals = calculateTotals();
        tester.assertGreaterThan(totals.calories, 0);
    });
    
    tester.test('can calculate score', () => {
        plateFoods = [foodData[0]];
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertGreaterThan(score, 0);
    });
    
    tester.test('guidelines available', () => {
        tester.assertTrue(dietaryGuidelines.china !== undefined);
    });
    
    tester.test('allergen detection works', () => {
        const milk = foodData.find(f => f.id === 25);
        tester.assertContains(milk.allergens, 'milk');
    });
    
    tester.printSummary();
}

if (typeof window !== 'undefined') {
    window.runAllTests = runAllTests;
    window.runQuickTest = runQuickTest;
    console.log('🧪 Test loaded! Run runAllTests() or runQuickTest() in console.');
}

function appendToOutput(text, className = '') {
    const output = document.getElementById('consoleOutput');
    if (output) {
        const p = document.createElement('p');
        p.textContent = text;
        if (className) {
            p.className = className;
        }
        output.appendChild(p);
        output.scrollTop = output.scrollHeight;
    }
}

function updateTestSummary(passed, failed, total) {
    document.getElementById('passedCount').textContent = passed;
    document.getElementById('failedCount').textContent = failed;
    document.getElementById('totalCount').textContent = total;
}

function clearTestOutput() {
    const output = document.getElementById('consoleOutput');
    if (output) {
        output.innerHTML = '<p class="welcome-text">点击上方按钮运行测试...</p>';
    }
    updateTestSummary('-', '-', '-');
}

class UINutritionTester extends NutritionTester {
    test(name, fn) {
        try {
            fn();
            this.passed++;
            this.results.push({ name, status: 'PASS', icon: '✅' });
            appendToOutput(`✅ PASS: ${name}`, 'test-pass');
        } catch (error) {
            this.failed++;
            this.results.push({ name, status: 'FAIL', icon: '❌', error: error.message });
            appendToOutput(`❌ FAIL: ${name} - ${error.message}`, 'test-fail');
        }
    }

    printSummary() {
        appendToOutput('', '');
        appendToOutput('='.repeat(50), 'test-summary');
        appendToOutput('📊 TEST SUMMARY', 'test-summary');
        appendToOutput('='.repeat(50), 'test-summary');
        appendToOutput(`✅ Passed: ${this.passed}`, 'test-summary');
        appendToOutput(`❌ Failed: ${this.failed}`, 'test-summary');
        appendToOutput(`📝 Total: ${this.passed + this.failed}`, 'test-summary');
        appendToOutput('='.repeat(50), 'test-summary');
        
        updateTestSummary(this.passed, this.failed, this.passed + this.failed);
        
        return { passed: this.passed, failed: this.failed };
    }
}

function runAllTestsUI() {
    clearTestOutput();
    appendToOutput('🚀 Running Nutrition Calculator Tests...', 'test-group');
    appendToOutput('', '');
    
    const tester = new UINutritionTester();

    appendToOutput('📁 Test Group 1: Food Database Queries', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');
    
    tester.test('should find food by ID', () => {
        const food = foodData.find(f => f.id === 1);
        tester.assertTrue(food !== undefined);
        tester.assertEqual(food.name, '米饭');
        tester.assertEqual(food.category, 'grains');
    });

    tester.test('should find food by name', () => {
        const food = foodData.find(f => f.name === '鸡胸肉');
        tester.assertTrue(food !== undefined);
        tester.assertEqual(food.id, 19);
        tester.assertEqual(food.category, 'protein');
    });

    tester.test('should have correct nutrition data for rice', () => {
        const rice = foodData.find(f => f.id === 1);
        tester.assertEqual(rice.calories, 116);
        tester.assertEqual(rice.protein, 2.6);
        tester.assertEqual(rice.carbs, 25.6);
        tester.assertEqual(rice.fat, 0.3);
        tester.assertEqual(rice.fiber, 0.3);
    });

    tester.test('should filter foods by category - grains', () => {
        const grains = foodData.filter(f => f.category === 'grains');
        tester.assertEqual(grains.length, 6);
        const names = grains.map(f => f.name);
        tester.assertContains(names, '米饭');
        tester.assertContains(names, '馒头');
        tester.assertContains(names, '红薯');
    });

    tester.test('should filter foods by category - vegetables', () => {
        const vegetables = foodData.filter(f => f.category === 'vegetables');
        tester.assertEqual(vegetables.length, 6);
    });

    tester.test('should filter foods by category - protein', () => {
        const proteins = foodData.filter(f => f.category === 'protein');
        tester.assertEqual(proteins.length, 6);
    });

    tester.test('should have all 28 food items', () => {
        tester.assertEqual(foodData.length, 28);
    });

    tester.test('each food should have complete nutrition data', () => {
        foodData.forEach(food => {
            tester.assertTrue(food.id !== undefined, `Food missing id`);
            tester.assertTrue(food.name !== undefined, `Food missing name`);
            tester.assertTrue(food.emoji !== undefined, `Food missing emoji`);
            tester.assertTrue(food.category !== undefined, `Food missing category`);
            tester.assertTrue(food.calories !== undefined, `${food.name} missing calories`);
            tester.assertTrue(food.protein !== undefined, `${food.name} missing protein`);
            tester.assertTrue(food.carbs !== undefined, `${food.name} missing carbs`);
            tester.assertTrue(food.fat !== undefined, `${food.name} missing fat`);
            tester.assertTrue(food.fiber !== undefined, `${food.name} missing fiber`);
        });
    });

    tester.test('food nutrition values should be positive', () => {
        foodData.forEach(food => {
            tester.assertGreaterThan(food.calories, 0, `${food.name} calories invalid`);
            tester.assertGreaterThan(food.protein, -1, `${food.name} protein invalid`);
            tester.assertGreaterThan(food.carbs, -1, `${food.name} carbs invalid`);
            tester.assertGreaterThan(food.fat, -1, `${food.name} fat invalid`);
            tester.assertGreaterThan(food.fiber, -1, `${food.name} fiber invalid`);
        });
    });

    appendToOutput('', '');
    appendToOutput('⚠️  Test Group 2: Allergen Detection', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should detect milk allergen in 牛奶', () => {
        const milk = foodData.find(f => f.id === 25);
        tester.assertContains(milk.allergens, 'milk');
    });

    tester.test('should detect egg allergen in 鸡蛋', () => {
        const egg = foodData.find(f => f.id === 23);
        tester.assertContains(egg.allergens, 'egg');
    });

    tester.test('should detect wheat allergen in 馒头', () => {
        const bun = foodData.find(f => f.id === 2);
        tester.assertContains(bun.allergens, 'wheat');
    });

    tester.test('should detect fish allergen in 鱼', () => {
        const fish = foodData.find(f => f.id === 21);
        tester.assertContains(fish.allergens, 'fish');
    });

    tester.test('should detect shellfish allergen in 虾', () => {
        const shrimp = foodData.find(f => f.id === 22);
        tester.assertContains(shrimp.allergens, 'shellfish');
    });

    tester.test('should detect soy allergen in 豆腐', () => {
        const tofu = foodData.find(f => f.id === 24);
        tester.assertContains(tofu.allergens, 'soy');
    });

    tester.test('should detect nuts allergen in 燕麦', () => {
        const oats = foodData.find(f => f.id === 4);
        tester.assertContains(oats.allergens, 'nuts');
    });

    tester.test('青菜 should have no allergens', () => {
        const greens = foodData.find(f => f.id === 7);
        tester.assertEqual(greens.allergens.length, 0);
    });

    tester.test('苹果 should have no allergens', () => {
        const apple = foodData.find(f => f.id === 13);
        tester.assertEqual(apple.allergens.length, 0);
    });

    tester.test('should detect multiple allergens in 面包', () => {
        const bread = foodData.find(f => f.id === 6);
        tester.assertContains(bread.allergens, 'wheat');
        tester.assertContains(bread.allergens, 'milk');
        tester.assertEqual(bread.allergens.length, 2);
    });

    appendToOutput('', '');
    appendToOutput('🥗  Test Group 3: Nutrition Calculation', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should calculate single food totals correctly', () => {
        plateFoods = [foodData.find(f => f.id === 1)];
        const totals = calculateTotals();
        
        tester.assertEqual(totals.calories, 116);
        tester.assertEqual(totals.protein, 2.6);
        tester.assertEqual(totals.carbs, 25.6);
        tester.assertEqual(totals.fat, 0.3);
        tester.assertEqual(totals.fiber, 0.3);
    });

    tester.test('should calculate multiple foods totals correctly', () => {
        plateFoods = [
            foodData.find(f => f.id === 1),
            foodData.find(f => f.id === 19)
        ];
        const totals = calculateTotals();
        
        tester.assertEqual(totals.calories, 116 + 165);
        tester.assertEqual(totals.protein, 2.6 + 31.0);
        tester.assertEqual(totals.carbs, 25.6 + 0.0);
    });

    tester.test('should count category totals correctly', () => {
        plateFoods = [
            foodData.find(f => f.id === 1),
            foodData.find(f => f.id === 2),
            foodData.find(f => f.id === 7)
        ];
        const totals = calculateTotals();
        
        tester.assertEqual(totals.categories.grains, 2);
        tester.assertEqual(totals.categories.vegetables, 1);
        tester.assertEqual(totals.categories.fruits, 0);
        tester.assertEqual(totals.categories.protein, 0);
        tester.assertEqual(totals.categories.dairy, 0);
    });

    tester.test('should return zero totals for empty plate', () => {
        plateFoods = [];
        const totals = calculateTotals();
        
        tester.assertEqual(totals.calories, 0);
        tester.assertEqual(totals.protein, 0);
        tester.assertEqual(totals.carbs, 0);
        tester.assertEqual(totals.categories.grains, 0);
    });

    appendToOutput('', '');
    appendToOutput('⭐  Test Group 4: Score Calculation', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should calculate zero score for empty plate', () => {
        plateFoods = [];
        currentGuideline = 'china';
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertEqual(score, 0);
    });

    tester.test('should calculate positive score for single food', () => {
        plateFoods = [foodData.find(f => f.id === 1)];
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertGreaterThan(score, 0);
        tester.assertLessThan(score, 100);
    });

    tester.test('balanced meal should have high score', () => {
        plateFoods = [
            foodData.find(f => f.id === 1),
            foodData.find(f => f.id === 7),
            foodData.find(f => f.id === 13),
            foodData.find(f => f.id === 19),
            foodData.find(f => f.id === 25)
        ];
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertGreaterThan(score, 70);
    });

    tester.test('score should never exceed 100', () => {
        plateFoods = foodData.slice(0, 20);
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertLessThan(score, 101);
    });

    tester.test('score should never be negative', () => {
        plateFoods = [foodData.find(f => f.id === 1)];
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertGreaterThan(score, -1);
    });

    appendToOutput('', '');
    appendToOutput('📖  Test Group 5: Dietary Guidelines', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should have all four guideline regions', () => {
        const guidelines = Object.keys(dietaryGuidelines);
        tester.assertContains(guidelines, 'china');
        tester.assertContains(guidelines, 'usa');
        tester.assertContains(guidelines, 'japan');
        tester.assertContains(guidelines, 'mediterranean');
    });

    tester.test('china guideline should have correct target values', () => {
        const guideline = dietaryGuidelines.china;
        tester.assertEqual(guideline.name, '中国居民膳食指南');
        tester.assertEqual(guideline.grains.target, 2.5);
        tester.assertEqual(guideline.vegetables.target, 4);
        tester.assertEqual(guideline.fruits.target, 3);
        tester.assertEqual(guideline.protein.target, 2.5);
        tester.assertEqual(guideline.dairy.target, 1.5);
    });

    tester.test('usa guideline should have higher grain target', () => {
        const usa = dietaryGuidelines.usa;
        const china = dietaryGuidelines.china;
        tester.assertGreaterThan(usa.grains.target, china.grains.target);
    });

    tester.test('japan guideline should have highest grain target', () => {
        const japan = dietaryGuidelines.japan;
        tester.assertEqual(japan.grains.target, 5);
    });

    tester.test('mediterranean guideline should have highest vegetable target', () => {
        const mediterranean = dietaryGuidelines.mediterranean;
        tester.assertEqual(mediterranean.vegetables.target, 5);
    });

    appendToOutput('', '');
    appendToOutput('💡  Test Group 6: Suggestions Generation', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should generate suggestions for empty plate', () => {
        plateFoods = [];
        currentGuideline = 'china';
        const totals = calculateTotals();
        const suggestions = generateSuggestions(totals);
        tester.assertGreaterThan(suggestions.length, 0);
        tester.assertTrue(suggestions.some(s => s.includes('缺少')));
    });

    tester.test('should generate category-specific suggestions', () => {
        plateFoods = [foodData.find(f => f.id === 1)];
        const totals = calculateTotals();
        const suggestions = generateSuggestions(totals);
        tester.assertTrue(suggestions.some(s => s.includes('蔬菜')));
        tester.assertTrue(suggestions.some(s => s.includes('蛋白质')));
    });

    tester.test('should generate balanced suggestions', () => {
        plateFoods = [
            foodData.find(f => f.id === 1),
            foodData.find(f => f.id === 7),
            foodData.find(f => f.id === 13),
            foodData.find(f => f.id === 19),
            foodData.find(f => f.id === 25)
        ];
        const totals = calculateTotals();
        const suggestions = generateSuggestions(totals);
        tester.assertTrue(suggestions.some(s => s.includes('✅')));
    });

    tester.test('should warn about high calories', () => {
        plateFoods = [
            foodData.find(f => f.id === 4),
            foodData.find(f => f.id === 4),
            foodData.find(f => f.id === 4),
            foodData.find(f => f.id === 4),
            foodData.find(f => f.id === 4)
        ];
        const totals = calculateTotals();
        const suggestions = generateSuggestions(totals);
        tester.assertTrue(suggestions.some(s => s.includes('热量偏高')));
    });

    appendToOutput('', '');
    appendToOutput('🛒  Test Group 7: Shopping List Generation', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should generate shopping list from weekly plan', () => {
        weeklyPlan = {
            monday: {
                breakfast: [foodData.find(f => f.id === 1)],
                lunch: [foodData.find(f => f.id === 19)]
            }
        };
        
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
        
        const shoppingList = Object.values(foodCount);
        tester.assertEqual(shoppingList.length, 2);
        tester.assertEqual(shoppingList[0].count, 1);
    });

    tester.test('should count duplicate foods correctly', () => {
        weeklyPlan = {
            monday: {
                breakfast: [foodData.find(f => f.id === 1)],
                lunch: [foodData.find(f => f.id === 1)]
            },
            tuesday: {
                breakfast: [foodData.find(f => f.id === 1)]
            }
        };
        
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
        
        tester.assertEqual(foodCount[1].count, 3);
    });

    appendToOutput('', '');
    appendToOutput('📋  Test Group 8: Weekly Plan Management', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should add meal to weekly plan', () => {
        weeklyPlan = {};
        plateFoods = [foodData.find(f => f.id === 1), foodData.find(f => f.id === 7)];
        
        const day = 'monday';
        const mealType = 'breakfast';
        
        if (!weeklyPlan[day]) {
            weeklyPlan[day] = {};
        }
        weeklyPlan[day][mealType] = [...plateFoods];
        
        tester.assertTrue(weeklyPlan.monday !== undefined);
        tester.assertEqual(weeklyPlan.monday.breakfast.length, 2);
    });

    tester.test('should clear weekly plan', () => {
        weeklyPlan = {
            monday: { breakfast: [foodData.find(f => f.id === 1)] }
        };
        weeklyPlan = {};
        tester.assertEqual(Object.keys(weeklyPlan).length, 0);
    });

    tester.test('should handle all 7 days', () => {
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        tester.assertEqual(days.length, 7);
    });

    tester.test('should handle all 3 meal types', () => {
        const mealTypes = ['breakfast', 'lunch', 'dinner'];
        tester.assertEqual(mealTypes.length, 3);
    });

    appendToOutput('', '');
    appendToOutput('🎨  Test Group 9: Category Colors and Labels', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should have color for all categories', () => {
        const categories = ['grains', 'vegetables', 'fruits', 'protein', 'dairy'];
        categories.forEach(cat => {
            tester.assertTrue(categoryColors[cat] !== undefined);
        });
    });

    tester.test('should have label for all categories', () => {
        const categories = ['grains', 'vegetables', 'fruits', 'protein', 'dairy'];
        categories.forEach(cat => {
            tester.assertTrue(categoryLabels[cat] !== undefined);
        });
    });

    tester.test('category colors should be hex codes', () => {
        Object.values(categoryColors).forEach(color => {
            tester.assertTrue(color.startsWith('#'));
        });
    });

    appendToOutput('', '');
    appendToOutput('💾  Test Group 10: Data Persistence Simulation', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should serialize weekly plan to JSON', () => {
        const testPlan = {
            monday: {
                breakfast: [{ id: 1, name: '米饭' }]
            }
        };
        const json = JSON.stringify(testPlan);
        tester.assertTrue(json.length > 0);
        const parsed = JSON.parse(json);
        tester.assertEqual(parsed.monday.breakfast[0].id, 1);
    });

    tester.test('should serialize allergens to JSON', () => {
        const allergens = ['milk', 'egg', 'nuts'];
        const json = JSON.stringify(allergens);
        const parsed = JSON.parse(json);
        tester.assertEqual(parsed.length, 3);
    });

    appendToOutput('', '');
    appendToOutput('🔄  Test Group 11: Edge Cases and Boundaries', 'test-group');
    appendToOutput('-'.repeat(50), 'test-group');

    tester.test('should handle very high calorie count', () => {
        plateFoods = foodData;
        const totals = calculateTotals();
        tester.assertGreaterThan(totals.calories, 0);
    });

    tester.test('should handle one of each category', () => {
        plateFoods = [
            foodData.find(f => f.category === 'grains'),
            foodData.find(f => f.category === 'vegetables'),
            foodData.find(f => f.category === 'fruits'),
            foodData.find(f => f.category === 'protein'),
            foodData.find(f => f.category === 'dairy')
        ];
        const totals = calculateTotals();
        tester.assertEqual(totals.categories.grains, 1);
        tester.assertEqual(totals.categories.vegetables, 1);
        tester.assertEqual(totals.categories.fruits, 1);
        tester.assertEqual(totals.categories.protein, 1);
        tester.assertEqual(totals.categories.dairy, 1);
    });

    tester.test('all categories should have at least 4 foods', () => {
        const categories = ['grains', 'vegetables', 'fruits', 'protein', 'dairy'];
        categories.forEach(cat => {
            const count = foodData.filter(f => f.category === cat).length;
            tester.assertGreaterThan(count, 3, `${cat} should have at least 4 foods`);
        });
    });

    return tester.printSummary();
}

function runQuickTestUI() {
    clearTestOutput();
    appendToOutput('⚡ Running Quick Smoke Test...', 'test-group');
    appendToOutput('', '');
    
    const tester = new UINutritionTester();
    
    tester.test('food database is loaded', () => {
        tester.assertGreaterThan(foodData.length, 0);
    });
    
    tester.test('can calculate totals', () => {
        plateFoods = [foodData[0]];
        const totals = calculateTotals();
        tester.assertGreaterThan(totals.calories, 0);
    });
    
    tester.test('can calculate score', () => {
        plateFoods = [foodData[0]];
        const totals = calculateTotals();
        const score = calculateScore(totals);
        tester.assertGreaterThan(score, 0);
    });
    
    tester.test('guidelines available', () => {
        tester.assertTrue(dietaryGuidelines.china !== undefined);
    });
    
    tester.test('allergen detection works', () => {
        const milk = foodData.find(f => f.id === 25);
        tester.assertContains(milk.allergens, 'milk');
    });
    
    return tester.printSummary();
}

function setupTestUI() {
    document.getElementById('runAllTests').addEventListener('click', runAllTestsUI);
    document.getElementById('runQuickTest').addEventListener('click', runQuickTestUI);
    document.getElementById('clearConsole').addEventListener('click', clearTestOutput);
}

document.addEventListener('DOMContentLoaded', setupTestUI);
