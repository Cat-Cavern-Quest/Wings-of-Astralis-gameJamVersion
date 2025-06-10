gdjs.tela_45de_45inicioCode = {};
gdjs.tela_45de_45inicioCode.localVariables = [];
gdjs.tela_45de_45inicioCode.GDBackgroundObjects1= [];
gdjs.tela_45de_45inicioCode.GDBackgroundObjects2= [];
gdjs.tela_45de_45inicioCode.GDGame_9595titleObjects1= [];
gdjs.tela_45de_45inicioCode.GDGame_9595titleObjects2= [];
gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1= [];
gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects2= [];
gdjs.tela_45de_45inicioCode.GDCreditsObjects1= [];
gdjs.tela_45de_45inicioCode.GDCreditsObjects2= [];


gdjs.tela_45de_45inicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "stg_theme001_88pro.ogg", true, 40, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.tela_45de_45inicioCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.tela_45de_45inicioCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.tela_45de_45inicioCode.GDBackgroundObjects1[i].getBehavior("Resizable").setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.tela_45de_45inicioCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.tela_45de_45inicioCode.GDBackgroundObjects1[i].setPosition(0,0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("New_Game"), gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1.length;i<l;++i) {
    if ( gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1[k] = gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1[i];
        ++k;
    }
}
gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Selecao", false);
}}

}


};

gdjs.tela_45de_45inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tela_45de_45inicioCode.GDBackgroundObjects1.length = 0;
gdjs.tela_45de_45inicioCode.GDBackgroundObjects2.length = 0;
gdjs.tela_45de_45inicioCode.GDGame_9595titleObjects1.length = 0;
gdjs.tela_45de_45inicioCode.GDGame_9595titleObjects2.length = 0;
gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1.length = 0;
gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects2.length = 0;
gdjs.tela_45de_45inicioCode.GDCreditsObjects1.length = 0;
gdjs.tela_45de_45inicioCode.GDCreditsObjects2.length = 0;

gdjs.tela_45de_45inicioCode.eventsList0(runtimeScene);
gdjs.tela_45de_45inicioCode.GDBackgroundObjects1.length = 0;
gdjs.tela_45de_45inicioCode.GDBackgroundObjects2.length = 0;
gdjs.tela_45de_45inicioCode.GDGame_9595titleObjects1.length = 0;
gdjs.tela_45de_45inicioCode.GDGame_9595titleObjects2.length = 0;
gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects1.length = 0;
gdjs.tela_45de_45inicioCode.GDNew_9595GameObjects2.length = 0;
gdjs.tela_45de_45inicioCode.GDCreditsObjects1.length = 0;
gdjs.tela_45de_45inicioCode.GDCreditsObjects2.length = 0;


return;

}

gdjs['tela_45de_45inicioCode'] = gdjs.tela_45de_45inicioCode;
