// Variaveis
// inputs
const numberT = document.querySelector("#number-table");
const rangeN = document.querySelector("#range-number");
// botões
const btnGenerateTable = document.querySelector("#btn-generate");
const btnReset = document.querySelector("#btn-reset");
const operation = document.querySelector("#operation");

const tableResult = document.querySelector("#table-result");
const tableTitle = document.querySelector("#table-title span");
const table = document.querySelector("#table");

// Funções
const generateTable = (rangeN, rangeNumber) => {
    table.innerHTML = "";
    tableResult.style.display = "flex";
    // let i;
    for (let i = 1; i <= rangeNumber; i++) {
        // const result = rangeN * i;
        let result = 0;
        if (operation.value == "+") {
            result = rangeN + i;
        }
        else if (operation.value == "-") {
            result = rangeN - i;
        }
        else if (operation.value == "x") {
            result = rangeN * i;
        }
        else {
            result = rangeN / i;
            if (Number.isInteger(result)) {
                result;
            } else {
                result = "n/a";
                return result;
            }
        }

        // variavel que recebe um valor em formato de string.   
        let template =
            `<div id="table-values">
                <div class="row">
                    <div class="operation">${rangeN} ${operation.value} ${i} =</div>
                    <div class="result">  ${result}</div>
                </div>
            </div>`;

        // verifica se o resultado e um numero inteiro.
        if (result != "n/a") {
            template;
        } else {
            template = ``;
        }

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        table.appendChild(row);
    }
    tableTitle.innerHTML = ": " + rangeN;
}

// Eventos
// gerar tabela
btnGenerateTable.addEventListener("click", (event) => {
    const numberTable = +numberT.value;
    const rangeNumber = +rangeN.value;

    // validação de campo vazio.
    if (!numberTable || !rangeNumber) return;
    generateTable(numberTable, rangeNumber);
});

// zerar tabela
btnReset.addEventListener("click", () => {
    table.innerHTML = "";
    tableTitle.innerHTML = "";
    numberT.value = 1;
    rangeN.value = 10;
    tableResult.style.display = "none";
});