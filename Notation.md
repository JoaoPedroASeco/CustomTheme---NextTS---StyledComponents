    - Custom theme: 

      - Aula direcionada para aprender a fazer um thema totalmente personalizado, com cores padroes e a possibilidade de alternar de um tema para outro com facilidade

      - Link: https://www.youtube.com/watch?v=ngVU74daJ8Y&ab_channel=Rocketseat


      - Libs Utilizadas: 
        - styled-components: 
          - biblioteca para estilizaçao geral, da aplicacao

        - react-switch: 
          - bliblioteca que disponibiliza botoes do tipo switch (on/off) facilmente estilizaveis

        - polished: 
          - biblioteca feita para manipular/modificar as cores da aplicaçao

 - fix styled-components log error: 
   - yarn add --dev babel-plugin-styled-components
   - create an '.babelrc' and paste:
     - {
          "presets": ["next/babel"],
          "plugins": [["styled-components", { "ssr": true }]]
        }