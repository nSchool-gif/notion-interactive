
const data = {
    "選項一": {
        content: "這是選項一的內容",
        suggestion: "建議：請注意使用場景。"
    },
    "選項二": {
        content: "這是選項二的內容",
        suggestion: "建議：確認與主管討論過。"
    },
    "選項三": {
        content: "這是選項三的內容",
        suggestion: "建議：適合經驗較深的夥伴。"
    }
};

const dropdown = document.getElementById('dropdown');
const contentDiv = document.getElementById('content');
const suggestionDiv = document.getElementById('suggestion');

for (let key in data) {
    const option = document.createElement("option");
    option.value = key;
    option.text = key;
    dropdown.appendChild(option);
}

dropdown.addEventListener('change', function () {
    const selected = this.value;
    if (selected && data[selected]) {
        contentDiv.innerText = data[selected].content;
        suggestionDiv.innerText = data[selected].suggestion;
    } else {
        contentDiv.innerText = "";
        suggestionDiv.innerText = "";
    }
});

function copyContent() {
    const text = contentDiv.innerText;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("已複製內容！");
        });
    }
}
