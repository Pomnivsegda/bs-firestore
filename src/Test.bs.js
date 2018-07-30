// Generated by BUCKLESCRIPT VERSION 4.0.1, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Firebase = require("firebase");

var fb = Firebase.initializeApp({
      projectId: "metal-air-192104",
      databaseURL: "https://metal-air-192104.firebaseio.com"
    });

var fs = fb.firestore();

fs.settings({
      timestampsInSnapshots: true
    });

fs.collection("teams").doc("TBE648WHM").get().then((function (value) {
        var data = value.data();
        var team_id = data.team_id;
        console.log(team_id);
        return Promise.resolve(/* () */0);
      }));

var update = {
  info: {
    author: "adfadsfasd"
  }
};

fs.collection("teams").doc("TEST").set(update);

var addInfo = {
  testField: "hi!!",
  someInt: 2342
};

var unsub2 = fs.collection("maps").doc("HVAPqdFNWpOSh8neZWbu").collection("attendees").onSnapshot((function (snapshot) {
        var docs = snapshot.docs;
        return $$Array.map((function (doc) {
                      console.log(doc.data());
                      return /* () */0;
                    }), docs);
      }), (function (error) {
        console.log(error);
        return /* () */0;
      }));

var testDocRef = /* () */0;

exports.fb = fb;
exports.fs = fs;
exports.update = update;
exports.testDocRef = testDocRef;
exports.addInfo = addInfo;
exports.unsub2 = unsub2;
/* fb Not a pure module */
