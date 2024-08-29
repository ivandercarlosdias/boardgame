# BoardGame

## Descrição do jogo

O BoardGame é um jogo de tabuleiro online multiplayer jogado através do navegador em tempo real. O objetivo é mover pinos em um tabuleiro usando cartas que indicam direções. O jogo termina quando um pino atinge seu objetivo.

### Tabuleiro

-  **Descrição:** Um grid de 6x6 células.
-  **Posições:** As posições iniciais dos pinos e seus objetivos são determinadas aleatoriamente.
-  **Obstáculos:** O tabuleiro inclui barreiras que não podem ser transpassadas. Se uma carta indicar uma direção que leva a um obstáculo ou fora do tabuleiro, o movimento é anulado e o pino não se move.

### Cartas

-  **Descrição:** Cada carta contém entre 2 e 3 setas indicando direções (cima, baixo, esquerda, direita).
-  **Aplicação:** Cada seta se aplica a um player específico (indicado pela cor).
-  **Deck do Jogador:** Cada jogador possui um deck com quantia limitada de cartas em sua mão.
-  **Deck Central:** É o deck principal do jogo de onde os jogadores podem retir cartas.

### Pinos

-  **Descrição:** Representam os jogadores.
-  **Movimentação:** Movem-se um quadrado por direção indicada pela carta jogada.

### Interface do Usuário

-  **Descrição:** Cada jogador verá o tabuleiro e as cartas em sua mão.
-  **Facilidade de Uso:** Interface de fácil entendimento para selecionar e jogar cartas.

## Funções e Lógica do Jogo

### Início do Jogo

-  **Posicionamento:** Posicionar os pinos e objetivos aleatoriamente no tabuleiro.
-  **Distribuição de Cartas:** Distribuir cartas iniciais para cada jogador.

### Turnos

-  **Alternância:** Alternar turnos entre os jogadores.
-  **Ação do Jogador:** Jogador joga 1 ou 2 cartas para mover seu pino e/ou o do adversário.

### Movimentação dos pinos

-  **Verificação de Cartas:** Verifique as setas na carta jogada e mova o pino correspondente na direção indicada.
-  **Colisões e Limites:** Verifique colisões e limites do tabuleiro.

### Condições de Vitória

-  **Objetivo:** Verificar se um pino chegou ao seu objetivo. Não há limite de jogadas ou utilização de cartas.
