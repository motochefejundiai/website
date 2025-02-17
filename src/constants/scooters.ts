import { Product } from '@/types/products'

export const scooterBenefits = [
  {
    label: 'Economia diária',
    value: 'Reduza gastos com combustível e manutenção.',
    icon: 'PiggyBank'
  },
  {
    label: 'Sustentabilidade',
    value: 'Zero emissões de poluentes, ajudando o meio ambiente.',
    icon: 'Leaf'
  },
  {
    label: 'Autonomia ampliada',
    value: 'Baterias de longa duração para mais liberdade.',
    icon: 'BatteryCharging'
  },
  {
    label: 'Facilidade de recarga',
    value: 'Recarregue em qualquer tomada comum.',
    icon: 'Plug'
  },
  {
    label: 'Baixo custo de manutenção',
    value: 'Sem necessidade de óleo ou peças caras.',
    icon: 'Wrench'
  },
  {
    label: 'Condução silenciosa',
    value: 'Desfrute de uma pilotagem sem ruídos.',
    icon: 'Volume2'
  },
  {
    label: 'Maior agilidade no trânsito',
    value: 'Escape do congestionamento com facilidade.',
    icon: 'Move'
  },
  {
    label: 'Facilidade de estacionamento',
    value: 'Encontre vagas com mais rapidez.',
    icon: 'SquareParking'
  },
  {
    label: 'Desempenho eficiente',
    value: 'Motores potentes para o dia a dia.',
    icon: 'Gauge'
  }
  // {
  //   label: 'Menos burocracia',
  //   value: 'Modelos que dispensam habilitação em algumas categorias.',
  //   icon: 'ClipboardCheck'
  // },
  // {
  //   label: 'Garantia estendida',
  //   value: 'Segurança e confiabilidade na sua compra.',
  //   icon: 'ShieldCheck'
  // },
  // {
  //   label: 'Design moderno e inovador',
  //   value: 'Estilo e tecnologia em um só veículo.',
  //   icon: 'Sparkles'
  // },
  // {
  //   label: 'Conforto na pilotagem',
  //   value: 'Suspensão eficiente e assento ergonômico.',
  //   icon: 'Armchair'
  // },
  // {
  //   label: 'Tecnologia integrada',
  //   value: 'Painel digital, iluminação LED e conectividade.',
  //   icon: 'Cpu'
  // },
  // {
  //   label: 'Atendimento premium',
  //   value: 'Suporte especializado para garantir a melhor experiência.',
  //   icon: 'Headset'
  // }
] as const

