# Gympoint
Um sistema de administração para uma academia 

O back-end foi desenvolvido em NodeJS com Express, utilizando sequelize como ORM para o banco de dados Postgresql,

O front-end foi desenvolvido em React JS utilizando hook e redux é para a administração realizar cadastro de aluno, gerenciar as matriculas e planos de treino, com uma área para responder as dúvidas dos alunos e enviadas por e-mail

O app mobile desenvolvido em React Native, é para o os alunos, o app faz check-in na academia, uma área para fazer perguntas e visualizar as respostas das perguntas anteriores

Os bancos de dados que foram utilizados
Postgresql na V 12 (para armazenar os cadastros dos alunos e planos, e gerenciar as matriculas),
MongoDB na v 4.2 (para armazenar os check-in),
Redis (para armazenar a lista dos trabalhos)
e foi utilizado o nodemailer como cliente de e-mail

O app mobile foi testado apenas no android e utilizando o meu celular, não foi testado no emulador e nem no ios

