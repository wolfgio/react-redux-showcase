const championsInitialState = [
 {
    id: 0,
    name: 'Ashe',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_8.jpg',
    title: 'a Arqueira do Gelo',
    description: 'A cada flecha que dispara de seu arco ancestral encantado com gelo, Ashe prova que é uma arqueira-mestra. Ela escolhe cada alvo cuidadosamente, espera pelo momento certo e o atinge com poder e precisão. É com a mesma visão e foco que ela persegue o objetivo de unificar as tribos de Freljord e moldá-las em uma poderosa nação.',
    isVisible: true,
  },
 {
    id: 1,
    name: 'Ahri',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg',
    title: 'a Raposa de Nove Caudas',
    description: 'Ao contrário de outras raposas que povoavam os bosques do sul de Ionia, Ahri sempre sentiu uma estranha conexão com o mundo mágico que existia à sua volta; uma ligação incompleta, de certa forma. Em seu coração ela sentia que estava vivendo em um corpo inadequado, e sonhava em um dia se tornar humana. Este objetivo parecia estar eternamente fora de alcance, até que ela se viu nos rastros de uma guerra humana.',
    isVisible: false,
  },
 {
    id: 2,
    name: 'Twisted Fate',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_5.jpg',
    title: 'o Mestre das Cartas',
    description: 'Twisted Fate, o Mestre das Cartas “Não é apostar se você não puder perder...” Exímio com cartas e vigarista astuto, o infame Twisted Fate apostou e seduziu seu caminho por grande parte do mundo conhecido, recebendo a inimizade e admiração dos ricos e tolos. Ele raramente leva as coisas a sério, recebendo cada dia com um sorriso debochado e uma lisonja impassível. De todas as maneiras possíveis, Twisted Fate sempre tem um ás na manga.',
    isVisible: false,
  },
 {
    id: 3,
    name: 'Lee Sin',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_2.jpg',
    title: 'o Monge Cego',
    description: 'Quando ainda era um jovem adolescente, Lee Sin tinha a intenção de se tornar um invocador. Sua vontade e dedicação eram incomparáveis, e sua habilidade chamou a atenção de Reginald Ashram, o Alto Conselheiro da Liga na época. Enquanto era estudante na Arcanum Majoris, Lee Sin ficou frustrado com o nível de instrução, adequado ao ritmo dos demais estudantes. Ele passava seu tempo livre pesquisando as nuances da invocação na esperança de se formar mais cedo. Fez incríveis avanços em seus estudos arcanos, ultrapassando todos os outros alunos.',
    isVisible: false,
  },
  {
    id: 4,
    name: 'Ezreal',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg',
    title: 'o Explorador Pródigo',
    description: 'O intrépido jovem aventureiro Ezreal explorou parte das mais remotas e abandonadas regiões de Runeterra. Durante uma expedição às ruínas soterradas da antiga Shurima, ele recuperou um amuleto de incrível poder místico. Possivelmente construído para ser usado por um dos Ascendentes, o gigantesco talismã serviu confortavelmente em seu braço, amplificando suas habilidades mágicas brutas a tal ponto que lhe rendeu a reputação de um herói, para muito de seu constrangimento.',
    isVisible: false,
  },
 {
    id: 5,
    name: 'Olaf',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg',
    title: 'o Berserker',
    description: 'A maioria dos homens diria que a morte é algo a ser temido; nenhum desses homens seria Olaf. O Berserker vive somente pelo bramido de um grito de guerra e da colisão das espadas. Impelido por sua fome de glória e pela maldição iminente de uma morte esquecível, Olaf se mete em qualquer briga com abandono negligente. Rendendo-se à sede de sangue que existe em si, ele somente está vivo de verdade quando agarra a morte pelas presas.',
    isVisible: false,
  },

]
export default (state = championsInitialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CHAMPS':
      return state;
    case 'FETCH_CHAMP_DETAILS':
      return state === action.payload;
    case 'SET_CHAMP_VISIBILITY':
      const { id, isVisible } = action.payload;
      const champions = [...state];
      const championToUpdate = champions.findIndex(champion => champion.id === id);
      champions[championToUpdate].isVisible = isVisible;
      return champions;
    default:
      return state;
  }
}
