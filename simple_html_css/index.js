import express from 'express';
import bodyParser from 'body-parser';


const app= express();
const port= 3000;

const dataJSON=   [{"id":"0001","type":"berry","name":"banana","recipe":{"name":"Banana Ice Cream","ingredients":["½lemon","3 overripe bananas","50ml milk","200g cream","30g powdered sugar"]},"preparation":["1. Place a container for the ice cream (e.g. a baking dish) or the container of an ice cream maker in the freezer compartment and let it freeze for about 1 hour.","2. Squeeze the lemon. Peel the bananas, break them into large pieces and place them in a tall mixing bowl along with the lemon juice. Puree into puree with a hand blender. Add milk, liquid cream and powdered sugar and puree again.","3. Pour the mixture into the pre-frozen container and place in the freezer for at least 3 hours. While freezing, stir the ice cream approximately every 30 minutes. This makes it creamier and freezes faster. If you have an ice cream maker, you can also put the banana mix in the container provided and let it freeze through according to the manufacturer's instructions.","4. Approximately 5 minutes before consumption, remove the banana ice cream from the freezer to thaw. Divide into dessert bowls using an ice cream scoop and serve immediately. The banana ice cream makes approx. 8 scoops and will keep frozen for at least 2 weeks."]},{"id":"0002","type":"drupe","name":"sweet-cherry","recipe":{"name":"Sweet-Cherry Ice Cream","ingredients":["150g frozen cherries","60g sugar","350g yogurt (3.5% fat)","80g powdered sugar","180g cream (30% fat)"]},"preparation":["1. Put the cherries in a pot with the sugar and simmer on medium heat for about 8 minutes. Let the cherries cool slightly.","2. Place the slightly cooled cherries with the yoghurt and powdered sugar in a tall mixing bowl and puree finely with a hand blender. Whip the cream until stiff and fold in.","3. Pour the ice cream mixture into an ice cream maker and let it churn until creamy for about 30 minutes. Pour the frozen ice cream mixture into an oblong container and place in the freezer for at least 4 hours, preferably overnight.","4. To serve, prepare a glass of hot water. Briefly hold an ice cream scoop in the water and let it drain a little. Move over the ice to form balls. Arrange in small bowls and serve immediately."]},{"id":"0003","type":"citrus fruit","name":"tangerine","recipe":{"name":"Tangerine Ice Cream","ingredients":["5 tangerines","30ml orange liqueur","2 protein","100g powdered sugar","1 tbsp orange sugar","100 g whipped cream","mint for garnish"]},"preparation":["1. Cut a top off of 4 tangerines and carefully hollow them out with a sharp-edged spoon. Squeeze the juice out of the pulp. Finely grate some of the peel from the last orange and also squeeze out the juice. Mix with the liqueur and the peel.","2. Beat the egg whites until stiff, while continuing to beat, sprinkle in the powdered sugar and orange sugar and continue beating until all the sugar has dissolved. Gently fold into the juice with the liqueur, place in a shallow metal bowl and leave to freeze in the freezer for approx. 1 hour, stirring occasionally (every 20-30 minutes). In the meantime, whip the cream until stiff. Fold into the frozen ice cream mixture and freeze for a total of 4 hours, stirring occasionally.","3. To serve, fill the hollowed-out tangerines with the lid and serve garnished with mint."]}];

app.use('/simple_html_css/public', express.static('public', { 'extensions': ['css'] }));
app.use(bodyParser.urlencoded({ extended: true }));

// leere Variable für daten aus DataJSON
let data;

app.get('/', (req,res) =>{
    // index.ejs soll gerendert werden, und data soll mittels der variablen recipes an index.ejs übergeben werden
    res.render('index.ejs', {recipes: data})
});

// switch-case um auswahl umzusetzen
app.post('/recipes', (req,res) =>{
    switch(req.body.fruit){
        case 'banana':
            data = dataJSON[0];
            break;
        case 'sweet-cherry':
            data = dataJSON[1];
            break;
        case 'tangerine':
            data = dataJSON[2];
            break;
            default:
                break;        
    }
    res.redirect('/');
});





app.listen(3000, () =>{
    console.log(`server is running on Port ${port}`);
})



