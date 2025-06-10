gdjs.SelecaoCode = {};
gdjs.SelecaoCode.localVariables = [];
gdjs.SelecaoCode.GDChose_9595VarkonObjects1= [];
gdjs.SelecaoCode.GDChose_9595VarkonObjects2= [];
gdjs.SelecaoCode.GDChose_9595XentariObjects1= [];
gdjs.SelecaoCode.GDChose_9595XentariObjects2= [];
gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1= [];
gdjs.SelecaoCode.GDChose_9595ZephyrianObjects2= [];
gdjs.SelecaoCode.GDChose_9595NyzariObjects1= [];
gdjs.SelecaoCode.GDChose_9595NyzariObjects2= [];
gdjs.SelecaoCode.GDCyberpunks2Portrait4Objects1= [];
gdjs.SelecaoCode.GDCyberpunks2Portrait4Objects2= [];
gdjs.SelecaoCode.GDCyberpunks2Portrait5Objects1= [];
gdjs.SelecaoCode.GDCyberpunks2Portrait5Objects2= [];
gdjs.SelecaoCode.GDCyberpunks3Portrait7Objects1= [];
gdjs.SelecaoCode.GDCyberpunks3Portrait7Objects2= [];
gdjs.SelecaoCode.GDCyberpunks1Portrait6Objects1= [];
gdjs.SelecaoCode.GDCyberpunks1Portrait6Objects2= [];
gdjs.SelecaoCode.GDNewSpriteObjects1= [];
gdjs.SelecaoCode.GDNewSpriteObjects2= [];
gdjs.SelecaoCode.GDChose_9595your_9595factionObjects1= [];
gdjs.SelecaoCode.GDChose_9595your_9595factionObjects2= [];
gdjs.SelecaoCode.GDVarkon_9595AscendancyObjects1= [];
gdjs.SelecaoCode.GDVarkon_9595AscendancyObjects2= [];
gdjs.SelecaoCode.GDOrder_9595of_9595Nyzari_9595Objects1= [];
gdjs.SelecaoCode.GDOrder_9595of_9595Nyzari_9595Objects2= [];
gdjs.SelecaoCode.GDXentari_9595ConsortiumObjects1= [];
gdjs.SelecaoCode.GDXentari_9595ConsortiumObjects2= [];
gdjs.SelecaoCode.GDZephyrian_9595AllianceObjects1= [];
gdjs.SelecaoCode.GDZephyrian_9595AllianceObjects2= [];
gdjs.SelecaoCode.GDNewSprite2Objects1= [];
gdjs.SelecaoCode.GDNewSprite2Objects2= [];
gdjs.SelecaoCode.GDDominate_9595by_9595raw_9595forceObjects1= [];
gdjs.SelecaoCode.GDDominate_9595by_9595raw_9595forceObjects2= [];
gdjs.SelecaoCode.GDSustain_9595and_9595protectObjects1= [];
gdjs.SelecaoCode.GDSustain_9595and_9595protectObjects2= [];
gdjs.SelecaoCode.GDSpeed_9595and_9595precisionObjects1= [];
gdjs.SelecaoCode.GDSpeed_9595and_9595precisionObjects2= [];
gdjs.SelecaoCode.GDBalance_9595and_9595adaptabilityObjects1= [];
gdjs.SelecaoCode.GDBalance_9595and_9595adaptabilityObjects2= [];
gdjs.SelecaoCode.GDicon_9595XentariObjects1= [];
gdjs.SelecaoCode.GDicon_9595XentariObjects2= [];
gdjs.SelecaoCode.GDIcon_9595ZephyrianObjects1= [];
gdjs.SelecaoCode.GDIcon_9595ZephyrianObjects2= [];
gdjs.SelecaoCode.GDIcon_9595NyzariObjects1= [];
gdjs.SelecaoCode.GDIcon_9595NyzariObjects2= [];
gdjs.SelecaoCode.GDIcon_9595VarkonObjects1= [];
gdjs.SelecaoCode.GDIcon_9595VarkonObjects2= [];
gdjs.SelecaoCode.GDNewSprite3Objects1= [];
gdjs.SelecaoCode.GDNewSprite3Objects2= [];


