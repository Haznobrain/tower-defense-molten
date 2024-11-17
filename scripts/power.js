Events.on(ClientLoadEvent, () => {
  let block = Vars.content.getByName(ContentType.block, "modname-name");
  block.buildType = () => extend(PowerGenerator.GeneratorBuild, block, {
    getPowerProduction(){
      return Mathf.absin(120, 600); 
    }
  });
});
