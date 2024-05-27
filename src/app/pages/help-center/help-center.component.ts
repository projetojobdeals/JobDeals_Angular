import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.css'
})
export class HelpCenterComponent implements AfterViewInit{

@ViewChildren('content') contentElements!: QueryList<ElementRef>;
@ViewChildren('icon') iconElements!: QueryList<ElementRef>;

sections = [
  {
    sectionTitle:'Perguntas Frequentes',
    items:[
      { title: 'Adicionar ou alterar e-mail', content: 'Para adicionar ou alterar um e-mail, entre em configurações - Acesso e segurança em seguida selecione a opção e-mails,nesta página selecione a opção alterar ou adicionar e-mail.', active: false, contentHeight: 0 },
      { title: 'Redefinir senha', content: 'Para redefinir sua senha, entre em configurações - Acesso e segurança em seguida selecione a opção alterar senha.', active: false, contentHeight: 0 },
      { title: 'Cancelar assinatura', content: 'Para cancelar sua assinatura, entre em configurações, Preferências da conta - Assinaturas e pagamentos, em seguida selecione a opção cancelar assinatura.', active: false, contentHeight: 0 },
      { title: 'Encerrar conta', content: 'Para encerrar sua conta, entre em configurações, Preferências da conta - Gerenciamento da conta, em seguida selecione a opção encerrar conta.', active: false, contentHeight: 0 },
      { title: 'Candidatar-se a vagas', content: 'Ao ver uma vaga do seu interesse você pode se candidatar de modo simples. Com base na preferência do anunciante da vaga, você verá um botão onde pode se candidatar facilmente.', active: false, contentHeight: 0 },
  ]
},

{
  sectionTitle:'Informações Básicas',
  items:[
    { title: 'Entrar e sair da conta', content: 'Para entrar na sua conta, vá até o canto superior direito e entre na área de login, coloque seu e-mail e senha caso seja cadastrado e entre no seu perfil.<br />Para sair da sua conta entre em configurações e selecione a opção sair da conta.', active: false, contentHeight: 0 },
    { title: 'Editar perfil', content: 'Para editar seu perfil, vá até o canto superior direito e selecione o ícone de perfil, entre em configurações de perfil e selecione a opção desejada.', active: false, contentHeight: 0 },
    { title: 'Procurar vagas', content: 'Para procurar vagas, vá a página principal e selecione a opção "Qual vaga você está buscando?"', active: false, contentHeight: 0 },
    { title: 'Gerenciar e-mails', content: 'Para gerenciar e-mails, entre em configurações - Acesso e segurança, em seguida selecione a opção e-mails, nesta página selecione a opção desejada.', active: false, contentHeight: 0 },
    { title: 'Sem acesso ao e-mail', content: 'Sem acesso ao e-mail? Entre em configurações - Acesso e segurança, em seguida selecione a opção e-mails, nesta página selecione a opção alterar e-mail.', active: false, contentHeight: 0 },
]
},

{
  sectionTitle:'Para Candidatos',
  items:[
    { title: 'Qual a forma de contato com a empresa?', content: 'Após a candidatura, se a empresa gostar do seu perfil o contato será feito via e-mail Empresa => Cadidato', active: false, contentHeight: 0 },
    { title: 'Como me cadastro?', content: 'No canto superior direito da página principal, entre em "Começar aqui" e preencha seus dados, depois faça login.', active: false, contentHeight: 0 },
    { title: 'Qual a responsabilidade do site com o anúncio de vagas?', content: 'Não somos responsáveis por qualquer tipo de vaga publicada, Apenas pelas empresas cadastradas, para visar sua segurança', active: false, contentHeight: 0 },
    { title: 'Como a empresa visualiza meu currículo?', content: 'Os currículos dos usuários são disponiblizados a partir da sua candidatura a vaga, mas também pode ser acessado pela página de procura a candidatos', active: false, contentHeight: 0 },
    { title: 'Oque são as contas premium?', content: 'Contas premium, são upgrades destinandos a melhorar seu perfil', active: false, contentHeight: 0 },
    { title: 'Como funcionam as contas premium?', content: 'Os planos são destinatos a melhoria da experiência no site, cada plano usufrui de benefícios e vantagens únicas', active: false, contentHeight: 0 },
    { title: 'Quais as formas de pagamento?', content: 'Os pagamentos são realizados via PIX ou cartão para maoir segurança do contratante', active: false, contentHeight: 0 },
]
},

{
  sectionTitle:'Para Empresas',
  items:[
    { title: 'É gratuito para empresas?', content: 'Sim, é gratuito, mas oferecemos planos que podem melhorar sua experiência na procura de novos candidatos', active: false, contentHeight: 0 },
    { title: 'Pode se cadastrar sem CNPJ?', content: 'Não é possivel se cadastrar sem um CNPJ, para melhor segurança dos usuários, o cadastro do CNPJ é obrigatório', active: false, contentHeight: 0 },
    { title: 'Como ver referências e currículos dos candidatos?', content: 'Entre no perfil do candidato e selecione a opção desejada', active: false, contentHeight: 0 },
    { title: 'Como anunciar minhas vagas?', content: 'Vá em perfil e depois em "Anuciar Vagas", preencha os dados referentes a vaga e publique', active: false, contentHeight: 0 },
    { title: 'Como alterar vagas?', content: 'Entre em seu perfil, selecione "Vagas Publicadas", entre na vaga que deseja alterar e selecione "Editar Vaga"', active: false, contentHeight: 0 },
    { title: 'Como desativar minhas vagas?', content: 'Entre em seu perfil, selecione "Vagas Publicadas", entre na vaga que deseja desativar e selecione "Editar Vaga", depois escolha a opção "Desativar vaga"', active: false, contentHeight: 0 },
    { title: 'Como recebo os currículos dos candidatos?', content: 'Quando os candidatos se inscrevem, as vagas automaticamente são enviados seus currículos para a aba da vaga escolhida, caso procure um candidato fora das candidaturas pesquise na página principal por perfis desejados e entre para ver seus respectivos currículos', active: false, contentHeight: 0 },
]
},

];

ngAfterViewInit() {
  this.updateContentHeights();
}

toggleAccordion(section: any, index: number) {
  const item = section.items[index];
  const activeItem = section.items.find((i: any) => i.active);

  if (activeItem && activeItem !== item) {
    activeItem.active = false;
    activeItem.contentHeight = 0;
  }

  item.active = !item.active;
  item.contentHeight = item.active ? this.calculateContentHeight(item) : 0;
}

updateContentHeights() {
  this.sections.forEach(section => {
    section.items.forEach((item: any) => {
      if (item.active) {
        item.contentHeight = this.calculateContentHeight(item);
      }
    });
  });
}

calculateContentHeight(item: any): number {
  // Lógica para calcular a altura do conteúdo, se necessário
  return 100; // Exemplo estático
}
}