gdjs.SelecaoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "stg_theme004_88pro-loop.ogg", false, 40, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.SelecaoCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.SelecaoCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.SelecaoCode.GDNewSprite3Objects1[i].getBehavior("Resizable").setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.SelecaoCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.SelecaoCode.GDNewSprite3Objects1[i].setPosition(0,0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chose_Nyzari"), gdjs.SelecaoCode.GDChose_9595NyzariObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SelecaoCode.GDChose_9595NyzariObjects1.length;i<l;++i) {
    if ( gdjs.SelecaoCode.GDChose_9595NyzariObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SelecaoCode.GDChose_9595NyzariObjects1[k] = gdjs.SelecaoCode.GDChose_9595NyzariObjects1[i];
        ++k;
    }
}
gdjs.SelecaoCode.GDChose_9595NyzariObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chose_Zephyrian"), gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1.length;i<l;++i) {
    if ( gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1[k] = gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1[i];
        ++k;
    }
}
gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chose_Varkon"), gdjs.SelecaoCode.GDChose_9595VarkonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SelecaoCode.GDChose_9595VarkonObjects1.length;i<l;++i) {
    if ( gdjs.SelecaoCode.GDChose_9595VarkonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SelecaoCode.GDChose_9595VarkonObjects1[k] = gdjs.SelecaoCode.GDChose_9595VarkonObjects1[i];
        ++k;
    }
}
gdjs.SelecaoCode.GDChose_9595VarkonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chose_Xentari"), gdjs.SelecaoCode.GDChose_9595XentariObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SelecaoCode.GDChose_9595XentariObjects1.length;i<l;++i) {
    if ( gdjs.SelecaoCode.GDChose_9595XentariObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SelecaoCode.GDChose_9595XentariObjects1[k] = gdjs.SelecaoCode.GDChose_9595XentariObjects1[i];
        ++k;
    }
}
gdjs.SelecaoCode.GDChose_9595XentariObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}}

}


};

gdjs.SelecaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SelecaoCode.GDChose_9595VarkonObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595VarkonObjects2.length = 0;
gdjs.SelecaoCode.GDChose_9595XentariObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595XentariObjects2.length = 0;
gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595ZephyrianObjects2.length = 0;
gdjs.SelecaoCode.GDChose_9595NyzariObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595NyzariObjects2.length = 0;
gdjs.SelecaoCode.GDCyberpunks2Portrait4Objects1.length = 0;
gdjs.SelecaoCode.GDCyberpunks2Portrait4Objects2.length = 0;
gdjs.SelecaoCode.GDCyberpunks2Portrait5Objects1.length = 0;
gdjs.SelecaoCode.GDCyberpunks2Portrait5Objects2.length = 0;
gdjs.SelecaoCode.GDCyberpunks3Portrait7Objects1.length = 0;
gdjs.SelecaoCode.GDCyberpunks3Portrait7Objects2.length = 0;
gdjs.SelecaoCode.GDCyberpunks1Portrait6Objects1.length = 0;
gdjs.SelecaoCode.GDCyberpunks1Portrait6Objects2.length = 0;
gdjs.SelecaoCode.GDNewSpriteObjects1.length = 0;
gdjs.SelecaoCode.GDNewSpriteObjects2.length = 0;
gdjs.SelecaoCode.GDChose_9595your_9595factionObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595your_9595factionObjects2.length = 0;
gdjs.SelecaoCode.GDVarkon_9595AscendancyObjects1.length = 0;
gdjs.SelecaoCode.GDVarkon_9595AscendancyObjects2.length = 0;
gdjs.SelecaoCode.GDOrder_9595of_9595Nyzari_9595Objects1.length = 0;
gdjs.SelecaoCode.GDOrder_9595of_9595Nyzari_9595Objects2.length = 0;
gdjs.SelecaoCode.GDXentari_9595ConsortiumObjects1.length = 0;
gdjs.SelecaoCode.GDXentari_9595ConsortiumObjects2.length = 0;
gdjs.SelecaoCode.GDZephyrian_9595AllianceObjects1.length = 0;
gdjs.SelecaoCode.GDZephyrian_9595AllianceObjects2.length = 0;
gdjs.SelecaoCode.GDNewSprite2Objects1.length = 0;
gdjs.SelecaoCode.GDNewSprite2Objects2.length = 0;
gdjs.SelecaoCode.GDDominate_9595by_9595raw_9595forceObjects1.length = 0;
gdjs.SelecaoCode.GDDominate_9595by_9595raw_9595forceObjects2.length = 0;
gdjs.SelecaoCode.GDSustain_9595and_9595protectObjects1.length = 0;
gdjs.SelecaoCode.GDSustain_9595and_9595protectObjects2.length = 0;
gdjs.SelecaoCode.GDSpeed_9595and_9595precisionObjects1.length = 0;
gdjs.SelecaoCode.GDSpeed_9595and_9595precisionObjects2.length = 0;
gdjs.SelecaoCode.GDBalance_9595and_9595adaptabilityObjects1.length = 0;
gdjs.SelecaoCode.GDBalance_9595and_9595adaptabilityObjects2.length = 0;
gdjs.SelecaoCode.GDicon_9595XentariObjects1.length = 0;
gdjs.SelecaoCode.GDicon_9595XentariObjects2.length = 0;
gdjs.SelecaoCode.GDIcon_9595ZephyrianObjects1.length = 0;
gdjs.SelecaoCode.GDIcon_9595ZephyrianObjects2.length = 0;
gdjs.SelecaoCode.GDIcon_9595NyzariObjects1.length = 0;
gdjs.SelecaoCode.GDIcon_9595NyzariObjects2.length = 0;
gdjs.SelecaoCode.GDIcon_9595VarkonObjects1.length = 0;
gdjs.SelecaoCode.GDIcon_9595VarkonObjects2.length = 0;
gdjs.SelecaoCode.GDNewSprite3Objects1.length = 0;
gdjs.SelecaoCode.GDNewSprite3Objects2.length = 0;

