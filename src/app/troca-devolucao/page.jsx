import Footer from "@/components/footer";
import Nav from "@/components/nave";

export default function TrocaDevolucao() {
  return (
    <div className="bg-beje">
      <Nav />
      <dir className="flex flex-col items-center px-5 text-justify md:mt-20 md:px-20">
        <h2 className="py-5 text-5xl text-vermelho font-bold mb-12">Política de Troca e Devolução</h2>
        <p className="">
          A Minas Tem Tudo de Bom trabalha com fornecedores selecionados, produtos de qualidade e procedência. Entretanto caso precise de ajuda nossa equipe estará pronta para lhe atender de forma ágil e satisfatória.
          <br /><br />
          <span className="font-bold text-xl">Cancelamentos:</span>
          <br /><br />
          Os cancelamentos de pedidos serão aceitos com total reembolso dos valores pagos somente se ainda não despachados. Caso já tenham sido remetidos, solicitamos que sejam devolvidos em suas embalagens invioladas juntamente com a nota fiscal e o reembolso será feito subtraindo-se os custos de frete.
          <br /><br />
          Como trabalhamos com produtos perecíveis, solicitamos que antes de efetuar a compra confirme se está tudo correto com o produto, o peso/tamanho, valor do frete e endereço de entrega. Caso tenha alguma dúvida entre em contato conosco, ficaremos felizes em lhe auxiliar.
          <br /><br />
          <span className="font-bold text-xl">Trocas e Devoluções:</span>
          <br /><br />
          Para trocas e devoluções somente serão aceitas quando for confirmado que se enquadra nas situações: produto entregue é diferente do pedido realizado, produto entregue estragado ou avariado, quantidade menor ou superior ao pedido. É necessário o envio de foto da caixa com os produtos recebidos e na situação de produtos faltando quantidade envie outra foto com o peso total da caixa com todos os produtos entregues.
          <br /><br />
          <span className="font-bold text-xl">Arrependimento:</span>
          <br /><br />
          Para devolver um produto por desistência ou arrependimento, o prazo para desistir ou trocar sua compra é de 7 (sete) dias corridos, a contar da data de recebimento do produto.
          <br /><br />
          O produto deverá estar na embalagem original, sem indícios de uso, sem violação do lacre original ou comprometido (rasgado, molhado, amassado ou faltando algum pedaço) e que estejam devidamente embalados assim como recebido. Não realizamos trocas de brindes.
          <br /><br />
          <span className="font-bold text-xl">Reembolsos:</span>
          <br /><br />
          O reembolso por desistência ou arrependimento se dará da seguinte forma:
          <br /><br />
          <span className="font-bold">1 - Compras pagas com Cartão de Crédito:</span> O Cliente poderá optar por receber um Vale Compras no valor pago, para ser utilizado na compra de qualquer produto na loja;
          <br /><br />
          <span className="font-bold">2 - Compras com Boleto Bancário ou Depósito:</span> O Cliente poderá optar por receber um Vale Compras no valor pago, para ser utilizado na compra de qualquer produto na loja;
          <br /><br />
          Solicitar à Minas Tem Tudo de Bom o reembolso em sua conta corrente.
          <br /><br />
          O Vale Compras á válido por 90 dias a contar da data de envio do mesmo.
          <br /><br />
          Se for comprovada a nossa falha, faremos o estorno de todos os valores pagos.
          <br /><br />
          Se alguma dúvida ainda persistir, entre em contato conosco, estamos disponíveis me nossos canais de atendimento de segunda a sexta-feira, de 8 às 18hs.
          <br /><br />
          Estamos felizes em lhe atender!
          <br /><br /><br />
        </p>
      </dir>
      <Footer />
    </div>
  );
}
