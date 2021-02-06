let userAnswer = null;
let winSumm = 0;
let asker = [
    new Riddles('Кто проживает на дне океана?', 'Губка Боб Квадратные штаны', 'Огромный аллигатор', 'Русалочка', 'Автор этой игры', 'a', 100),
    new Riddles('Кто сказал фразу "Мне нужна твоя одежда, сапоги и мотоцикл..."?', 'Губка Боб Квадратные штаны', 'Терминатор', 'Сосед из 57 квартиры', 'Арнольд Шварцнеггер', 'b', 500),
    new Riddles('Кто ведущий программы "Галилео"?', 'Александр Пушной', 'Свинка Пепа', 'Уилл Смит', 'Галилей', 'a', 10000),
    new Riddles('Кто лысый ведущий передачи "Разрушители мифов"?', 'Адам Севидж', 'Джейми Хайнеман', 'Тори Беличи', 'Гран Имахара', 'b', 100000),
    new Riddles('Когда всё это кончится?', 'В следующем году', 'Никогда', 'Уже закончилась', 'Закончить сейчас, ведь ты управляешь реальностью!', 'd', 1000000)
];
// console.log(asker);

function quizQuestions() {
    for (let i = 0; i < asker.length; i++) {
        console.clear();
        console.log(`Вопрос № ${i + 1}`);
        console.log(asker[i].question + ` Сумма выигрыша: ${asker[i].winning} рублей`);
        console.log(`a. ${asker[i].a}`);
        console.log(`b. ${asker[i].b}`);
        console.log(`c. ${asker[i].c}`);
        console.log(`d. ${asker[i].d}`);
        userAnswer = prompt("Введите вариант ответа (a,b,c или d. Чтоыб забрать выигрышь и выйти из игры введите 'q'):");
        if (userAnswer.toLowerCase() == asker[i].rightAnswer) {
            winSumm = winSumm + asker[i].winning;
            alert(`Ответ верный! текущая сумма выигрыша составляет ${winSumm}!`);
        } else if (userAnswer.toLowerCase() == 'q') {
            alert(`Было приятно с Вами играть. Ваш выигрыш ${winSumm}`);
            break;
        } else {
            alert(`Увы, но нет, сумма выигрыша прежняя: ${winSumm}`);
        }

    }
    console.log(`Сумма итогового выигрыша составляет ${winSumm}!`);
}