gdjs.SelecaoCode.eventsList0(runtimeScene);
gdjs.SelecaoCode.GDChose_9595VarkonObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595VarkonObjects2.length = 0;
gdjs.SelecaoCode.GDChose_9595XentariObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595XentariObjects2.length = 0;
gdjs.SelecaoCode.GDChose_9595ZephyrianObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595ZephyrianObjects2.length = 0;
gdjs.SelecaoCode.GDChose_9595NyzariObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595NyzariObjects2.length = 0;
gdjs.SelecaoCode.GDCyberpunks2Portrait4Objects1.length = 0;
gdjs.SelecaoCode.GDCyberpunks2Portrait4Objects2.length = 0;
gdjs.SelecaoCode.GDCyberpunks2Portrait5Objects1.length = 0;
gdjs.SelecaoCode.GDCyberpunks2Portrait5Objects2.length = 0;
gdjs.SelecaoCode.GDCyberpunks3Portrait7Objects1.length = 0;
gdjs.SelecaoCode.GDCyberpunks3Portrait7Objects2.length = 0;
gdjs.SelecaoCode.GDCyberpunks1Portrait6Objects1.length = 0;
gdjs.SelecaoCode.GDCyberpunks1Portrait6Objects2.length = 0;
gdjs.SelecaoCode.GDNewSpriteObjects1.length = 0;
gdjs.SelecaoCode.GDNewSpriteObjects2.length = 0;
gdjs.SelecaoCode.GDChose_9595your_9595factionObjects1.length = 0;
gdjs.SelecaoCode.GDChose_9595your_9595factionObjects2.length = 0;
gdjs.SelecaoCode.GDVarkon_9595AscendancyObjects1.length = 0;
gdjs.SelecaoCode.GDVarkon_9595AscendancyObjects2.length = 0;
gdjs.SelecaoCode.GDOrder_9595of_9595Nyzari_9595Objects1.length = 0;
gdjs.SelecaoCode.GDOrder_9595of_9595Nyzari_9595Objects2.length = 0;
gdjs.SelecaoCode.GDXentari_9595ConsortiumObjects1.length = 0;
gdjs.SelecaoCode.GDXentari_9595ConsortiumObjects2.length = 0;
gdjs.SelecaoCode.GDZephyrian_9595AllianceObjects1.length = 0;
gdjs.SelecaoCode.GDZephyrian_9595AllianceObjects2.length = 0;
gdjs.SelecaoCode.GDNewSprite2Objects1.length = 0;
gdjs.SelecaoCode.GDNewSprite2Objects2.length = 0;
gdjs.SelecaoCode.GDDominate_9595by_9595raw_9595forceObjects1.length = 0;
gdjs.SelecaoCode.GDDominate_9595by_9595raw_9595forceObjects2.length = 0;
gdjs.SelecaoCode.GDSustain_9595and_9595protectObjects1.length = 0;
gdjs.SelecaoCode.GDSustain_9595and_9595protectObjects2.length = 0;
gdjs.SelecaoCode.GDSpeed_9595and_9595precisionObjects1.length = 0;
gdjs.SelecaoCode.GDSpeed_9595and_9595precisionObjects2.length = 0;
gdjs.SelecaoCode.GDBalance_9595and_9595adaptabilityObjects1.length = 0;
gdjs.SelecaoCode.GDBalance_9595and_9595adaptabilityObjects2.length = 0;
gdjs.SelecaoCode.GDicon_9595XentariObjects1.length = 0;
gdjs.SelecaoCode.GDicon_9595XentariObjects2.length = 0;
gdjs.SelecaoCode.GDIcon_9595ZephyrianObjects1.length = 0;
gdjs.SelecaoCode.GDIcon_9595ZephyrianObjects2.length = 0;
gdjs.SelecaoCode.GDIcon_9595NyzariObjects1.length = 0;
gdjs.SelecaoCode.GDIcon_9595NyzariObjects2.length = 0;
gdjs.SelecaoCode.GDIcon_9595VarkonObjects1.length = 0;
gdjs.SelecaoCode.GDIcon_9595VarkonObjects2.length = 0;
gdjs.SelecaoCode.GDNewSprite3Objects1.length = 0;
gdjs.SelecaoCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['SelecaoCode'] = gdjs.SelecaoCode;
