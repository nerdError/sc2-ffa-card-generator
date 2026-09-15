

const scriptsInEvents = {

	async EventSheet1_Event65_Act3(runtime, localVars)
	{
		runtime.updateSliders()
	},

	async EventSheet1_Event65_Act5(runtime, localVars)
	{
		runtime.updateSliders()
	},

	async EventSheet1_Event124_Act2(runtime, localVars)
	{
async function copyImageToClipboard(imageUrl) {
    try {
        // 1. Проверяем, поддерживает ли браузер запись изображений
        if (!navigator.clipboard || !window.ClipboardItem) {
            throw new Error('Clipboard API не поддерживается');
        }

        // 2. Скачиваем изображение по URL
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error('Не удалось загрузить изображение');

        // 3. Преобразуем ответ в Blob
        const blob = await response.blob();

        // 4. Проверяем поддержку формата (например, PNG)
        if (!ClipboardItem.supports(blob.type)) {
            throw new Error(`Формат ${blob.type} не поддерживается для копирования`);
        }

        // 5. Создаём объект ClipboardItem и записываем в буфер
        const clipboardItem = new ClipboardItem({ [blob.type]: blob });
        await navigator.clipboard.write([clipboardItem]);

        console.log('Изображение скопировано!');
    } catch (err) {
        console.error('Ошибка копирования:', err);
    }
}

copyImageToClipboard(localVars.imageUrl);
	},

	async EventSheet1_Event78_Act1(runtime, localVars)
	{
		if (confirm('Вы уверены что хотите сбросить базу данных и отменить все изменения, добавления новых игроков и тд?')) {
		    localVars.doTheThing = 1;
		} else {}
	},

	async EventSheet1_Event73_Act1(runtime, localVars)
	{
const fileStamp = () => {
    const d = new Date(), p = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}_` +
           `${p(d.getHours())}-${p(d.getMinutes())}-${p(d.getSeconds())}`;
};

runtime.setReturnValue(fileStamp());
	},

	async EventSheet1_Event84_Act1(runtime, localVars)
	{
		const name = prompt('Введите имя игрока:', 'Игрок');
		if (name === null) {
		    // пользователь нажал «Отмена»
		} else {
		    localVars.name = name;
		    // name — введённая строка (может быть пустой)
		}
	},

	async EventSheet1_Event81_Act1(runtime, localVars)
	{
		if (confirm('Вы уверены что хотите удалить игрока?')) {
		    localVars.doTheThing = 1;
		} else {}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
