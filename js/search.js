var searchUsers = new autoComplete({
    selector: '#search-user',
    minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver', 'Anatole Lefevre', 'Sarah Schramm', 'Jayden Barrett', 'Valtteri Waisanen', 'Leah Davies', 'Jorge Gimenez', 'Anita Meyer', 'Ryder Patel', 'Alexis Roussel', 'Irma Morrison', 'Aurora Lewis', 'Willow Harris', 'Maxime Lacroix', 'Maddison Wells', 'Amy Ambrose', 'Léonard Adam', 'Enoque Alves', 'Alicia Ennis', 'Todd Lambert', 'Julia Leppo', 'Léane Louis', 'Sasha Renaud', 'Tonya Alvarez', 'Owen Knight', 'Florent Fontai', 'Kim Pearson', 'Carsta Oliveira', 'Rémy Vincent', 'Celia Garrido', 'Katrine Kristensen', 'Shaun Hill'];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});