import { readFileSync } from 'fs';

let greenFood = readFileSync('./server/data/greenFoodList.json');
let amberFood = readFileSync('./server/data/amberFoodList.json');
let redFood = readFileSync('./server/data/redFoodList.json');
let foodList = [
  JSON.parse(greenFood),
  JSON.parse(amberFood),
  JSON.parse(redFood),
];

async function createFoodList(mongoclient) {
  for (let i = 0; i < foodList.length; i++) {
    await mongoclient
      .db('biologme')
      .collection('foodLists')
      .insertMany([foodList[i]])
      .then(() => {
        console.log(`${foodList[i]._id}FoodList created`);
      })
      .catch(e => {
        console.error(e);
      });
  }
  await mongoclient.close();
}

async function createFoodListById(mongoclient, foodListId) {
  for (let i = 0; i < foodList.length; i++) {
    if (foodListId == foodList[i]._id)
      await mongoclient
        .db('biologme')
        .collection('foodLists')
        .insertOne(foodList[i])
        .then(() => {
          console.log(`${foodList[i]._id}FoodList created`);
        })
        .catch(e => {
          console.error(e);
        });
  }
  await mongoclient.close();
}

async function getFoodListById(mongoclient, foodList) {
  try {
    const standardFoodList = await mongoclient
      .db('biologme')
      .collection('foodLists')
      .findOne({ _id: `${foodList}` });
    return standardFoodList;
  } catch (e) {
    console.error(e);
  } finally {
    await mongoclient.close();
  }
}

// to finish off - how to modify the array?
async function updateFoodListById(mongoclient, foodList, updateValue) {
  try {
    const currentFoodList = await mongoclient
      .db('biologme')
      .collection('foodLists')
      .updateOne(
        { _id: `${foodList}` },
        { $push: { items: `${updateValue}` } }
      );
    console.log(currentFoodList);
    return currentFoodList;
  } catch (e) {
    console.error(e);
  }
  await mongoclient.close();
}

async function deleteFoodListItemById(mongoclient, foodList, foodListItem) {
  try {
    const user = await mongoclient
      .db('biologme')
      .collection('foodLists')
      .updateOne(
        { _id: `${foodList}` },
        { $pull: { items: `${foodListItem}` } }
      );
    console.log('Food list succesfully deleted from DB');
  } catch (e) {
    console.error(e);
  } finally {
    await mongoclient.close();
  }
}

async function deleteFoodListById(mongoclient, foodList) {
  try {
    const user = await mongoclient
      .db('biologme')
      .collection('foodLists')
      .deleteOne({ _id: `${foodList}` });
    console.log('Food list succesfully deleted from DB');
  } catch (e) {
    console.error(e);
  } finally {
    await mongoclient.close();
  }
}

export {
  createFoodList,
  createFoodListById,
  getFoodListById,
  updateFoodListById,
  deleteFoodListItemById,
  deleteFoodListById,
};
