const products = [
  ['Rolamentos','SKF | NSK | TIMKEN','Precisao e durabilidade para equipamentos que nao podem parar.',['Esferas, rolos e agulhas','Medidas metricas e em polegadas','Opcoes blindadas e vedadas']],
  ['Mancais','SKF | FRM | ISB','Conjuntos robustos que facilitam a montagem e protegem o rolamento.',['Mancais bipartidos e pillow block','Ferro fundido, inox e termoplastico','Lubrificacao simplificada']],
  ['Correias sincronizadas','Gates | Continental | Rexon','Transmissao precisa para sincronizar o movimento da sua operacao.',['Perfil metricos e em polegadas','Alta resistencia ao desgaste','Aplicacoes industriais e automotivas']],
  ['Retentores','Sabo | Arca | Corteco','Vedacao confiavel contra contaminacao, poeira e perda de lubrificante.',['NBR, Viton e silicone','Medidas padrao e especiais','Alta resistencia termica']],
  ['Correntes industriais','GBR | OBM','Componentes para transmissao de potencia em ambientes exigentes.',['Correntes de rolos e especiais','Emendas e rodas dentadas','Dimensionamento tecnico']],
  ['Polias','Mademil | Especiais','Polias e elementos de acionamento para um conjunto eficiente.',['Perfil para correias em V','Aluminio, aco e ferro fundido','Usinagem sob medida']],
  ['Guias lineares','Hiwin | THK','Movimento linear com rigidez, repetibilidade e baixo atrito.',['Trilhos e blocos lineares','Fusos e patins','Projetos de automacao']],
  ['Acoplamentos','Mademil','Conexao segura entre eixos para absorver desalinhamentos e vibracoes.',['Elastico, engrenado e rigido','Modelos para alta torcao','Elementos de reposicao']],
  ['Engrenagens','Diversas aplicacoes','Pecas para transmissao mecanica com desempenho consistente.',['Cilindricas, conicas e sem-fim','Aco, nylon e bronze','Desenvolvimento por amostra']],
  ['Correias em V','Gates | Continental','A solucao classica e confiavel para transmissao industrial.',['Perfis A, B, C, SPA e SPB','Correias lisas e dentadas','Kits pareados']],
  ['Correias transportadoras','PVC | PU | borracha','Esteiras e correias para transportar com produtividade e seguranca.',['Cortes e emendas','Revestimentos tecnicos','Projetos sob medida']],
  ['Componentes especiais','Projetos e usinagem','Da amostra a peca pronta, com suporte para a sua aplicacao.',['Usinagem conforme desenho','Prototipos e pequenas series','Atendimento especializado']]
];
products.splice(11,0,['Esferas inox','Alta precisão','Esferas de aço inox para aplicações que exigem precisão e resistência à corrosão.',['Diferentes diâmetros sob consulta','Aplicações industriais','Seleção conforme a necessidade']]);
const productGrid=document.querySelector('#productGrid');
const productImages=['rolamentos.png','mancais.jpg','correias-sincronizadas.png','retentores.jpg','correntes.jpg','polias.png','guias-lineares.png','acoplamentos.png','engrenagens.png','correias-v.png','correias-transportadoras.png','componentes-especiais.png'];
productImages.splice(11,0,'esferas-inox.png');
products.forEach(([name,brand],index)=>{const card=document.createElement('article');card.className='product-card reveal';card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`Ver detalhes de ${name}`);card.innerHTML=`<div class="product-visual"></div><div><strong>${name}</strong><small>${brand}</small></div>`;const visual=card.querySelector('.product-visual');visual.style.backgroundImage=`url('assets/products/${productImages[index]}')`;visual.style.backgroundPosition='center';card.addEventListener('click',()=>openProduct(name));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openProduct(name)}});productGrid.append(card)});
const productDialog=document.querySelector('#productDialog');
function openProduct(name){const product=products.find(item=>item[0]===name);productDialog.querySelector('h2').textContent=product[0];productDialog.querySelector('.dialog-description').textContent=product[2];productDialog.querySelector('.dialog-features').innerHTML=product[3].map(item=>`<li>${item}</li>`).join('');productDialog.querySelector('.dialog-whatsapp').href=`https://wa.me/5548998478255?text=${encodeURIComponent('Ola! Quero consultar '+name+'.')}`;productDialog.querySelector('.dialog-image').style.backgroundImage=`url('assets/products/${productImages[products.indexOf(product)]}')`;productDialog.showModal()}
const contractDialog=document.querySelector('#contractDialog');document.querySelector('[data-open-contract]').addEventListener('click',()=>contractDialog.showModal());
document.querySelectorAll('.dialog-close').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()}));
document.querySelector('.menu-button').addEventListener('click',e=>{const header=document.querySelector('.topbar');const open=header.classList.toggle('menu-open');e.currentTarget.setAttribute('aria-expanded',open);});
document.querySelectorAll('.topbar nav a').forEach(link=>link.addEventListener('click',()=>{document.querySelector('.topbar').classList.remove('menu-open');document.querySelector('.menu-button').setAttribute('aria-expanded','false')}));
document.querySelector('.quote-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const name=data.get('nome');const phone=data.get('telefone');const need=data.get('produto');const text=`Ola! Meu nome e ${name}. Meu WhatsApp é ${phone}. E-mail: ${data.get('email')}. Preciso de: ${need}.`;document.querySelector('.form-status').textContent='Abrindo WhatsApp para enviar sua solicitacao...';window.open(`https://wa.me/5548998478255?text=${encodeURIComponent(text)}`,'_blank');});
if(window.gsap&&window.ScrollTrigger){gsap.registerPlugin(ScrollTrigger);const mm=gsap.matchMedia();mm.add({'motion':'(prefers-reduced-motion: no-preference)'},()=>{gsap.from('.hero-content > *',{y:24,autoAlpha:0,stagger:.11,duration:.72,ease:'power3.out'});gsap.to('.hero-photo',{scale:1.1,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.7}});ScrollTrigger.batch('.reveal',{start:'top 88%',once:true,onEnter:items=>gsap.from(items,{y:22,autoAlpha:0,stagger:.055,duration:.45,ease:'power2.out'})});gsap.from('.solutions-copy,.solution-list,.contract-card',{y:28,autoAlpha:0,stagger:.13,duration:.65,ease:'power3.out',scrollTrigger:{trigger:'.solutions',start:'top 75%',once:true}});});}
const icon=(name)=>'<i data-lucide="'+name+'" aria-hidden="true"></i>';
document.querySelectorAll('.hero-quick span').forEach((el,i)=>el.outerHTML=icon(i?'shopping-cart':'map-pin'));
document.querySelectorAll('.solution-list li').forEach((el,i)=>el.insertAdjacentHTML('afterbegin',icon(['badge-dollar-sign','refresh-cw','component','wrench','drafting-compass','headset'][i])));
document.querySelectorAll('.values span').forEach((el,i)=>el.insertAdjacentHTML('afterbegin',icon(['badge-check','contact','settings','handshake'][i])));
document.querySelectorAll('.steps li').forEach((el,i)=>el.querySelector('b').insertAdjacentHTML('afterend','<div class="step-icon">'+icon(['message-circle','clipboard-list','truck'][i])+'</div>'));
document.querySelectorAll('.contact-details p').forEach((el,i)=>el.insertAdjacentHTML('afterbegin',icon(['message-circle','mail','instagram','map-pin'][i])));
document.querySelector('.whatsapp-float').innerHTML=icon('message-circle');
document.querySelector('.header-contact').insertAdjacentHTML('beforeend','<a class="header-instagram" href="https://instagram.com/AlphaRol_" target="_blank" rel="noreferrer">@AlphaRol_<small>Siga nosso insta</small></a>');
document.querySelectorAll('.button b,.section-heading b,.contract-card button b').forEach(el=>el.innerHTML=icon('arrow-right'));
document.querySelector('#contractDialog .button').addEventListener('click',()=>contractDialog.close());
const productSelect=document.querySelector('select[name="produto"]');
productSelect.innerHTML='<option value="">O que você precisa?</option>'+products.map(p=>'<option>'+p[0]+'</option>').join('')+'<option>Outra necessidade</option>';
productSelect.required=true;
if(window.lucide)lucide.createIcons();
