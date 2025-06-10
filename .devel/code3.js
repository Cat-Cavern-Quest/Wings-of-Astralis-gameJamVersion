gdjs.GameoverCode = {};
gdjs.GameoverCode.localVariables = [];
gdjs.GameoverCode.GDGameoverObjects1= [];
gdjs.GameoverCode.GDGameoverObjects2= [];
gdjs.GameoverCode.GDNewSpriteObjects1= [];
gdjs.GameoverCode.GDNewSpriteObjects2= [];


gdjs.GameoverCode.asyncCallback9438524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameoverCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tela-de-inicio", false);
}gdjs.GameoverCode.localVariables.length = 0;
}
gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameoverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.GameoverCode.asyncCallback9438524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameoverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameoverCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameoverCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDNewSpriteObjects1[i].getBehavior("Resizable").setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.GameoverCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameoverCode.GDNewSpriteObjects1[i].setPosition(0,0);
}
}
{ //Subevents
gdjs.GameoverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDGameoverObjects1.length = 0;
gdjs.GameoverCode.GDGameoverObjects2.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects2.length = 0;

gdjs.GameoverCode.eventsList1(runtimeScene);
gdjs.GameoverCode.GDGameoverObjects1.length = 0;
gdjs.GameoverCode.GDGameoverObjects2.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameoverCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
