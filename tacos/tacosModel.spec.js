const Tacos = require('./tacosModel.js')
const db = require("../data/dbConfig.js")

describe('tacos model', function(){
    beforeEach(async () => {
        await db('tacos').truncate()
    });

    describe('insert()', function(){
        it('should add the tacos to the database', async function(){
            //call insert, passing a hobbit object
            await Tacos.insert({ name: 'Carne Asada' });
            await Tacos.insert({ name: 'Fish' });

            //check the database directly
            const tacos = await db('tacos');
            expect(tacos).toHaveLength(2);
        });
    });
});