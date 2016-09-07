"use strict";
// THIS IS WHERE THE INTERACTION WITH DATA HAPPENS

app.factory("ItemStorage", ($q, $http, FirebaseURL) => {

    let getItemList = (user) => {
        let items = [];
        return $q((resolve, reject) => {
            $http.get(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
                .success((itemObject) => {
                  Object.keys(itemObject).forEach((key) => {
                    itemObject[key].id = key;
                    items.push(itemObject[key]);
                  });
                    resolve(items);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };

    let getSingleItem = (itemId) => {
      return $q( (resolve, reject) => {
        $http.get(`${FirebaseURL}/items/${itemId}.json`)
        .success( (itemObj) => {
          resolve(itemObj);
        })
        .error( (error) => {
          reject(error);
        });
      });
    };

    let postNewItem = (newItem) => {
        return $q((resolve, reject) => {
            $http.post(`${FirebaseURL}/items.json`, JSON.stringify(newItem))
                .success((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };

    let deleteItem = (itemId) => {
      return $q( (resolve, reject) => {
        $http.delete( `${FirebaseURL}/items/${itemId}.json`)
        .success( (ObjectFromFirebase) => {
          resolve(ObjectFromFirebase);
        });
      });
    };

    let updateItem = (itemId, editedItem) => {
      return $q( (resolve, reject) => {
        $http.patch(`${FirebaseURL}/items/${itemId}.json`, JSON.stringify(editedItem))
        .success( (ObjectFromFirebase) => {
          resolve(ObjectFromFirebase);
        })
        .error( (error) => {
          reject(error);
        });
      });
    };

    // let editItem = (itemId, editedItem) => {
    //   return $q( (resolve, reject) => {
    //     $http.put(`${FirebaseURL}/items/${itemId}.json`, JSON.stringify(editedItem))
    //     .success( (ObjectFromFirebase) => {
    //       resolve(ObjectFromFirebase);
    //     });
    //   });
    // };

    return {
        getItemList,
        postNewItem,
        deleteItem,
        updateItem,
        getSingleItem
    };

});
