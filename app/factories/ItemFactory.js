"use strict";
// THIS IS WHERE THE INTERACTION WITH DATA HAPPENS

app.factory("ItemStorage", ($q, $http) => {

    let getItemList = () => {
        let items = [];
        return $q((resolve, reject) => {
            $http.get("../../data/itemList.json")
                .success((itemObject) => {
                    resolve(itemObject);
                })
                .error((error) => {
                    reject(error);
                });
        });
    };

    return {getItemList};

});
