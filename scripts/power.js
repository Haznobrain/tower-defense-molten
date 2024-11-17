Events.on(ClientLoadEvent, () => {
  Vars.content.getByName(ContentType.block, "towerdefensemolten-06-p3-variation-generator").buildType = () => extend(PowerGenerator.GeneratorBuild, {
    getPowerProduction(){
      return Mathf.absin(120, 600); 
    }
  });
});
