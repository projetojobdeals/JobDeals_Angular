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
    { title: 'Qual a forma de contato com a empresa?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Como me cadastro?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Qual a responsabilidade do site com o anúncio de vagas?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Como a empresa visualiza meu currículo?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Oque são as contas premium?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Como funcionam as contas premium?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Quais as formas de pagamento e como funciona?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
]
},

{
  sectionTitle:'Para Empresas',
  items:[
    { title: 'É gratuito para empresas?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Pode se cadastrar sem CNPJ?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Como ver referências e currículos dos candidatos?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Como anunciar minhas vagas?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Como alterar vagas?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Como desativar minhas vagas?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
    { title: 'Como recebo os currículos dos candidatos?', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad temporibus, praesentium nemo cupiditate, fugiat vitae eaque quibusdam nisi expedita officiis ducimus, maxime voluptas velit at voluptatum cum optio repellat.', active: false, contentHeight: 0 },
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