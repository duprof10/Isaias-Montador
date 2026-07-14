const formOrcamento = document.querySelector("#orcamento-form");

if (formOrcamento) {
    formOrcamento.addEventListener("submit", (event) => {
        event.preventDefault();

        const dados = new FormData(formOrcamento);

        const nome = String(dados.get("nome") || "").trim();
        const telefone = String(dados.get("telefone") || "").trim();
        const email = String(dados.get("email") || "").trim();
        const mensagem = String(dados.get("msg") || "").trim();

        const texto = [
            `Olá, Isaías! Meu nome é ${nome}.`,
            `Meu WhatsApp é ${telefone}.`,
            email ? `Meu e-mail é ${email}.` : "",
            "Gostaria de solicitar um orçamento.",
            mensagem ? `Detalhes do serviço: ${mensagem}` : ""
        ]
            .filter(Boolean)
            .join("\n");

        const url = `https://wa.me/5519996548045?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    });
}