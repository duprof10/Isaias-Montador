# RESUMO DO PROJETO — ISAÍAS MONTADOR DE MÓVEIS

## 1. Informações principais

- **Cliente:** Isaías Montador de Móveis
- **Projeto local:** `C:\Projetos\Clientes\Isaias-Montador`
- **Tecnologias:** HTML, CSS e JavaScript
- **Arquivo principal:** `index.html`
- **JavaScript:** `js/script.js`
- **WhatsApp:** `(19) 99654-8045`
- **Número no link:** `5519996548045`
- **Instagram informado:** `isaiasmontadordemoveis548`
- **Horário informado:** segunda a sábado, das 7h às 21h, com flexibilidade por acordo; domingo não atende.

---

## 2. O que já foi feito

### Cabeçalho e menu
- Nome alterado para **Isaías Montador de Móveis**.
- Menu atual:
  - Serviços
  - Quem somos
  - Contato
- O item **Depoimentos** foi removido porque ainda não existem depoimentos reais.
- Botão **Solicitar orçamento** abre o WhatsApp do Isaías.

### Seção principal
- Título:
  **Montagem de móveis com qualidade, cuidado e confiança.**
- Descrição:
  **Montagem, desmontagem e pequenos reparos em móveis residenciais e comerciais, com atendimento em toda a região.**
- Botões:
  - Solicitar orçamento
  - Conhecer serviços

### Serviços já corrigidos
1. **Montagem de móveis**
   - Montagem cuidadosa de guarda-roupas, camas, cômodas, racks, mesas, armários e outros móveis.

2. **Desmontagem de móveis**
   - Desmontagem cuidadosa para mudanças, reformas ou reorganização do ambiente, preservando as peças do móvel.

3. **Pequenos reparos**
   - Ajustes em portas, dobradiças, gavetas, corrediças e outras peças para melhorar o funcionamento do móvel.

4. **Montagem residencial e comercial**
   - Serviço para casas, apartamentos, escritórios, lojas e outros ambientes, sempre com cuidado e organização.

### Quem somos
A seção fictícia de equipe foi substituída por:

- **Trabalho em família**
- Atendimento direto
- Experiência e confiança
- Compromisso familiar

O texto informa que Isaías trabalha ao lado do filho.

### Formulário de orçamento
- O formulário foi corrigido.
- O botão agora mostra **Enviar pelo WhatsApp**.
- O formulário pega:
  - nome;
  - telefone;
  - e-mail;
  - descrição do serviço.
- Ao enviar, abre o WhatsApp do Isaías com a mensagem pronta.
- O teste foi realizado e funcionou.

---

## 3. Código correto do `js/script.js`

```javascript
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
```

---

## 4. Próximo ponto para continuar

Ainda existem dois cartões genéricos na área de serviços:

- **Suporte Dedicado**
- **Experiência Única**

Eles precisam ser substituídos por serviços reais do Isaías.

Sugestões provisórias:

5. **Instalação e regulagem de móveis**
   - Regulagem de portas, gavetas, dobradiças e alinhamentos para melhorar o acabamento e o funcionamento.

6. **Atendimento com horário flexível**
   - Atendimento de segunda a sábado, com horários combinados conforme a necessidade do cliente.

Confirmar com Isaías antes de considerar esses textos definitivos.

---

## 5. Pendências importantes

- Confirmar com Isaías todas as cidades atendidas.
- Trocar a imagem genérica do topo por uma foto de montagem de móveis.
- Adicionar fotos reais dos trabalhos.
- Colocar o Instagram.
- Avaliar a inclusão do horário de atendimento no site.
- Inserir depoimentos apenas quando forem reais e autorizados.
- Testar o site no celular.
- Corrigir o menu para telas pequenas, caso fique apertado.
- Revisar ortografia e aparência final.
- Publicar em hospedagem e domínio.
- Criar política de privacidade caso seja necessário manter formulário ou ferramentas de análise.

---

## 6. Como retomar em outro chat

Copie e envie este texto junto com este arquivo:

> Estou criando um site em HTML, CSS e JavaScript para Isaías Montador de Móveis. O projeto está em `C:\Projetos\Clientes\Isaias-Montador`. Leia o arquivo `RESUMO_PROJETO_ISAIAS.md` antes de orientar qualquer alteração. Quero continuar um passo por vez, com instruções simples e sem alterar vários pontos de uma vez. O próximo passo é substituir os dois últimos cartões genéricos da seção de serviços.

---

## 7. Rotina de backup recomendada

Sempre que terminar uma etapa:

1. Salvar os arquivos no VS Code com `Ctrl + S`.
2. Fechar o VS Code.
3. Clicar com o botão direito na pasta `Isaias-Montador`.
4. Escolher **Compactar para arquivo ZIP**.
5. Renomear usando a data, por exemplo:
   `Isaias-Montador-backup-2026-07-13.zip`
6. Guardar uma cópia no Google Drive, OneDrive ou outro local fora do computador.

Não depender apenas da conversa do ChatGPT para guardar o projeto.
