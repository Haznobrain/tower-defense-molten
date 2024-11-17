Events.on(ClientLoadEvent, () => {
  let block = Vars.content.getByName(ContentType.block, "towerdefensemolten-06-p3-variation-generator");
  block.buildType = () => extend(ConsumeGenerator.ConsumeGeneratorBuild, block, {
    getPowerProduction(){
      return warmup*Mathf.absin(120, 10); 
    }
  });
});