export const products: Product[] = [
  {
    model: 'x12',
    name: 'X12',
    cover: '/models/x12/0.jpg',
    needCnh: false,
    numberOfImages: 8,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 50Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água IP65*',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 6 horas',
      'Alarme com bloqueio e trava',
      'Carregador Smart bivolt (desliga quando a carga está completa)',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Compartimento para bateria Extra, dobrando autonomia',
      'Freio a disco hidráulico dianteiro e traseiro',
      'Banco duplo',
      'Farol Led, alarme, setas, buzina',
      'Comporta 200 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Porta objetos embaixo do banco'
    ]
  },
  {
    model: 'jet',
    name: 'Jet',
    cover: '/models/jet/0.jpg',
    needCnh: false,
    numberOfImages: 9,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 60Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco Duplo com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 180 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Carregador USB',
      'Freio a disco hidráulico',
      'Pneu New City (Sem câmara)',
      'Porta objetos embaixo do banco + Bagageiro',
      'Compartimento para bateria Extra, dobrando autonomia'
    ]
  },
  {
    model: 'joy',
    name: 'Joy',
    cover: '/models/joy/0.jpg',
    needCnh: false,
    numberOfImages: 9,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 50Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco do garupa com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 130 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Carregador USB',
      'Cesta frontal'
    ]
  },
  {
    model: 'joy-super',
    name: 'Joy Super',
    cover: '/models/joy-super/0.jpg',
    needCnh: false,
    numberOfImages: 11,
    descriptions: [
      'Velocidade Máxima: Até 45 Km/H',
      'Autonomia: de 55Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco do garupa com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 150 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Carregador USB',
      'Cesta frontal'
    ]
  },
  {
    model: 'joy-tri',
    name: 'Joy Tri',
    cover: '/models/joy-tri/0.jpg',
    needCnh: false,
    numberOfImages: 8,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 55Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Leva até 3 pessoas (Cadeirinha para criança)',
      'Farol Led, alarme, setas, buzina',
      'Comporta 170 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Cesta frontal e traseira',
      'Marcha Ré',
      'Carregador USB'
    ]
  },
  {
    model: 'vtb2-liberty',
    name: 'VTB2 Liberty',
    cover: '/models/vtb2-liberty/0.jpg',
    needCnh: false,
    numberOfImages: 4,
    descriptions: [
      'Velocidade Máxima: Até 35 Km/H',
      'Autonomia: de 35Km (dependendo do trajeto, peso do condutor)',
      '3 modos de pilotagem',
      'ARO 20’',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 6 horas',
      'Carregador bivolt',
      'Painel LED (informações de velocidade, carga e quilometragem)',
      '5 modos de velocidade',
      'Amortecedor: Dianteiro',
      'Indicador luminoso traseiro',
      'Farol Led',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Freio a disco dianteiro e traseiro',
      'Dobrável',
      'Assento para o garupa'
    ]
  },
  {
    model: 'vtb3-style',
    name: 'VTB3 Style',
    cover: '/models/vtb3-style/0.jpg',
    needCnh: false,
    numberOfImages: 6,
    descriptions: [
      'Velocidade Máxima: Até 35 Km/H',
      'Autonomia: de 35Km (dependendo do trajeto, peso do condutor)',
      '3 modos de pilotagem',
      'ARO 20’',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Carregador bivolt',
      'Painel LED (informações de velocidade, carga e quilometragem)',
      '5 modos de velocidade',
      'Amortecedor: Dianteiro e central Hidráulicos',
      'Indicador luminoso traseiro',
      'Farol Led',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Freio a disco dianteiro e traseiro'
    ]
  },
  {
    model: 'mia',
    name: 'Mia',
    cover: '/models/mia/0.jpg',
    needCnh: false,
    numberOfImages: 6,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 65Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel digital (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Banco Duplo com encosto',
      'Farol Led, alarme, setas, buzina',
      'Comporta 180 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Carregador USB',
      'Porta objetos embaixo do banco e na lateral',
      'Pneu New City (Sem câmara)',
      'Compartimento para bateria Extra, dobrando autonomia'
    ]
  },
  {
    model: 'roma',
    name: 'Roma',
    cover: '/models/roma/0.jpg',
    needCnh: true,
    numberOfImages: 8,
    descriptions: [
      'Velocidade Máxima: Até 70 Km/H',
      'Autonomia: de 50Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água IP65*',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador Smart bivolt (desliga quando a carga está completa)',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Compartimento para bateria Extra, dobrando autonomia',
      'Freio a disco hidráulico dianteiro e traseiro',
      'Banco duplo',
      'Farol, alarme, setas, buzina',
      'Comporta 170 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Chave Key Less',
      'Porta objetos embaixo do banco, na lateral + Bagageiro',
      'Marcha Ré',
      'Modo Parking'
    ]
  },
  {
    model: 's8',
    name: 'S8',
    cover: '/models/s8/0.jpg',
    needCnh: true,
    numberOfImages: 11,
    descriptions: [
      '2000 W ou 3000 W de potência',
      'Velocidade Máxima: de 50 Km/H Até 70 Km/H (dependendo da potência)',
      'Autonomia: de 40Km a 50km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água IP65*',
      'Botão Start e Stop',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador Smart bivolt (desliga quando a carga está completa)',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Compartimento para bateria Extra, dobrando autonomia',
      'Freio a disco hidráulico dianteiro e traseiro',
      'Banco duplo',
      'Farol Led, alarme, setas, buzina',
      'Comporta 200 kg',
      'Menos de R$ 1,00 para carregar uma carga completa'
    ]
  },
  {
    model: 'x11',
    name: 'X11',
    cover: '/models/x11/0.jpg',
    needCnh: true,
    numberOfImages: 10,
    descriptions: [
      '2000 W ou 3000 W de potência',
      'Velocidade Máxima: de 50 Km/H Até 70 Km/H (dependendo da potência)',
      'Autonomia: de 40Km a 50km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água IP65*',
      'Botão Start e Stop',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador Smart bivolt (desliga quando a carga está completa)',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos',
      'Compartimento para bateria Extra, dobrando autonomia',
      'Freio a disco hidráulico dianteiro e traseiro',
      'Banco duplo',
      'Farol Led, alarme, setas, buzina',
      'Comporta 140 kg',
      'Porta objetos embaixo do banco',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Quadro em aço carbono',
      'Rodas de alumínio 10 polegadas'
    ]
  },
  {
    model: 'x15',
    name: 'X15',
    cover: '/models/x15/0.jpg',
    needCnh: true,
    numberOfImages: 10,
    descriptions: [
      'Velocidade Máxima: Até 50 Km/H',
      'Autonomia: de 40Km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água IP65*',
      'Botão Start e Stop',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 6 horas',
      'Alarme com bloqueio e trava',
      'Carregador Smart bivolt (desliga quando a carga está completa)',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      '3 modos de velocidade',
      'Amortecedor: Dianteiro e Traseiro Duplo Hidráulicos (PRO)',
      'Compartimento para bateria Extra, dobrando autonomia',
      'Freio a disco hidráulico dianteiro e traseiro',
      'Banco duplo',
      'Farol Led, alarme, setas, buzina',
      'Comporta 200 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Porta objetos embaixo do banco',
      'Marcha Ré',
      'Cesta atrás',
      '2 motores de 2.000W'
    ]
  },
  {
    model: 'ved',
    name: 'Ved',
    cover: '/models/ved/0.jpg',
    needCnh: false,
    numberOfImages: 7,
    descriptions: [
      'Velocidade Máxima: Até 32 Km/H',
      'Autonomia: de 40 km (dependendo do trajeto, peso do condutor)',
      'Veículo com resistência a água',
      'Bateria de lítio removível para carregar onde quiser',
      'Carregamento completo em até 5 horas',
      'Alarme com bloqueio e trava',
      'Carregador bivolt',
      'Painel LCD (informações de velocidade, carga e quilometragem)',
      'Sistema anticapotamento',
      'Suporte para água',
      'Piso antiderrapante',
      'Iluminação completa em Led',
      'Comporta 150 kg',
      'Menos de R$ 1,00 para carregar uma carga completa',
      'Baú bagageiro',
      'Marcha Ré',
      '3 níveis de velocidade'
    ]
  }
]
