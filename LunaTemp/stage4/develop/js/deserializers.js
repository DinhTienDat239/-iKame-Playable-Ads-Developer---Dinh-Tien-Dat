var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.JointSpring' )
  var i809 = data
  i808.spring = i809[0]
  i808.damper = i809[1]
  i808.targetPosition = i809[2]
  return i808
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.JointMotor' )
  var i811 = data
  i810.m_TargetVelocity = i811[0]
  i810.m_Force = i811[1]
  i810.m_FreeSpin = i811[2]
  return i810
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.JointLimits' )
  var i813 = data
  i812.m_Min = i813[0]
  i812.m_Max = i813[1]
  i812.m_Bounciness = i813[2]
  i812.m_BounceMinVelocity = i813[3]
  i812.m_ContactDistance = i813[4]
  i812.minBounce = i813[5]
  i812.maxBounce = i813[6]
  return i812
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.JointDrive' )
  var i815 = data
  i814.m_PositionSpring = i815[0]
  i814.m_PositionDamper = i815[1]
  i814.m_MaximumForce = i815[2]
  i814.m_UseAcceleration = i815[3]
  return i814
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i817 = data
  i816.m_Spring = i817[0]
  i816.m_Damper = i817[1]
  return i816
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i819 = data
  i818.m_Limit = i819[0]
  i818.m_Bounciness = i819[1]
  i818.m_ContactDistance = i819[2]
  return i818
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i821 = data
  i820.m_ExtremumSlip = i821[0]
  i820.m_ExtremumValue = i821[1]
  i820.m_AsymptoteSlip = i821[2]
  i820.m_AsymptoteValue = i821[3]
  i820.m_Stiffness = i821[4]
  return i820
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i823 = data
  i822.m_LowerAngle = i823[0]
  i822.m_UpperAngle = i823[1]
  return i822
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i825 = data
  i824.m_MotorSpeed = i825[0]
  i824.m_MaximumMotorTorque = i825[1]
  return i824
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i827 = data
  i826.m_DampingRatio = i827[0]
  i826.m_Frequency = i827[1]
  i826.m_Angle = i827[2]
  return i826
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i829 = data
  i828.m_LowerTranslation = i829[0]
  i828.m_UpperTranslation = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i831 = data
  i830.name = i831[0]
  i830.width = i831[1]
  i830.height = i831[2]
  i830.mipmapCount = i831[3]
  i830.anisoLevel = i831[4]
  i830.filterMode = i831[5]
  i830.hdr = !!i831[6]
  i830.format = i831[7]
  i830.wrapMode = i831[8]
  i830.alphaIsTransparency = !!i831[9]
  i830.alphaSource = i831[10]
  i830.graphicsFormat = i831[11]
  i830.sRGBTexture = !!i831[12]
  i830.desiredColorSpace = i831[13]
  i830.wrapU = i831[14]
  i830.wrapV = i831[15]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i832 = root || new pc.UnityMaterial()
  var i833 = data
  i832.name = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'shader')
  i832.renderQueue = i833[3]
  i832.enableInstancing = !!i833[4]
  var i835 = i833[5]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i835[i + 0]) );
  }
  i832.floatParameters = i834
  var i837 = i833[6]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i837[i + 0]) );
  }
  i832.colorParameters = i836
  var i839 = i833[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i839[i + 0]) );
  }
  i832.vectorParameters = i838
  var i841 = i833[8]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i841[i + 0]) );
  }
  i832.textureParameters = i840
  var i843 = i833[9]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i843[i + 0]) );
  }
  i832.materialFlags = i842
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i847 = data
  i846.name = i847[0]
  i846.value = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i851 = data
  i850.name = i851[0]
  i850.value = new pc.Color(i851[1], i851[2], i851[3], i851[4])
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i855 = data
  i854.name = i855[0]
  i854.value = new pc.Vec4( i855[1], i855[2], i855[3], i855[4] )
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i859 = data
  i858.name = i859[0]
  request.r(i859[1], i859[2], 0, i858, 'value')
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i863 = data
  i862.name = i863[0]
  i862.enabled = !!i863[1]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i865 = data
  i864.name = i865[0]
  i864.halfPrecision = !!i865[1]
  i864.useSimplification = !!i865[2]
  i864.useUInt32IndexFormat = !!i865[3]
  i864.vertexCount = i865[4]
  i864.aabb = i865[5]
  var i867 = i865[6]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( !!i867[i + 0] );
  }
  i864.streams = i866
  i864.vertices = i865[7]
  var i869 = i865[8]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i869[i + 0]) );
  }
  i864.subMeshes = i868
  var i871 = i865[9]
  var i870 = []
  for(var i = 0; i < i871.length; i += 16) {
    i870.push( new pc.Mat4().setData(i871[i + 0], i871[i + 1], i871[i + 2], i871[i + 3],  i871[i + 4], i871[i + 5], i871[i + 6], i871[i + 7],  i871[i + 8], i871[i + 9], i871[i + 10], i871[i + 11],  i871[i + 12], i871[i + 13], i871[i + 14], i871[i + 15]) );
  }
  i864.bindposes = i870
  var i873 = i865[10]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i873[i + 0]) );
  }
  i864.blendShapes = i872
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i879 = data
  i878.triangles = i879[0]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i885 = data
  i884.name = i885[0]
  var i887 = i885[1]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i887[i + 0]) );
  }
  i884.frames = i886
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i889 = data
  i888.position = new pc.Vec3( i889[0], i889[1], i889[2] )
  i888.scale = new pc.Vec3( i889[3], i889[4], i889[5] )
  i888.rotation = new pc.Quat(i889[6], i889[7], i889[8], i889[9])
  return i888
}

Deserializers["CarController"] = function (request, data, root) {
  var i890 = root || request.c( 'CarController' )
  var i891 = data
  i890.carType = i891[0]
  i890.carCapacity = i891[1]
  i890.carColor = i891[2]
  i890.isFirstLine = !!i891[3]
  i890.isParked = !!i891[4]
  i890.isMoving = !!i891[5]
  i890.currentPassengerCount = i891[6]
  i890._isBlockedByAhead = !!i891[7]
  i890._isReversing = !!i891[8]
  i890.isOutOfCarLine = !!i891[9]
  i890.moveSpeed = i891[10]
  i890.guestPickupSpeed = i891[11]
  i890.speedTransitionDuration = i891[12]
  i890.rotateSpeed = i891[13]
  i890.pathLookAhead = i891[14]
  i890.parkRotationY = i891[15]
  i890.parkApproachDistance = i891[16]
  i890.reverseSpeedMultiplier = i891[17]
  i890.exitOffsetX = i891[18]
  i890.fullExitSpeedMultiplier = i891[19]
  i890.fullExitBoostSegmentT = i891[20]
  i890.boostBodyTiltX = i891[21]
  i890.boostBodyTiltDuration = i891[22]
  i890.parkBrakeTiltX = i891[23]
  i890.parkBrakeTiltInDuration = i891[24]
  i890.parkBrakeTiltOutDuration = i891[25]
  i890.laneBlockedSwayZ = i891[26]
  i890.laneBlockedSwayStepDuration = i891[27]
  i890.turnSwayMaxZ = i891[28]
  i890.turnSwayFactor = i891[29]
  i890.turnSwayReturnSpeed = i891[30]
  i890.collisionCheckDistance = i891[31]
  i890.aheadCollisionResumeDelay = i891[32]
  i890.reverseCollisionStopDuration = i891[33]
  i890.hoodCloseDuration = i891[34]
  i890.hoodClosedStartScale = new pc.Vec3( i891[35], i891[36], i891[37] )
  i890.hoodCloseDropOffset = i891[38]
  var i893 = i891[39]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i890.seatTransforms = i892
  request.r(i891[40], i891[41], 0, i890, 'carBodyMeshRenderer')
  request.r(i891[42], i891[43], 0, i890, 'carHoodMeshRenderer')
  request.r(i891[44], i891[45], 0, i890, 'carBody')
  request.r(i891[46], i891[47], 0, i890, 'carSmokeFX')
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i897 = data
  i896.center = new pc.Vec3( i897[0], i897[1], i897[2] )
  i896.size = new pc.Vec3( i897[3], i897[4], i897[5] )
  i896.enabled = !!i897[6]
  i896.isTrigger = !!i897[7]
  request.r(i897[8], i897[9], 0, i896, 'material')
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i899 = data
  i898.mass = i899[0]
  i898.drag = i899[1]
  i898.angularDrag = i899[2]
  i898.useGravity = !!i899[3]
  i898.isKinematic = !!i899[4]
  i898.constraints = i899[5]
  i898.maxAngularVelocity = i899[6]
  i898.collisionDetectionMode = i899[7]
  i898.interpolation = i899[8]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'animatorController')
  request.r(i901[2], i901[3], 0, i900, 'avatar')
  i900.updateMode = i901[4]
  i900.hasTransformHierarchy = !!i901[5]
  i900.applyRootMotion = !!i901[6]
  var i903 = i901[7]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.humanBones = i902
  i900.enabled = !!i901[8]
  return i900
}

Deserializers["GuestController"] = function (request, data, root) {
  var i904 = root || request.c( 'GuestController' )
  var i905 = data
  i904.guestColor = i905[0]
  i904.isOnCar = !!i905[1]
  i904.jumpPower = i905[2]
  i904.jumpDuration = i905[3]
  i904.queueMoveDuration = i905[4]
  request.r(i905[5], i905[6], 0, i904, 'meshRendererBody')
  request.r(i905[7], i905[8], 0, i904, 'animator')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i907 = data
  i906.name = i907[0]
  i906.tagId = i907[1]
  i906.enabled = !!i907[2]
  i906.isStatic = !!i907[3]
  i906.layer = i907[4]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'sharedMesh')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'additionalVertexStreams')
  i910.enabled = !!i911[2]
  request.r(i911[3], i911[4], 0, i910, 'sharedMaterial')
  var i913 = i911[5]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i910.sharedMaterials = i912
  i910.receiveShadows = !!i911[6]
  i910.shadowCastingMode = i911[7]
  i910.sortingLayerID = i911[8]
  i910.sortingOrder = i911[9]
  i910.lightmapIndex = i911[10]
  i910.lightmapSceneIndex = i911[11]
  i910.lightmapScaleOffset = new pc.Vec4( i911[12], i911[13], i911[14], i911[15] )
  i910.lightProbeUsage = i911[16]
  i910.reflectionProbeUsage = i911[17]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i917 = data
  i916.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i917[0], i916.main)
  i916.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i917[1], i916.colorBySpeed)
  i916.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i917[2], i916.colorOverLifetime)
  i916.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i917[3], i916.emission)
  i916.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i917[4], i916.rotationBySpeed)
  i916.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i917[5], i916.rotationOverLifetime)
  i916.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i917[6], i916.shape)
  i916.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i917[7], i916.sizeBySpeed)
  i916.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i917[8], i916.sizeOverLifetime)
  i916.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i917[9], i916.textureSheetAnimation)
  i916.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i917[10], i916.velocityOverLifetime)
  i916.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i917[11], i916.noise)
  i916.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i917[12], i916.inheritVelocity)
  i916.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i917[13], i916.forceOverLifetime)
  i916.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i917[14], i916.limitVelocityOverLifetime)
  i916.useAutoRandomSeed = !!i917[15]
  i916.randomSeed = i917[16]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemMain()
  var i919 = data
  i918.duration = i919[0]
  i918.loop = !!i919[1]
  i918.prewarm = !!i919[2]
  i918.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[3], i918.startDelay)
  i918.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[4], i918.startLifetime)
  i918.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[5], i918.startSpeed)
  i918.startSize3D = !!i919[6]
  i918.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[7], i918.startSizeX)
  i918.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[8], i918.startSizeY)
  i918.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[9], i918.startSizeZ)
  i918.startRotation3D = !!i919[10]
  i918.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[11], i918.startRotationX)
  i918.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[12], i918.startRotationY)
  i918.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[13], i918.startRotationZ)
  i918.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i919[14], i918.startColor)
  i918.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[15], i918.gravityModifier)
  i918.simulationSpace = i919[16]
  request.r(i919[17], i919[18], 0, i918, 'customSimulationSpace')
  i918.simulationSpeed = i919[19]
  i918.useUnscaledTime = !!i919[20]
  i918.scalingMode = i919[21]
  i918.playOnAwake = !!i919[22]
  i918.maxParticles = i919[23]
  i918.emitterVelocityMode = i919[24]
  i918.stopAction = i919[25]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i920 = root || new pc.MinMaxCurve()
  var i921 = data
  i920.mode = i921[0]
  i920.curveMin = new pc.AnimationCurve( { keys_flow: i921[1] } )
  i920.curveMax = new pc.AnimationCurve( { keys_flow: i921[2] } )
  i920.curveMultiplier = i921[3]
  i920.constantMin = i921[4]
  i920.constantMax = i921[5]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i922 = root || new pc.MinMaxGradient()
  var i923 = data
  i922.mode = i923[0]
  i922.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i923[1], i922.gradientMin)
  i922.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i923[2], i922.gradientMax)
  i922.colorMin = new pc.Color(i923[3], i923[4], i923[5], i923[6])
  i922.colorMax = new pc.Color(i923[7], i923[8], i923[9], i923[10])
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i925 = data
  i924.mode = i925[0]
  var i927 = i925[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i927[i + 0]) );
  }
  i924.colorKeys = i926
  var i929 = i925[2]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i929[i + 0]) );
  }
  i924.alphaKeys = i928
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemColorBySpeed()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i931[1], i930.color)
  i930.range = new pc.Vec2( i931[2], i931[3] )
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i935 = data
  i934.color = new pc.Color(i935[0], i935[1], i935[2], i935[3])
  i934.time = i935[4]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i939 = data
  i938.alpha = i939[0]
  i938.time = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemColorOverLifetime()
  var i941 = data
  i940.enabled = !!i941[0]
  i940.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i941[1], i940.color)
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemEmitter()
  var i943 = data
  i942.enabled = !!i943[0]
  i942.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[1], i942.rateOverTime)
  i942.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[2], i942.rateOverDistance)
  var i945 = i943[3]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i945[i + 0]) );
  }
  i942.bursts = i944
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i948 = root || new pc.ParticleSystemBurst()
  var i949 = data
  i948.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i949[0], i948.count)
  i948.cycleCount = i949[1]
  i948.minCount = i949[2]
  i948.maxCount = i949[3]
  i948.repeatInterval = i949[4]
  i948.time = i949[5]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i950 = root || new pc.ParticleSystemRotationBySpeed()
  var i951 = data
  i950.enabled = !!i951[0]
  i950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[1], i950.x)
  i950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[2], i950.y)
  i950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i951[3], i950.z)
  i950.separateAxes = !!i951[4]
  i950.range = new pc.Vec2( i951[5], i951[6] )
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i952 = root || new pc.ParticleSystemRotationOverLifetime()
  var i953 = data
  i952.enabled = !!i953[0]
  i952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[1], i952.x)
  i952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[2], i952.y)
  i952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i953[3], i952.z)
  i952.separateAxes = !!i953[4]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i954 = root || new pc.ParticleSystemShape()
  var i955 = data
  i954.enabled = !!i955[0]
  i954.shapeType = i955[1]
  i954.randomDirectionAmount = i955[2]
  i954.sphericalDirectionAmount = i955[3]
  i954.randomPositionAmount = i955[4]
  i954.alignToDirection = !!i955[5]
  i954.radius = i955[6]
  i954.radiusMode = i955[7]
  i954.radiusSpread = i955[8]
  i954.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[9], i954.radiusSpeed)
  i954.radiusThickness = i955[10]
  i954.angle = i955[11]
  i954.length = i955[12]
  i954.boxThickness = new pc.Vec3( i955[13], i955[14], i955[15] )
  i954.meshShapeType = i955[16]
  request.r(i955[17], i955[18], 0, i954, 'mesh')
  request.r(i955[19], i955[20], 0, i954, 'meshRenderer')
  request.r(i955[21], i955[22], 0, i954, 'skinnedMeshRenderer')
  i954.useMeshMaterialIndex = !!i955[23]
  i954.meshMaterialIndex = i955[24]
  i954.useMeshColors = !!i955[25]
  i954.normalOffset = i955[26]
  i954.arc = i955[27]
  i954.arcMode = i955[28]
  i954.arcSpread = i955[29]
  i954.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i955[30], i954.arcSpeed)
  i954.donutRadius = i955[31]
  i954.position = new pc.Vec3( i955[32], i955[33], i955[34] )
  i954.rotation = new pc.Vec3( i955[35], i955[36], i955[37] )
  i954.scale = new pc.Vec3( i955[38], i955[39], i955[40] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i956 = root || new pc.ParticleSystemSizeBySpeed()
  var i957 = data
  i956.enabled = !!i957[0]
  i956.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[1], i956.x)
  i956.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[2], i956.y)
  i956.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i957[3], i956.z)
  i956.separateAxes = !!i957[4]
  i956.range = new pc.Vec2( i957[5], i957[6] )
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i958 = root || new pc.ParticleSystemSizeOverLifetime()
  var i959 = data
  i958.enabled = !!i959[0]
  i958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[1], i958.x)
  i958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[2], i958.y)
  i958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i959[3], i958.z)
  i958.separateAxes = !!i959[4]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i960 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i961 = data
  i960.enabled = !!i961[0]
  i960.mode = i961[1]
  i960.animation = i961[2]
  i960.numTilesX = i961[3]
  i960.numTilesY = i961[4]
  i960.useRandomRow = !!i961[5]
  i960.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[6], i960.frameOverTime)
  i960.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i961[7], i960.startFrame)
  i960.cycleCount = i961[8]
  i960.rowIndex = i961[9]
  i960.flipU = i961[10]
  i960.flipV = i961[11]
  i960.spriteCount = i961[12]
  var i963 = i961[13]
  var i962 = []
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 2, i962, '')
  }
  i960.sprites = i962
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i967 = data
  i966.enabled = !!i967[0]
  i966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[1], i966.x)
  i966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[2], i966.y)
  i966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.z)
  i966.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[4], i966.radial)
  i966.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[5], i966.speedModifier)
  i966.space = i967[6]
  i966.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[7], i966.orbitalX)
  i966.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[8], i966.orbitalY)
  i966.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[9], i966.orbitalZ)
  i966.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[10], i966.orbitalOffsetX)
  i966.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[11], i966.orbitalOffsetY)
  i966.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[12], i966.orbitalOffsetZ)
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i968 = root || new pc.ParticleSystemNoise()
  var i969 = data
  i968.enabled = !!i969[0]
  i968.separateAxes = !!i969[1]
  i968.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[2], i968.strengthX)
  i968.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[3], i968.strengthY)
  i968.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[4], i968.strengthZ)
  i968.frequency = i969[5]
  i968.damping = !!i969[6]
  i968.octaveCount = i969[7]
  i968.octaveMultiplier = i969[8]
  i968.octaveScale = i969[9]
  i968.quality = i969[10]
  i968.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[11], i968.scrollSpeed)
  i968.scrollSpeedMultiplier = i969[12]
  i968.remapEnabled = !!i969[13]
  i968.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[14], i968.remapX)
  i968.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[15], i968.remapY)
  i968.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[16], i968.remapZ)
  i968.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[17], i968.positionAmount)
  i968.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[18], i968.rotationAmount)
  i968.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i969[19], i968.sizeAmount)
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i970 = root || new pc.ParticleSystemInheritVelocity()
  var i971 = data
  i970.enabled = !!i971[0]
  i970.mode = i971[1]
  i970.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i971[2], i970.curve)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i972 = root || new pc.ParticleSystemForceOverLifetime()
  var i973 = data
  i972.enabled = !!i973[0]
  i972.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[1], i972.x)
  i972.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[2], i972.y)
  i972.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i973[3], i972.z)
  i972.space = i973[4]
  i972.randomized = !!i973[5]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i974 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i975 = data
  i974.enabled = !!i975[0]
  i974.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[1], i974.limit)
  i974.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[2], i974.limitX)
  i974.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[3], i974.limitY)
  i974.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[4], i974.limitZ)
  i974.dampen = i975[5]
  i974.separateAxes = !!i975[6]
  i974.space = i975[7]
  i974.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i975[8], i974.drag)
  i974.multiplyDragByParticleSize = !!i975[9]
  i974.multiplyDragByParticleVelocity = !!i975[10]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'mesh')
  i976.meshCount = i977[2]
  i976.activeVertexStreamsCount = i977[3]
  i976.alignment = i977[4]
  i976.renderMode = i977[5]
  i976.sortMode = i977[6]
  i976.lengthScale = i977[7]
  i976.velocityScale = i977[8]
  i976.cameraVelocityScale = i977[9]
  i976.normalDirection = i977[10]
  i976.sortingFudge = i977[11]
  i976.minParticleSize = i977[12]
  i976.maxParticleSize = i977[13]
  i976.pivot = new pc.Vec3( i977[14], i977[15], i977[16] )
  request.r(i977[17], i977[18], 0, i976, 'trailMaterial')
  i976.applyActiveColorSpace = !!i977[19]
  i976.enabled = !!i977[20]
  request.r(i977[21], i977[22], 0, i976, 'sharedMaterial')
  var i979 = i977[23]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.sharedMaterials = i978
  i976.receiveShadows = !!i977[24]
  i976.shadowCastingMode = i977[25]
  i976.sortingLayerID = i977[26]
  i976.sortingOrder = i977[27]
  i976.lightmapIndex = i977[28]
  i976.lightmapSceneIndex = i977[29]
  i976.lightmapScaleOffset = new pc.Vec4( i977[30], i977[31], i977[32], i977[33] )
  i976.lightProbeUsage = i977[34]
  i976.reflectionProbeUsage = i977[35]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'sharedMesh')
  var i983 = i981[2]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.bones = i982
  i980.updateWhenOffscreen = !!i981[3]
  i980.localBounds = i981[4]
  request.r(i981[5], i981[6], 0, i980, 'rootBone')
  var i985 = i981[7]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i985[i + 0]) );
  }
  i980.blendShapesWeights = i984
  i980.enabled = !!i981[8]
  request.r(i981[9], i981[10], 0, i980, 'sharedMaterial')
  var i987 = i981[11]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i980.sharedMaterials = i986
  i980.receiveShadows = !!i981[12]
  i980.shadowCastingMode = i981[13]
  i980.sortingLayerID = i981[14]
  i980.sortingOrder = i981[15]
  i980.lightmapIndex = i981[16]
  i980.lightmapSceneIndex = i981[17]
  i980.lightmapScaleOffset = new pc.Vec4( i981[18], i981[19], i981[20], i981[21] )
  i980.lightProbeUsage = i981[22]
  i980.reflectionProbeUsage = i981[23]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i991 = data
  i990.weight = i991[0]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i993 = data
  i992.name = i993[0]
  i992.atlasId = i993[1]
  i992.mipmapCount = i993[2]
  i992.hdr = !!i993[3]
  i992.size = i993[4]
  i992.anisoLevel = i993[5]
  i992.filterMode = i993[6]
  var i995 = i993[7]
  var i994 = []
  for(var i = 0; i < i995.length; i += 4) {
    i994.push( UnityEngine.Rect.MinMaxRect(i995[i + 0], i995[i + 1], i995[i + 2], i995[i + 3]) );
  }
  i992.rects = i994
  i992.wrapU = i993[8]
  i992.wrapV = i993[9]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i999 = data
  i998.name = i999[0]
  i998.index = i999[1]
  i998.startup = !!i999[2]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1001 = data
  i1000.aspect = i1001[0]
  i1000.orthographic = !!i1001[1]
  i1000.orthographicSize = i1001[2]
  i1000.backgroundColor = new pc.Color(i1001[3], i1001[4], i1001[5], i1001[6])
  i1000.nearClipPlane = i1001[7]
  i1000.farClipPlane = i1001[8]
  i1000.fieldOfView = i1001[9]
  i1000.depth = i1001[10]
  i1000.clearFlags = i1001[11]
  i1000.cullingMask = i1001[12]
  i1000.rect = i1001[13]
  request.r(i1001[14], i1001[15], 0, i1000, 'targetTexture')
  i1000.usePhysicalProperties = !!i1001[16]
  i1000.focalLength = i1001[17]
  i1000.sensorSize = new pc.Vec2( i1001[18], i1001[19] )
  i1000.lensShift = new pc.Vec2( i1001[20], i1001[21] )
  i1000.gateFit = i1001[22]
  i1000.commandBufferCount = i1001[23]
  i1000.cameraType = i1001[24]
  i1000.enabled = !!i1001[25]
  return i1000
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1003 = data
  i1002.m_RenderShadows = !!i1003[0]
  i1002.m_RequiresDepthTextureOption = i1003[1]
  i1002.m_RequiresOpaqueTextureOption = i1003[2]
  i1002.m_CameraType = i1003[3]
  var i1005 = i1003[4]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 1, i1004, '')
  }
  i1002.m_Cameras = i1004
  i1002.m_RendererIndex = i1003[5]
  i1002.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1003[6] )
  request.r(i1003[7], i1003[8], 0, i1002, 'm_VolumeTrigger')
  i1002.m_VolumeFrameworkUpdateModeOption = i1003[9]
  i1002.m_RenderPostProcessing = !!i1003[10]
  i1002.m_Antialiasing = i1003[11]
  i1002.m_AntialiasingQuality = i1003[12]
  i1002.m_StopNaN = !!i1003[13]
  i1002.m_Dithering = !!i1003[14]
  i1002.m_ClearDepth = !!i1003[15]
  i1002.m_AllowXRRendering = !!i1003[16]
  i1002.m_AllowHDROutput = !!i1003[17]
  i1002.m_UseScreenCoordOverride = !!i1003[18]
  i1002.m_ScreenSizeOverride = new pc.Vec4( i1003[19], i1003[20], i1003[21], i1003[22] )
  i1002.m_ScreenCoordScaleBias = new pc.Vec4( i1003[23], i1003[24], i1003[25], i1003[26] )
  i1002.m_RequiresDepthTexture = !!i1003[27]
  i1002.m_RequiresColorTexture = !!i1003[28]
  i1002.m_Version = i1003[29]
  i1002.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1003[30], i1002.m_TaaSettings)
  return i1002
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1009 = data
  i1008.m_Quality = i1009[0]
  i1008.m_FrameInfluence = i1009[1]
  i1008.m_JitterScale = i1009[2]
  i1008.m_MipBias = i1009[3]
  i1008.m_VarianceClampScale = i1009[4]
  i1008.m_ContrastAdaptiveSharpening = i1009[5]
  return i1008
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i1011 = data
  i1010.priority = i1011[0]
  i1010.blendDistance = i1011[1]
  i1010.weight = i1011[2]
  request.r(i1011[3], i1011[4], 0, i1010, 'sharedProfile')
  i1010.m_IsGlobal = !!i1011[5]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1013 = data
  i1012.pivot = new pc.Vec2( i1013[0], i1013[1] )
  i1012.anchorMin = new pc.Vec2( i1013[2], i1013[3] )
  i1012.anchorMax = new pc.Vec2( i1013[4], i1013[5] )
  i1012.sizeDelta = new pc.Vec2( i1013[6], i1013[7] )
  i1012.anchoredPosition3D = new pc.Vec3( i1013[8], i1013[9], i1013[10] )
  i1012.rotation = new pc.Quat(i1013[11], i1013[12], i1013[13], i1013[14])
  i1012.scale = new pc.Vec3( i1013[15], i1013[16], i1013[17] )
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1015 = data
  i1014.planeDistance = i1015[0]
  i1014.referencePixelsPerUnit = i1015[1]
  i1014.isFallbackOverlay = !!i1015[2]
  i1014.renderMode = i1015[3]
  i1014.renderOrder = i1015[4]
  i1014.sortingLayerName = i1015[5]
  i1014.sortingOrder = i1015[6]
  i1014.scaleFactor = i1015[7]
  request.r(i1015[8], i1015[9], 0, i1014, 'worldCamera')
  i1014.overrideSorting = !!i1015[10]
  i1014.pixelPerfect = !!i1015[11]
  i1014.targetDisplay = i1015[12]
  i1014.overridePixelPerfect = !!i1015[13]
  i1014.enabled = !!i1015[14]
  return i1014
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1017 = data
  i1016.m_UiScaleMode = i1017[0]
  i1016.m_ReferencePixelsPerUnit = i1017[1]
  i1016.m_ScaleFactor = i1017[2]
  i1016.m_ReferenceResolution = new pc.Vec2( i1017[3], i1017[4] )
  i1016.m_ScreenMatchMode = i1017[5]
  i1016.m_MatchWidthOrHeight = i1017[6]
  i1016.m_PhysicalUnit = i1017[7]
  i1016.m_FallbackScreenDPI = i1017[8]
  i1016.m_DefaultSpriteDPI = i1017[9]
  i1016.m_DynamicPixelsPerUnit = i1017[10]
  i1016.m_PresetInfoIsWorld = !!i1017[11]
  return i1016
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1019 = data
  i1018.m_IgnoreReversedGraphics = !!i1019[0]
  i1018.m_BlockingObjects = i1019[1]
  i1018.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1019[2] )
  return i1018
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1020 = root || request.c( 'UIManager' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'winScreen')
  request.r(i1021[2], i1021[3], 0, i1020, 'winIcon')
  request.r(i1021[4], i1021[5], 0, i1020, 'winTxt')
  request.r(i1021[6], i1021[7], 0, i1020, 'winCTABtn')
  request.r(i1021[8], i1021[9], 0, i1020, 'loseScreen')
  request.r(i1021[10], i1021[11], 0, i1020, 'loseIcon')
  request.r(i1021[12], i1021[13], 0, i1020, 'loseTxt')
  request.r(i1021[14], i1021[15], 0, i1020, 'loseCTABtn')
  request.r(i1021[16], i1021[17], 0, i1020, 'carMovingDisplay')
  request.r(i1021[18], i1021[19], 0, i1020, 'carMovingTxt')
  request.r(i1021[20], i1021[21], 0, i1020, 'WarnBox')
  request.r(i1021[22], i1021[23], 0, i1020, 'WarnTxt')
  request.r(i1021[24], i1021[25], 0, i1020, 'tutorialTxt')
  i1020.screenFadeDuration = i1021[26]
  i1020.screenFadeAlpha = i1021[27]
  i1020.popupItemDuration = i1021[28]
  i1020.popupItemDelay = i1021[29]
  i1020.ctaPulseScale = i1021[30]
  i1020.ctaPulseHalfDuration = i1021[31]
  i1020.carMovingPopupScale = i1021[32]
  i1020.carMovingPopupInDuration = i1021[33]
  i1020.carMovingPopupOutDuration = i1021[34]
  i1020.warnTextRedDuration = i1021[35]
  i1020.warnShakeAngle = i1021[36]
  i1020.warnShakeDuration = i1021[37]
  i1020.warnBoxSlideOffset = i1021[38]
  i1020.warnBoxShowDuration = i1021[39]
  i1020.warnBoxHideDuration = i1021[40]
  i1020.warnBoxTotalDuration = i1021[41]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1023 = data
  i1022.cullTransparentMesh = !!i1023[0]
  return i1022
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.Image' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'm_Sprite')
  i1024.m_Type = i1025[2]
  i1024.m_PreserveAspect = !!i1025[3]
  i1024.m_FillCenter = !!i1025[4]
  i1024.m_FillMethod = i1025[5]
  i1024.m_FillAmount = i1025[6]
  i1024.m_FillClockwise = !!i1025[7]
  i1024.m_FillOrigin = i1025[8]
  i1024.m_UseSpriteMesh = !!i1025[9]
  i1024.m_PixelsPerUnitMultiplier = i1025[10]
  request.r(i1025[11], i1025[12], 0, i1024, 'm_Material')
  i1024.m_Maskable = !!i1025[13]
  i1024.m_Color = new pc.Color(i1025[14], i1025[15], i1025[16], i1025[17])
  i1024.m_RaycastTarget = !!i1025[18]
  i1024.m_RaycastPadding = new pc.Vec4( i1025[19], i1025[20], i1025[21], i1025[22] )
  return i1024
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1027 = data
  i1026.m_hasFontAssetChanged = !!i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'm_baseMaterial')
  i1026.m_maskOffset = new pc.Vec4( i1027[3], i1027[4], i1027[5], i1027[6] )
  i1026.m_text = i1027[7]
  i1026.m_isRightToLeft = !!i1027[8]
  request.r(i1027[9], i1027[10], 0, i1026, 'm_fontAsset')
  request.r(i1027[11], i1027[12], 0, i1026, 'm_sharedMaterial')
  var i1029 = i1027[13]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1026.m_fontSharedMaterials = i1028
  request.r(i1027[14], i1027[15], 0, i1026, 'm_fontMaterial')
  var i1031 = i1027[16]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1026.m_fontMaterials = i1030
  i1026.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1027[17], i1027[18], i1027[19], i1027[20])
  i1026.m_fontColor = new pc.Color(i1027[21], i1027[22], i1027[23], i1027[24])
  i1026.m_enableVertexGradient = !!i1027[25]
  i1026.m_colorMode = i1027[26]
  i1026.m_fontColorGradient = request.d('TMPro.VertexGradient', i1027[27], i1026.m_fontColorGradient)
  request.r(i1027[28], i1027[29], 0, i1026, 'm_fontColorGradientPreset')
  request.r(i1027[30], i1027[31], 0, i1026, 'm_spriteAsset')
  i1026.m_tintAllSprites = !!i1027[32]
  request.r(i1027[33], i1027[34], 0, i1026, 'm_StyleSheet')
  i1026.m_TextStyleHashCode = i1027[35]
  i1026.m_overrideHtmlColors = !!i1027[36]
  i1026.m_faceColor = UnityEngine.Color32.ConstructColor(i1027[37], i1027[38], i1027[39], i1027[40])
  i1026.m_fontSize = i1027[41]
  i1026.m_fontSizeBase = i1027[42]
  i1026.m_fontWeight = i1027[43]
  i1026.m_enableAutoSizing = !!i1027[44]
  i1026.m_fontSizeMin = i1027[45]
  i1026.m_fontSizeMax = i1027[46]
  i1026.m_fontStyle = i1027[47]
  i1026.m_HorizontalAlignment = i1027[48]
  i1026.m_VerticalAlignment = i1027[49]
  i1026.m_textAlignment = i1027[50]
  i1026.m_characterSpacing = i1027[51]
  i1026.m_characterHorizontalScale = i1027[52]
  i1026.m_wordSpacing = i1027[53]
  i1026.m_lineSpacing = i1027[54]
  i1026.m_lineSpacingMax = i1027[55]
  i1026.m_paragraphSpacing = i1027[56]
  i1026.m_charWidthMaxAdj = i1027[57]
  i1026.m_TextWrappingMode = i1027[58]
  i1026.m_wordWrappingRatios = i1027[59]
  i1026.m_overflowMode = i1027[60]
  request.r(i1027[61], i1027[62], 0, i1026, 'm_linkedTextComponent')
  request.r(i1027[63], i1027[64], 0, i1026, 'parentLinkedComponent')
  i1026.m_enableKerning = !!i1027[65]
  var i1033 = i1027[66]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(i1033[i + 0]);
  }
  i1026.m_ActiveFontFeatures = i1032
  i1026.m_enableExtraPadding = !!i1027[67]
  i1026.checkPaddingRequired = !!i1027[68]
  i1026.m_isRichText = !!i1027[69]
  i1026.m_parseCtrlCharacters = !!i1027[70]
  i1026.m_isOrthographic = !!i1027[71]
  i1026.m_isCullingEnabled = !!i1027[72]
  i1026.m_horizontalMapping = i1027[73]
  i1026.m_verticalMapping = i1027[74]
  i1026.m_uvLineOffset = i1027[75]
  i1026.m_geometrySortingOrder = i1027[76]
  i1026.m_IsTextObjectScaleStatic = !!i1027[77]
  i1026.m_VertexBufferAutoSizeReduction = !!i1027[78]
  i1026.m_useMaxVisibleDescender = !!i1027[79]
  i1026.m_pageToDisplay = i1027[80]
  i1026.m_margin = new pc.Vec4( i1027[81], i1027[82], i1027[83], i1027[84] )
  i1026.m_isUsingLegacyAnimationComponent = !!i1027[85]
  i1026.m_isVolumetricText = !!i1027[86]
  request.r(i1027[87], i1027[88], 0, i1026, 'm_Material')
  i1026.m_EmojiFallbackSupport = !!i1027[89]
  i1026.m_Maskable = !!i1027[90]
  i1026.m_Color = new pc.Color(i1027[91], i1027[92], i1027[93], i1027[94])
  i1026.m_RaycastTarget = !!i1027[95]
  i1026.m_RaycastPadding = new pc.Vec4( i1027[96], i1027[97], i1027[98], i1027[99] )
  return i1026
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.VertexGradient' )
  var i1035 = data
  i1034.topLeft = new pc.Color(i1035[0], i1035[1], i1035[2], i1035[3])
  i1034.topRight = new pc.Color(i1035[4], i1035[5], i1035[6], i1035[7])
  i1034.bottomLeft = new pc.Color(i1035[8], i1035[9], i1035[10], i1035[11])
  i1034.bottomRight = new pc.Color(i1035[12], i1035[13], i1035[14], i1035[15])
  return i1034
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1039 = data
  i1038.m_HorizontalFit = i1039[0]
  i1038.m_VerticalFit = i1039[1]
  return i1038
}

Deserializers["DAT.UI.FX.PulseEffect"] = function (request, data, root) {
  var i1040 = root || request.c( 'DAT.UI.FX.PulseEffect' )
  var i1041 = data
  i1040.pulseMode = i1041[0]
  i1040.pulseScale = i1041[1]
  i1040.duration = i1041[2]
  i1040.autoStart = !!i1041[3]
  i1040.startDelay = i1041[4]
  i1040.ease = i1041[5]
  i1040.loop = !!i1041[6]
  i1040.snap = !!i1041[7]
  i1040.delayBetween = i1041[8]
  return i1040
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'm_FirstSelected')
  i1042.m_sendNavigationEvents = !!i1043[2]
  i1042.m_DragThreshold = i1043[3]
  return i1042
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i1045 = data
  i1044.m_MoveRepeatDelay = i1045[0]
  i1044.m_MoveRepeatRate = i1045[1]
  request.r(i1045[2], i1045[3], 0, i1044, 'm_XRTrackingOrigin')
  request.r(i1045[4], i1045[5], 0, i1044, 'm_ActionsAsset')
  request.r(i1045[6], i1045[7], 0, i1044, 'm_PointAction')
  request.r(i1045[8], i1045[9], 0, i1044, 'm_MoveAction')
  request.r(i1045[10], i1045[11], 0, i1044, 'm_SubmitAction')
  request.r(i1045[12], i1045[13], 0, i1044, 'm_CancelAction')
  request.r(i1045[14], i1045[15], 0, i1044, 'm_LeftClickAction')
  request.r(i1045[16], i1045[17], 0, i1044, 'm_MiddleClickAction')
  request.r(i1045[18], i1045[19], 0, i1044, 'm_RightClickAction')
  request.r(i1045[20], i1045[21], 0, i1044, 'm_ScrollWheelAction')
  request.r(i1045[22], i1045[23], 0, i1044, 'm_TrackedDevicePositionAction')
  request.r(i1045[24], i1045[25], 0, i1044, 'm_TrackedDeviceOrientationAction')
  i1044.m_DeselectOnBackgroundClick = !!i1045[26]
  i1044.m_PointerBehavior = i1045[27]
  i1044.m_CursorLockBehavior = i1045[28]
  i1044.m_ScrollDeltaPerTick = i1045[29]
  i1044.m_SendPointerHoverToParent = !!i1045[30]
  return i1044
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1046 = root || request.c( 'GameManager' )
  var i1047 = data
  i1046.guestPickupInterval = i1047[0]
  i1046.movingCarLimit = i1047[1]
  i1046.moveLimit = i1047[2]
  i1046.moveCount = i1047[3]
  request.r(i1047[4], i1047[5], 0, i1046, 'colorPalette')
  request.r(i1047[6], i1047[7], 0, i1046, 'guestPath')
  request.r(i1047[8], i1047[9], 0, i1046, 'spawnManager')
  request.r(i1047[10], i1047[11], 0, i1046, 'parkingSlotManager')
  request.r(i1047[12], i1047[13], 0, i1046, 'carLineManager')
  request.r(i1047[14], i1047[15], 0, i1046, 'barrierController')
  request.r(i1047[16], i1047[17], 0, i1046, 'uiManager')
  var i1049 = i1047[18]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 2, i1048, '')
  }
  i1046.tutorialObjects = i1048
  i1046.carDone = i1047[19]
  i1046.movingCarCount = i1047[20]
  i1046.isWin = !!i1047[21]
  i1046.isLose = !!i1047[22]
  i1046.isTutorialDone = !!i1047[23]
  request.r(i1047[24], i1047[25], 0, i1046, 'BGM')
  request.r(i1047[26], i1047[27], 0, i1046, 'carDoneSound')
  request.r(i1047[28], i1047[29], 0, i1046, 'carHopInSound')
  request.r(i1047[30], i1047[31], 0, i1046, 'fullRoadWarningSound')
  i1046.persistAcrossScenes = !!i1047[32]
  return i1046
}

Deserializers["PlayerInteraction"] = function (request, data, root) {
  var i1052 = root || request.c( 'PlayerInteraction' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'raycastCamera')
  i1052.rayDistance = i1053[2]
  return i1052
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i1054 = root || request.c( 'SpawnManager' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'car4Prefab')
  request.r(i1055[2], i1055[3], 0, i1054, 'car6Prefab')
  request.r(i1055[4], i1055[5], 0, i1054, 'car10Prefab')
  i1054.columnCount = i1055[6]
  i1054.firstLineZ = i1055[7]
  i1054.columnSpacing = i1055[8]
  i1054.spawnY = i1055[9]
  request.r(i1055[10], i1055[11], 0, i1054, 'carParent')
  i1054.safeDistanceCar4 = i1055[12]
  i1054.safeDistanceCar6 = i1055[13]
  i1054.safeDistanceCar10 = i1055[14]
  var i1057 = i1055[15]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('CarSpawnData', i1057[i + 0]) );
  }
  i1054.column0 = i1056
  var i1059 = i1055[16]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('CarSpawnData', i1059[i + 0]) );
  }
  i1054.column1 = i1058
  var i1061 = i1055[17]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('CarSpawnData', i1061[i + 0]) );
  }
  i1054.column2 = i1060
  var i1063 = i1055[18]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('CarSpawnData', i1063[i + 0]) );
  }
  i1054.column3 = i1062
  var i1065 = i1055[19]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('CarSpawnData', i1065[i + 0]) );
  }
  i1054.column4 = i1064
  request.r(i1055[20], i1055[21], 0, i1054, 'guestPrefab')
  request.r(i1055[22], i1055[23], 0, i1054, 'guestParent')
  i1054.guestSpawnPosCount = i1055[24]
  i1054.guestSpacing = i1055[25]
  i1054.guestCurveRadius = i1055[26]
  var i1067 = i1055[27]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 2, i1066, '')
  }
  i1054.guestSpawnPositions = i1066
  var i1069 = i1055[28]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('GuestColorSpawnData', i1069[i + 0]) );
  }
  i1054.guestColors0 = i1068
  var i1071 = i1055[29]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('GuestColorSpawnData', i1071[i + 0]) );
  }
  i1054.guestColors1 = i1070
  var i1073 = i1055[30]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('GuestColorSpawnData', i1073[i + 0]) );
  }
  i1054.guestColors2 = i1072
  var i1075 = i1055[31]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('GuestColorSpawnData', i1075[i + 0]) );
  }
  i1054.guestColors3 = i1074
  return i1054
}

Deserializers["CarSpawnData"] = function (request, data, root) {
  var i1078 = root || request.c( 'CarSpawnData' )
  var i1079 = data
  i1078.carType = i1079[0]
  i1078.carColor = i1079[1]
  return i1078
}

Deserializers["GuestColorSpawnData"] = function (request, data, root) {
  var i1084 = root || request.c( 'GuestColorSpawnData' )
  var i1085 = data
  i1084.color = i1085[0]
  i1084.count = i1085[1]
  return i1084
}

Deserializers["CarLineManager"] = function (request, data, root) {
  var i1086 = root || request.c( 'CarLineManager' )
  var i1087 = data
  i1086.carLineDepartQueueCheckInterval = i1087[0]
  return i1086
}

Deserializers["VFXManager"] = function (request, data, root) {
  var i1088 = root || request.c( 'VFXManager' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'vfxCarDone')
  i1088.persistAcrossScenes = !!i1089[2]
  return i1088
}

Deserializers["DAT.Managers.AudioManager"] = function (request, data, root) {
  var i1090 = root || request.c( 'DAT.Managers.AudioManager' )
  var i1091 = data
  i1090.masterVolume = i1091[0]
  i1090.musicVolume = i1091[1]
  i1090.sfxVolume = i1091[2]
  i1090.muteMaster = !!i1091[3]
  i1090.muteMusic = !!i1091[4]
  i1090.muteSfx = !!i1091[5]
  i1090.isSaveToPlayerPref = !!i1091[6]
  var i1093 = i1091[7]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 2, i1092, '')
  }
  i1090.sfxChannels = i1092
  request.r(i1091[8], i1091[9], 0, i1090, 'musicA')
  request.r(i1091[10], i1091[11], 0, i1090, 'musicB')
  i1090.persistAcrossScenes = !!i1091[12]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'clip')
  request.r(i1097[2], i1097[3], 0, i1096, 'outputAudioMixerGroup')
  i1096.playOnAwake = !!i1097[4]
  i1096.loop = !!i1097[5]
  i1096.time = i1097[6]
  i1096.volume = i1097[7]
  i1096.pitch = i1097[8]
  i1096.enabled = !!i1097[9]
  return i1096
}

Deserializers["DAT.Core.ResponsiveManager"] = function (request, data, root) {
  var i1098 = root || request.c( 'DAT.Core.ResponsiveManager' )
  var i1099 = data
  i1098.OnPortrait = request.d('UnityEngine.Events.UnityEvent', i1099[0], i1098.OnPortrait)
  i1098.OnLandscape = request.d('UnityEngine.Events.UnityEvent', i1099[1], i1098.OnLandscape)
  i1098.OnOrientationChanged = request.d('UnityEngine.Events.UnityEvent`1[[DAT.Core.Orientation, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null]]', i1099[2], i1098.OnOrientationChanged)
  i1098.currentOrientation = i1099[3]
  var i1101 = i1099[4]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1098.portraitOnlyObjects = i1100
  var i1103 = i1099[5]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 2, i1102, '')
  }
  i1098.landscapeOnlyObjects = i1102
  request.r(i1099[6], i1099[7], 0, i1098, 'targetCanvasScaler')
  i1098.autoFindCanvasScaler = !!i1099[8]
  i1098.portraitResolution = new pc.Vec2( i1099[9], i1099[10] )
  i1098.landscapeResolution = new pc.Vec2( i1099[11], i1099[12] )
  i1098.adjustCamerasByAspect = !!i1099[13]
  var i1105 = i1099[14]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1098.targetCameras = i1104
  i1098.values9x16 = request.d('DAT.Core.AspectCameraValues', i1099[15], i1098.values9x16)
  i1098.values9x18 = request.d('DAT.Core.AspectCameraValues', i1099[16], i1098.values9x18)
  i1098.values9x20 = request.d('DAT.Core.AspectCameraValues', i1099[17], i1098.values9x20)
  i1098.values9x21 = request.d('DAT.Core.AspectCameraValues', i1099[18], i1098.values9x21)
  i1098.useDeviceOrientation = !!i1099[19]
  i1098.aspectChangeThreshold = i1099[20]
  i1098.persistAcrossScenes = !!i1099[21]
  return i1098
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1107 = data
  i1106.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1107[0], i1106.m_PersistentCalls)
  return i1106
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('UnityEngine.Events.PersistentCall', i1111[i + 0]));
  }
  i1108.m_Calls = i1110
  return i1108
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'm_Target')
  i1114.m_TargetAssemblyTypeName = i1115[2]
  i1114.m_MethodName = i1115[3]
  i1114.m_Mode = i1115[4]
  i1114.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1115[5], i1114.m_Arguments)
  i1114.m_CallState = i1115[6]
  return i1114
}

Deserializers["UnityEngine.Events.UnityEvent`1[[DAT.Core.Orientation, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null]]"] = function (request, data, root) {
  var i1116 = root || new (UnityEngine.Events.UnityEvent$1( Bridge.ns( 'DAT.Core.Orientation' ) ))
  var i1117 = data
  i1116.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1117[0], i1116.m_PersistentCalls)
  return i1116
}

Deserializers["DAT.Core.AspectCameraValues"] = function (request, data, root) {
  var i1120 = root || request.c( 'DAT.Core.AspectCameraValues' )
  var i1121 = data
  i1120.fieldOfView = i1121[0]
  i1120.orthographicSize = i1121[1]
  return i1120
}

Deserializers["GuestPath"] = function (request, data, root) {
  var i1122 = root || request.c( 'GuestPath' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122.waypoints = i1124
  return i1122
}

Deserializers["ParkingSlotManager"] = function (request, data, root) {
  var i1126 = root || request.c( 'ParkingSlotManager' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 2, i1128, '')
  }
  i1126.parkingSlots = i1128
  var i1131 = i1127[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 2, i1130, '')
  }
  i1126.parkingPath = i1130
  i1126.parkExitQueueCheckInterval = i1127[2]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1135 = data
  i1134.color = new pc.Color(i1135[0], i1135[1], i1135[2], i1135[3])
  request.r(i1135[4], i1135[5], 0, i1134, 'sprite')
  i1134.flipX = !!i1135[6]
  i1134.flipY = !!i1135[7]
  i1134.drawMode = i1135[8]
  i1134.size = new pc.Vec2( i1135[9], i1135[10] )
  i1134.tileMode = i1135[11]
  i1134.adaptiveModeThreshold = i1135[12]
  i1134.maskInteraction = i1135[13]
  i1134.spriteSortPoint = i1135[14]
  i1134.enabled = !!i1135[15]
  request.r(i1135[16], i1135[17], 0, i1134, 'sharedMaterial')
  var i1137 = i1135[18]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1134.sharedMaterials = i1136
  i1134.receiveShadows = !!i1135[19]
  i1134.shadowCastingMode = i1135[20]
  i1134.sortingLayerID = i1135[21]
  i1134.sortingOrder = i1135[22]
  i1134.lightmapIndex = i1135[23]
  i1134.lightmapSceneIndex = i1135[24]
  i1134.lightmapScaleOffset = new pc.Vec4( i1135[25], i1135[26], i1135[27], i1135[28] )
  i1134.lightProbeUsage = i1135[29]
  i1134.reflectionProbeUsage = i1135[30]
  return i1134
}

Deserializers["ParkingSlotController"] = function (request, data, root) {
  var i1138 = root || request.c( 'ParkingSlotController' )
  var i1139 = data
  i1138.isParked = !!i1139[0]
  return i1138
}

Deserializers["GuestSpawnPos"] = function (request, data, root) {
  var i1140 = root || request.c( 'GuestSpawnPos' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'guestLeftDisplayTxt')
  i1140.queueType = i1141[2]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1143 = data
  i1142.center = new pc.Vec3( i1143[0], i1143[1], i1143[2] )
  i1142.radius = i1143[3]
  i1142.enabled = !!i1143[4]
  i1142.isTrigger = !!i1143[5]
  request.r(i1143[6], i1143[7], 0, i1142, 'material')
  return i1142
}

Deserializers["BarrierController"] = function (request, data, root) {
  var i1144 = root || request.c( 'BarrierController' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'barrier')
  i1144.openDuration = i1145[2]
  i1144.holdOpenDuration = i1145[3]
  i1144.closeDuration = i1145[4]
  i1144.openAngleX = i1145[5]
  return i1144
}

Deserializers["DAT.UI.FX.RotationEffect"] = function (request, data, root) {
  var i1146 = root || request.c( 'DAT.UI.FX.RotationEffect' )
  var i1147 = data
  i1146.rotationMode = i1147[0]
  i1146.rotationAngle = i1147[1]
  i1146.duration = i1147[2]
  i1146.autoStart = !!i1147[3]
  i1146.startDelay = i1147[4]
  i1146.ease = i1147[5]
  i1146.loop = !!i1147[6]
  i1146.snap = !!i1147[7]
  i1146.delayBetween = i1147[8]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1149 = data
  i1148.ambientIntensity = i1149[0]
  i1148.reflectionIntensity = i1149[1]
  i1148.ambientMode = i1149[2]
  i1148.ambientLight = new pc.Color(i1149[3], i1149[4], i1149[5], i1149[6])
  i1148.ambientSkyColor = new pc.Color(i1149[7], i1149[8], i1149[9], i1149[10])
  i1148.ambientGroundColor = new pc.Color(i1149[11], i1149[12], i1149[13], i1149[14])
  i1148.ambientEquatorColor = new pc.Color(i1149[15], i1149[16], i1149[17], i1149[18])
  i1148.fogColor = new pc.Color(i1149[19], i1149[20], i1149[21], i1149[22])
  i1148.fogEndDistance = i1149[23]
  i1148.fogStartDistance = i1149[24]
  i1148.fogDensity = i1149[25]
  i1148.fog = !!i1149[26]
  request.r(i1149[27], i1149[28], 0, i1148, 'skybox')
  i1148.fogMode = i1149[29]
  var i1151 = i1149[30]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1151[i + 0]) );
  }
  i1148.lightmaps = i1150
  i1148.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1149[31], i1148.lightProbes)
  i1148.lightmapsMode = i1149[32]
  i1148.mixedBakeMode = i1149[33]
  i1148.environmentLightingMode = i1149[34]
  i1148.ambientProbe = new pc.SphericalHarmonicsL2(i1149[35])
  request.r(i1149[36], i1149[37], 0, i1148, 'customReflection')
  request.r(i1149[38], i1149[39], 0, i1148, 'defaultReflection')
  i1148.defaultReflectionMode = i1149[40]
  i1148.defaultReflectionResolution = i1149[41]
  i1148.sunLightObjectId = i1149[42]
  i1148.pixelLightCount = i1149[43]
  i1148.defaultReflectionHDR = !!i1149[44]
  i1148.hasLightDataAsset = !!i1149[45]
  i1148.hasManualGenerate = !!i1149[46]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'lightmapColor')
  request.r(i1155[2], i1155[3], 0, i1154, 'lightmapDirection')
  request.r(i1155[4], i1155[5], 0, i1154, 'shadowMask')
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1156 = root || new UnityEngine.LightProbes()
  var i1157 = data
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1165 = data
  i1164.AdditionalLightsRenderingMode = i1165[0]
  i1164.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1165[1], i1164.LightRenderingMode)
  i1164.MainLightRenderingModeValue = i1165[2]
  i1164.SupportsMainLightShadows = !!i1165[3]
  i1164.MixedLightingSupported = !!i1165[4]
  i1164.MainLightShadowmapResolutionValue = i1165[5]
  i1164.SupportsSoftShadows = !!i1165[6]
  i1164.SoftShadowQualityValue = i1165[7]
  i1164.ShadowDistance = i1165[8]
  i1164.ShadowCascadeCount = i1165[9]
  i1164.Cascade2Split = i1165[10]
  i1164.Cascade3Split = new pc.Vec2( i1165[11], i1165[12] )
  i1164.Cascade4Split = new pc.Vec3( i1165[13], i1165[14], i1165[15] )
  i1164.CascadeBorder = i1165[16]
  i1164.ShadowDepthBias = i1165[17]
  i1164.ShadowNormalBias = i1165[18]
  i1164.RequireDepthTexture = !!i1165[19]
  i1164.RequireOpaqueTexture = !!i1165[20]
  i1164.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i1165[21], i1164.scriptableRendererData)
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1167 = data
  i1166.Disabled = i1167[0]
  i1166.PerVertex = i1167[1]
  i1166.PerPixel = i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i1169 = data
  i1168.opaqueLayerMask = i1169[0]
  i1168.transparentLayerMask = i1169[1]
  var i1171 = i1169[2]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i1171[i + 0]) );
  }
  i1168.RenderObjectsFeatures = i1170
  i1168.name = i1169[3]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i1175 = data
  i1174.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i1175[0], i1174.settings)
  i1174.name = i1175[1]
  i1174.typeName = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1177 = data
  var i1179 = i1177[0]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1179[i + 0]));
  }
  i1176.ShaderCompilationErrors = i1178
  i1176.name = i1177[1]
  i1176.guid = i1177[2]
  var i1181 = i1177[3]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( i1181[i + 0] );
  }
  i1176.shaderDefinedKeywords = i1180
  var i1183 = i1177[4]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1183[i + 0]) );
  }
  i1176.passes = i1182
  var i1185 = i1177[5]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1185[i + 0]) );
  }
  i1176.usePasses = i1184
  var i1187 = i1177[6]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1187[i + 0]) );
  }
  i1176.defaultParameterValues = i1186
  request.r(i1177[7], i1177[8], 0, i1176, 'unityFallbackShader')
  i1176.readDepth = !!i1177[9]
  i1176.hasDepthOnlyPass = !!i1177[10]
  i1176.isCreatedByShaderGraph = !!i1177[11]
  i1176.disableBatching = !!i1177[12]
  i1176.compiled = !!i1177[13]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1191 = data
  i1190.shaderName = i1191[0]
  i1190.errorMessage = i1191[1]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1196 = root || new pc.UnityShaderPass()
  var i1197 = data
  i1196.id = i1197[0]
  i1196.subShaderIndex = i1197[1]
  i1196.name = i1197[2]
  i1196.passType = i1197[3]
  i1196.grabPassTextureName = i1197[4]
  i1196.usePass = !!i1197[5]
  i1196.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[6], i1196.zTest)
  i1196.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[7], i1196.zWrite)
  i1196.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[8], i1196.culling)
  i1196.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1197[9], i1196.blending)
  i1196.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1197[10], i1196.alphaBlending)
  i1196.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[11], i1196.colorWriteMask)
  i1196.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[12], i1196.offsetUnits)
  i1196.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[13], i1196.offsetFactor)
  i1196.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[14], i1196.stencilRef)
  i1196.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[15], i1196.stencilReadMask)
  i1196.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1197[16], i1196.stencilWriteMask)
  i1196.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1197[17], i1196.stencilOp)
  i1196.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1197[18], i1196.stencilOpFront)
  i1196.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1197[19], i1196.stencilOpBack)
  var i1199 = i1197[20]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1199[i + 0]) );
  }
  i1196.tags = i1198
  var i1201 = i1197[21]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( i1201[i + 0] );
  }
  i1196.passDefinedKeywords = i1200
  var i1203 = i1197[22]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1203[i + 0]) );
  }
  i1196.passDefinedKeywordGroups = i1202
  var i1205 = i1197[23]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1205[i + 0]) );
  }
  i1196.variants = i1204
  var i1207 = i1197[24]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1207[i + 0]) );
  }
  i1196.excludedVariants = i1206
  i1196.hasDepthReader = !!i1197[25]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1209 = data
  i1208.val = i1209[0]
  i1208.name = i1209[1]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1211 = data
  i1210.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1211[0], i1210.src)
  i1210.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1211[1], i1210.dst)
  i1210.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1211[2], i1210.op)
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1213 = data
  i1212.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1213[0], i1212.pass)
  i1212.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1213[1], i1212.fail)
  i1212.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1213[2], i1212.zFail)
  i1212.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1213[3], i1212.comp)
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.value = i1217[1]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( i1223[i + 0] );
  }
  i1220.keywords = i1222
  i1220.hasDiscard = !!i1221[1]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1227 = data
  i1226.passId = i1227[0]
  i1226.subShaderIndex = i1227[1]
  var i1229 = i1227[2]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( i1229[i + 0] );
  }
  i1226.keywords = i1228
  i1226.vertexProgram = i1227[3]
  i1226.fragmentProgram = i1227[4]
  i1226.exportedForWebGl2 = !!i1227[5]
  i1226.readDepth = !!i1227[6]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1233 = data
  request.r(i1233[0], i1233[1], 0, i1232, 'shader')
  i1232.pass = i1233[2]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1237 = data
  i1236.name = i1237[0]
  i1236.type = i1237[1]
  i1236.value = new pc.Vec4( i1237[2], i1237[3], i1237[4], i1237[5] )
  i1236.textureValue = i1237[6]
  i1236.shaderPropertyFlag = i1237[7]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1239 = data
  i1238.name = i1239[0]
  request.r(i1239[1], i1239[2], 0, i1238, 'texture')
  i1238.aabb = i1239[3]
  i1238.vertices = i1239[4]
  i1238.triangles = i1239[5]
  i1238.textureRect = UnityEngine.Rect.MinMaxRect(i1239[6], i1239[7], i1239[8], i1239[9])
  i1238.packedRect = UnityEngine.Rect.MinMaxRect(i1239[10], i1239[11], i1239[12], i1239[13])
  i1238.border = new pc.Vec4( i1239[14], i1239[15], i1239[16], i1239[17] )
  i1238.transparency = i1239[18]
  i1238.bounds = i1239[19]
  i1238.pixelsPerUnit = i1239[20]
  i1238.textureWidth = i1239[21]
  i1238.textureHeight = i1239[22]
  i1238.nativeSize = new pc.Vec2( i1239[23], i1239[24] )
  i1238.pivot = new pc.Vec2( i1239[25], i1239[26] )
  i1238.textureRectOffset = new pc.Vec2( i1239[27], i1239[28] )
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1241 = data
  i1240.name = i1241[0]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1243 = data
  i1242.name = i1243[0]
  i1242.wrapMode = i1243[1]
  i1242.isLooping = !!i1243[2]
  i1242.length = i1243[3]
  var i1245 = i1243[4]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1245[i + 0]) );
  }
  i1242.curves = i1244
  var i1247 = i1243[5]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1247[i + 0]) );
  }
  i1242.events = i1246
  i1242.halfPrecision = !!i1243[6]
  i1242._frameRate = i1243[7]
  i1242.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1243[8], i1242.localBounds)
  i1242.hasMuscleCurves = !!i1243[9]
  var i1249 = i1243[10]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( i1249[i + 0] );
  }
  i1242.clipMuscleConstant = i1248
  i1242.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1243[11], i1242.clipBindingConstant)
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1253 = data
  i1252.path = i1253[0]
  i1252.hash = i1253[1]
  i1252.componentType = i1253[2]
  i1252.property = i1253[3]
  i1252.keys = i1253[4]
  var i1255 = i1253[5]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1255[i + 0]) );
  }
  i1252.objectReferenceKeys = i1254
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1259 = data
  i1258.time = i1259[0]
  request.r(i1259[1], i1259[2], 0, i1258, 'value')
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1263 = data
  i1262.functionName = i1263[0]
  i1262.floatParameter = i1263[1]
  i1262.intParameter = i1263[2]
  i1262.stringParameter = i1263[3]
  request.r(i1263[4], i1263[5], 0, i1262, 'objectReferenceParameter')
  i1262.time = i1263[6]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1265 = data
  i1264.center = new pc.Vec3( i1265[0], i1265[1], i1265[2] )
  i1264.extends = new pc.Vec3( i1265[3], i1265[4], i1265[5] )
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( i1271[i + 0] );
  }
  i1268.genericBindings = i1270
  var i1273 = i1269[1]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1268.pptrCurveMapping = i1272
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1275 = data
  i1274.name = i1275[0]
  var i1277 = i1275[1]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1277[i + 0]) );
  }
  i1274.layers = i1276
  var i1279 = i1275[2]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1279[i + 0]) );
  }
  i1274.parameters = i1278
  i1274.animationClips = i1275[3]
  i1274.avatarUnsupported = i1275[4]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1283 = data
  i1282.name = i1283[0]
  i1282.defaultWeight = i1283[1]
  i1282.blendingMode = i1283[2]
  i1282.avatarMask = i1283[3]
  i1282.syncedLayerIndex = i1283[4]
  i1282.syncedLayerAffectsTiming = !!i1283[5]
  i1282.syncedLayers = i1283[6]
  i1282.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1283[7], i1282.stateMachine)
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1285 = data
  i1284.id = i1285[0]
  i1284.name = i1285[1]
  i1284.path = i1285[2]
  var i1287 = i1285[3]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1287[i + 0]) );
  }
  i1284.states = i1286
  var i1289 = i1285[4]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1289[i + 0]) );
  }
  i1284.machines = i1288
  var i1291 = i1285[5]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1291[i + 0]) );
  }
  i1284.entryStateTransitions = i1290
  var i1293 = i1285[6]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1293[i + 0]) );
  }
  i1284.exitStateTransitions = i1292
  var i1295 = i1285[7]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1295[i + 0]) );
  }
  i1284.anyStateTransitions = i1294
  i1284.defaultStateId = i1285[8]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1299 = data
  i1298.id = i1299[0]
  i1298.name = i1299[1]
  i1298.cycleOffset = i1299[2]
  i1298.cycleOffsetParameter = i1299[3]
  i1298.cycleOffsetParameterActive = !!i1299[4]
  i1298.mirror = !!i1299[5]
  i1298.mirrorParameter = i1299[6]
  i1298.mirrorParameterActive = !!i1299[7]
  i1298.motionId = i1299[8]
  i1298.nameHash = i1299[9]
  i1298.fullPathHash = i1299[10]
  i1298.speed = i1299[11]
  i1298.speedParameter = i1299[12]
  i1298.speedParameterActive = !!i1299[13]
  i1298.tag = i1299[14]
  i1298.tagHash = i1299[15]
  i1298.writeDefaultValues = !!i1299[16]
  var i1301 = i1299[17]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 2, i1300, '')
  }
  i1298.behaviours = i1300
  var i1303 = i1299[18]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1303[i + 0]) );
  }
  i1298.transitions = i1302
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1309 = data
  i1308.fullPath = i1309[0]
  i1308.canTransitionToSelf = !!i1309[1]
  i1308.duration = i1309[2]
  i1308.exitTime = i1309[3]
  i1308.hasExitTime = !!i1309[4]
  i1308.hasFixedDuration = !!i1309[5]
  i1308.interruptionSource = i1309[6]
  i1308.offset = i1309[7]
  i1308.orderedInterruption = !!i1309[8]
  i1308.destinationStateId = i1309[9]
  i1308.isExit = !!i1309[10]
  i1308.mute = !!i1309[11]
  i1308.solo = !!i1309[12]
  var i1311 = i1309[13]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1311[i + 0]) );
  }
  i1308.conditions = i1310
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1315 = data
  i1314.mode = i1315[0]
  i1314.parameter = i1315[1]
  i1314.threshold = i1315[2]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1321 = data
  i1320.destinationStateId = i1321[0]
  i1320.isExit = !!i1321[1]
  i1320.mute = !!i1321[2]
  i1320.solo = !!i1321[3]
  var i1323 = i1321[4]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1323[i + 0]) );
  }
  i1320.conditions = i1322
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1327 = data
  i1326.defaultBool = !!i1327[0]
  i1326.defaultFloat = i1327[1]
  i1326.defaultInt = i1327[2]
  i1326.name = i1327[3]
  i1326.nameHash = i1327[4]
  i1326.type = i1327[5]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1329 = data
  i1328.name = i1329[0]
  i1328.bytes64 = i1329[1]
  i1328.data = i1329[2]
  return i1328
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1333.length; i += 2) {
  request.r(i1333[i + 0], i1333[i + 1], 1, i1332, '')
  }
  i1330.components = i1332
  return i1330
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1337 = data
  i1336.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1337[0], i1336.mode)
  i1336.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1337[1], i1336.neutralHDRRangeReductionMode)
  i1336.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1337[2], i1336.acesPreset)
  i1336.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1337[3], i1336.hueShiftAmount)
  i1336.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1337[4], i1336.detectPaperWhite)
  i1336.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1337[5], i1336.paperWhite)
  i1336.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1337[6], i1336.detectBrightnessLimits)
  i1336.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1337[7], i1336.minNits)
  i1336.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1337[8], i1336.maxNits)
  i1336.active = !!i1337[9]
  return i1336
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1339 = data
  i1338.m_Value = i1339[0]
  i1338.m_OverrideState = !!i1339[1]
  return i1338
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1341 = data
  i1340.m_Value = i1341[0]
  i1340.m_OverrideState = !!i1341[1]
  return i1340
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1342 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1343 = data
  i1342.m_Value = i1343[0]
  i1342.m_OverrideState = !!i1343[1]
  return i1342
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1344 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1345 = data
  i1344.m_Value = i1345[0]
  i1344.m_OverrideState = !!i1345[1]
  return i1344
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1347 = data
  i1346.m_Value = !!i1347[0]
  i1346.m_OverrideState = !!i1347[1]
  return i1346
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1349 = data
  i1348.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1349[0], i1348.skipIterations)
  i1348.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1349[1], i1348.threshold)
  i1348.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1349[2], i1348.intensity)
  i1348.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1349[3], i1348.scatter)
  i1348.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1349[4], i1348.clamp)
  i1348.tint = request.d('UnityEngine.Rendering.ColorParameter', i1349[5], i1348.tint)
  i1348.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1349[6], i1348.highQualityFiltering)
  i1348.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1349[7], i1348.downscale)
  i1348.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1349[8], i1348.maxIterations)
  i1348.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1349[9], i1348.dirtTexture)
  i1348.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1349[10], i1348.dirtIntensity)
  i1348.active = !!i1349[11]
  return i1348
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1350 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1351 = data
  i1350.m_Value = i1351[0]
  i1350.m_OverrideState = !!i1351[1]
  return i1350
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1353 = data
  i1352.m_Value = i1353[0]
  i1352.m_OverrideState = !!i1353[1]
  return i1352
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1355 = data
  i1354.m_Value = new pc.Color(i1355[0], i1355[1], i1355[2], i1355[3])
  i1354.m_OverrideState = !!i1355[4]
  return i1354
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1356 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1357 = data
  i1356.m_Value = i1357[0]
  i1356.m_OverrideState = !!i1357[1]
  return i1356
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1359 = data
  i1358.dimension = i1359[0]
  request.r(i1359[1], i1359[2], 0, i1358, 'm_Value')
  i1358.m_OverrideState = !!i1359[3]
  return i1358
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i1361 = data
  i1360.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i1361[0], i1360.mode)
  i1360.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i1361[1], i1360.quality)
  i1360.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1361[2], i1360.intensity)
  i1360.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1361[3], i1360.clamp)
  i1360.active = !!i1361[4]
  return i1360
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i1363 = data
  i1362.m_Value = i1363[0]
  i1362.m_OverrideState = !!i1363[1]
  return i1362
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i1365 = data
  i1364.m_Value = i1365[0]
  i1364.m_OverrideState = !!i1365[1]
  return i1364
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1366 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1367 = data
  i1366.color = request.d('UnityEngine.Rendering.ColorParameter', i1367[0], i1366.color)
  i1366.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1367[1], i1366.center)
  i1366.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1367[2], i1366.intensity)
  i1366.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1367[3], i1366.smoothness)
  i1366.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1367[4], i1366.rounded)
  i1366.active = !!i1367[5]
  return i1366
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1368 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1369 = data
  i1368.m_Value = new pc.Vec2( i1369[0], i1369[1] )
  i1368.m_OverrideState = !!i1369[2]
  return i1368
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1371 = data
  i1370.normalStyle = i1371[0]
  i1370.normalSpacingOffset = i1371[1]
  i1370.boldStyle = i1371[2]
  i1370.boldSpacing = i1371[3]
  i1370.italicStyle = i1371[4]
  i1370.tabSize = i1371[5]
  request.r(i1371[6], i1371[7], 0, i1370, 'atlas')
  i1370.m_SourceFontFileGUID = i1371[8]
  i1370.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1371[9], i1370.m_CreationSettings)
  request.r(i1371[10], i1371[11], 0, i1370, 'm_SourceFontFile')
  i1370.m_SourceFontFilePath = i1371[12]
  i1370.m_AtlasPopulationMode = i1371[13]
  i1370.InternalDynamicOS = !!i1371[14]
  var i1373 = i1371[15]
  var i1372 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.add(request.d('UnityEngine.TextCore.Glyph', i1373[i + 0]));
  }
  i1370.m_GlyphTable = i1372
  var i1375 = i1371[16]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.add(request.d('TMPro.TMP_Character', i1375[i + 0]));
  }
  i1370.m_CharacterTable = i1374
  var i1377 = i1371[17]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 2) {
  request.r(i1377[i + 0], i1377[i + 1], 2, i1376, '')
  }
  i1370.m_AtlasTextures = i1376
  i1370.m_AtlasTextureIndex = i1371[18]
  i1370.m_IsMultiAtlasTexturesEnabled = !!i1371[19]
  i1370.m_GetFontFeatures = !!i1371[20]
  i1370.m_ClearDynamicDataOnBuild = !!i1371[21]
  i1370.m_AtlasWidth = i1371[22]
  i1370.m_AtlasHeight = i1371[23]
  i1370.m_AtlasPadding = i1371[24]
  i1370.m_AtlasRenderMode = i1371[25]
  var i1379 = i1371[26]
  var i1378 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.add(request.d('UnityEngine.TextCore.GlyphRect', i1379[i + 0]));
  }
  i1370.m_UsedGlyphRects = i1378
  var i1381 = i1371[27]
  var i1380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.add(request.d('UnityEngine.TextCore.GlyphRect', i1381[i + 0]));
  }
  i1370.m_FreeGlyphRects = i1380
  i1370.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1371[28], i1370.m_FontFeatureTable)
  i1370.m_ShouldReimportFontFeatures = !!i1371[29]
  var i1383 = i1371[30]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1383.length; i += 2) {
  request.r(i1383[i + 0], i1383[i + 1], 1, i1382, '')
  }
  i1370.m_FallbackFontAssetTable = i1382
  var i1385 = i1371[31]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('TMPro.TMP_FontWeightPair', i1385[i + 0]) );
  }
  i1370.m_FontWeightTable = i1384
  var i1387 = i1371[32]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('TMPro.TMP_FontWeightPair', i1387[i + 0]) );
  }
  i1370.fontWeights = i1386
  i1370.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1371[33], i1370.m_fontInfo)
  var i1389 = i1371[34]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.add(request.d('TMPro.TMP_Glyph', i1389[i + 0]));
  }
  i1370.m_glyphInfoList = i1388
  i1370.m_KerningTable = request.d('TMPro.KerningTable', i1371[35], i1370.m_KerningTable)
  var i1391 = i1371[36]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1391.length; i += 2) {
  request.r(i1391[i + 0], i1391[i + 1], 1, i1390, '')
  }
  i1370.fallbackFontAssets = i1390
  i1370.m_Version = i1371[37]
  i1370.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1371[38], i1370.m_FaceInfo)
  request.r(i1371[39], i1371[40], 0, i1370, 'm_Material')
  return i1370
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1393 = data
  i1392.sourceFontFileName = i1393[0]
  i1392.sourceFontFileGUID = i1393[1]
  i1392.faceIndex = i1393[2]
  i1392.pointSizeSamplingMode = i1393[3]
  i1392.pointSize = i1393[4]
  i1392.padding = i1393[5]
  i1392.paddingMode = i1393[6]
  i1392.packingMode = i1393[7]
  i1392.atlasWidth = i1393[8]
  i1392.atlasHeight = i1393[9]
  i1392.characterSetSelectionMode = i1393[10]
  i1392.characterSequence = i1393[11]
  i1392.referencedFontAssetGUID = i1393[12]
  i1392.referencedTextAssetGUID = i1393[13]
  i1392.fontStyle = i1393[14]
  i1392.fontStyleModifier = i1393[15]
  i1392.renderMode = i1393[16]
  i1392.includeFontFeatures = !!i1393[17]
  return i1392
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1397 = data
  i1396.m_Index = i1397[0]
  i1396.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1397[1], i1396.m_Metrics)
  i1396.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1397[2], i1396.m_GlyphRect)
  i1396.m_Scale = i1397[3]
  i1396.m_AtlasIndex = i1397[4]
  i1396.m_ClassDefinitionType = i1397[5]
  return i1396
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1399 = data
  i1398.m_Width = i1399[0]
  i1398.m_Height = i1399[1]
  i1398.m_HorizontalBearingX = i1399[2]
  i1398.m_HorizontalBearingY = i1399[3]
  i1398.m_HorizontalAdvance = i1399[4]
  return i1398
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1401 = data
  i1400.m_X = i1401[0]
  i1400.m_Y = i1401[1]
  i1400.m_Width = i1401[2]
  i1400.m_Height = i1401[3]
  return i1400
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1404 = root || request.c( 'TMPro.TMP_Character' )
  var i1405 = data
  i1404.m_ElementType = i1405[0]
  i1404.m_Unicode = i1405[1]
  i1404.m_GlyphIndex = i1405[2]
  i1404.m_Scale = i1405[3]
  return i1404
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1410 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1411 = data
  var i1413 = i1411[0]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.add(request.d('TMPro.MultipleSubstitutionRecord', i1413[i + 0]));
  }
  i1410.m_MultipleSubstitutionRecords = i1412
  var i1415 = i1411[1]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('TMPro.LigatureSubstitutionRecord', i1415[i + 0]));
  }
  i1410.m_LigatureSubstitutionRecords = i1414
  var i1417 = i1411[2]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1417[i + 0]));
  }
  i1410.m_GlyphPairAdjustmentRecords = i1416
  var i1419 = i1411[3]
  var i1418 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1419[i + 0]));
  }
  i1410.m_MarkToBaseAdjustmentRecords = i1418
  var i1421 = i1411[4]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1421[i + 0]));
  }
  i1410.m_MarkToMarkAdjustmentRecords = i1420
  return i1410
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1425 = data
  i1424.m_TargetGlyphID = i1425[0]
  i1424.m_SubstituteGlyphIDs = i1425[1]
  return i1424
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1429 = data
  i1428.m_ComponentGlyphIDs = i1429[0]
  i1428.m_LigatureGlyphID = i1429[1]
  return i1428
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1433 = data
  i1432.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1433[0], i1432.m_FirstAdjustmentRecord)
  i1432.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1433[1], i1432.m_SecondAdjustmentRecord)
  i1432.m_FeatureLookupFlags = i1433[2]
  return i1432
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1437 = data
  i1436.m_BaseGlyphID = i1437[0]
  i1436.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1437[1], i1436.m_BaseGlyphAnchorPoint)
  i1436.m_MarkGlyphID = i1437[2]
  i1436.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1437[3], i1436.m_MarkPositionAdjustment)
  return i1436
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1441 = data
  i1440.m_BaseMarkGlyphID = i1441[0]
  i1440.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1441[1], i1440.m_BaseMarkGlyphAnchorPoint)
  i1440.m_CombiningMarkGlyphID = i1441[2]
  i1440.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1441[3], i1440.m_CombiningMarkPositionAdjustment)
  return i1440
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1447 = data
  request.r(i1447[0], i1447[1], 0, i1446, 'regularTypeface')
  request.r(i1447[2], i1447[3], 0, i1446, 'italicTypeface')
  return i1446
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1449 = data
  i1448.Name = i1449[0]
  i1448.PointSize = i1449[1]
  i1448.Scale = i1449[2]
  i1448.CharacterCount = i1449[3]
  i1448.LineHeight = i1449[4]
  i1448.Baseline = i1449[5]
  i1448.Ascender = i1449[6]
  i1448.CapHeight = i1449[7]
  i1448.Descender = i1449[8]
  i1448.CenterLine = i1449[9]
  i1448.SuperscriptOffset = i1449[10]
  i1448.SubscriptOffset = i1449[11]
  i1448.SubSize = i1449[12]
  i1448.Underline = i1449[13]
  i1448.UnderlineThickness = i1449[14]
  i1448.strikethrough = i1449[15]
  i1448.strikethroughThickness = i1449[16]
  i1448.TabWidth = i1449[17]
  i1448.Padding = i1449[18]
  i1448.AtlasWidth = i1449[19]
  i1448.AtlasHeight = i1449[20]
  return i1448
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1453 = data
  i1452.id = i1453[0]
  i1452.x = i1453[1]
  i1452.y = i1453[2]
  i1452.width = i1453[3]
  i1452.height = i1453[4]
  i1452.xOffset = i1453[5]
  i1452.yOffset = i1453[6]
  i1452.xAdvance = i1453[7]
  i1452.scale = i1453[8]
  return i1452
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1454 = root || request.c( 'TMPro.KerningTable' )
  var i1455 = data
  var i1457 = i1455[0]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.add(request.d('TMPro.KerningPair', i1457[i + 0]));
  }
  i1454.kerningPairs = i1456
  return i1454
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1460 = root || request.c( 'TMPro.KerningPair' )
  var i1461 = data
  i1460.xOffset = i1461[0]
  i1460.m_FirstGlyph = i1461[1]
  i1460.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1461[2], i1460.m_FirstGlyphAdjustments)
  i1460.m_SecondGlyph = i1461[3]
  i1460.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1461[4], i1460.m_SecondGlyphAdjustments)
  i1460.m_IgnoreSpacingAdjustments = !!i1461[5]
  return i1460
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1462 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1463 = data
  i1462.m_FaceIndex = i1463[0]
  i1462.m_FamilyName = i1463[1]
  i1462.m_StyleName = i1463[2]
  i1462.m_PointSize = i1463[3]
  i1462.m_Scale = i1463[4]
  i1462.m_UnitsPerEM = i1463[5]
  i1462.m_LineHeight = i1463[6]
  i1462.m_AscentLine = i1463[7]
  i1462.m_CapLine = i1463[8]
  i1462.m_MeanLine = i1463[9]
  i1462.m_Baseline = i1463[10]
  i1462.m_DescentLine = i1463[11]
  i1462.m_SuperscriptOffset = i1463[12]
  i1462.m_SuperscriptSize = i1463[13]
  i1462.m_SubscriptOffset = i1463[14]
  i1462.m_SubscriptSize = i1463[15]
  i1462.m_UnderlineOffset = i1463[16]
  i1462.m_UnderlineThickness = i1463[17]
  i1462.m_StrikethroughOffset = i1463[18]
  i1462.m_StrikethroughThickness = i1463[19]
  i1462.m_TabWidth = i1463[20]
  return i1462
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i1464 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i1465 = data
  var i1467 = i1465[0]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('UnityEngine.InputSystem.InputActionMap', i1467[i + 0]) );
  }
  i1464.m_ActionMaps = i1466
  var i1469 = i1465[1]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('UnityEngine.InputSystem.InputControlScheme', i1469[i + 0]) );
  }
  i1464.m_ControlSchemes = i1468
  i1464.m_IsProjectWide = !!i1465[2]
  return i1464
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i1472 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i1473 = data
  i1472.m_Name = i1473[0]
  i1472.m_Id = i1473[1]
  request.r(i1473[2], i1473[3], 0, i1472, 'm_Asset')
  var i1475 = i1473[4]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('UnityEngine.InputSystem.InputAction', i1475[i + 0]) );
  }
  i1472.m_Actions = i1474
  var i1477 = i1473[5]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('UnityEngine.InputSystem.InputBinding', i1477[i + 0]) );
  }
  i1472.m_Bindings = i1476
  return i1472
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i1480 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i1481 = data
  i1480.m_Name = i1481[0]
  i1480.m_Type = i1481[1]
  i1480.m_ExpectedControlType = i1481[2]
  i1480.m_Id = i1481[3]
  i1480.m_Processors = i1481[4]
  i1480.m_Interactions = i1481[5]
  var i1483 = i1481[6]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('UnityEngine.InputSystem.InputBinding', i1483[i + 0]) );
  }
  i1480.m_SingletonActionBindings = i1482
  i1480.m_Flags = i1481[7]
  return i1480
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i1486 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i1487 = data
  i1486.m_Name = i1487[0]
  i1486.m_Id = i1487[1]
  i1486.m_Path = i1487[2]
  i1486.m_Interactions = i1487[3]
  i1486.m_Processors = i1487[4]
  i1486.m_Groups = i1487[5]
  i1486.m_Action = i1487[6]
  i1486.m_Flags = i1487[7]
  return i1486
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i1491 = data
  i1490.m_Name = i1491[0]
  i1490.m_BindingGroup = i1491[1]
  var i1493 = i1491[2]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i1493[i + 0]) );
  }
  i1490.m_DeviceRequirements = i1492
  return i1490
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i1497 = data
  i1496.m_ControlPath = i1497[0]
  i1496.m_Flags = i1497[1]
  return i1496
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i1499 = data
  request.r(i1499[0], i1499[1], 0, i1498, 'm_Asset')
  i1498.m_ActionId = i1499[2]
  return i1498
}

Deserializers["ColorPalette"] = function (request, data, root) {
  var i1500 = root || request.c( 'ColorPalette' )
  var i1501 = data
  var i1503 = i1501[0]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( request.d('ColorPalette+ColorEntry', i1503[i + 0]) );
  }
  i1500.entries = i1502
  return i1500
}

Deserializers["ColorPalette+ColorEntry"] = function (request, data, root) {
  var i1506 = root || request.c( 'ColorPalette+ColorEntry' )
  var i1507 = data
  i1506.color = i1507[0]
  request.r(i1507[1], i1507[2], 0, i1506, 'carMaterial')
  request.r(i1507[3], i1507[4], 0, i1506, 'carOutlineMaterial')
  request.r(i1507[5], i1507[6], 0, i1506, 'humanMaterial')
  return i1506
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1509 = data
  i1508.useSafeMode = !!i1509[0]
  i1508.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1509[1], i1508.safeModeOptions)
  i1508.timeScale = i1509[2]
  i1508.unscaledTimeScale = i1509[3]
  i1508.useSmoothDeltaTime = !!i1509[4]
  i1508.maxSmoothUnscaledTime = i1509[5]
  i1508.rewindCallbackMode = i1509[6]
  i1508.showUnityEditorReport = !!i1509[7]
  i1508.logBehaviour = i1509[8]
  i1508.drawGizmos = !!i1509[9]
  i1508.defaultRecyclable = !!i1509[10]
  i1508.defaultAutoPlay = i1509[11]
  i1508.defaultUpdateType = i1509[12]
  i1508.defaultTimeScaleIndependent = !!i1509[13]
  i1508.defaultEaseType = i1509[14]
  i1508.defaultEaseOvershootOrAmplitude = i1509[15]
  i1508.defaultEasePeriod = i1509[16]
  i1508.defaultAutoKill = !!i1509[17]
  i1508.defaultLoopType = i1509[18]
  i1508.debugMode = !!i1509[19]
  i1508.debugStoreTargetId = !!i1509[20]
  i1508.showPreviewPanel = !!i1509[21]
  i1508.storeSettingsLocation = i1509[22]
  i1508.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1509[23], i1508.modules)
  i1508.createASMDEF = !!i1509[24]
  i1508.showPlayingTweens = !!i1509[25]
  i1508.showPausedTweens = !!i1509[26]
  return i1508
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1510 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1511 = data
  i1510.logBehaviour = i1511[0]
  i1510.nestedTweenFailureBehaviour = i1511[1]
  return i1510
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1512 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1513 = data
  i1512.showPanel = !!i1513[0]
  i1512.audioEnabled = !!i1513[1]
  i1512.physicsEnabled = !!i1513[2]
  i1512.physics2DEnabled = !!i1513[3]
  i1512.spriteEnabled = !!i1513[4]
  i1512.uiEnabled = !!i1513[5]
  i1512.textMeshProEnabled = !!i1513[6]
  i1512.tk2DEnabled = !!i1513[7]
  i1512.deAudioEnabled = !!i1513[8]
  i1512.deUnityExtendedEnabled = !!i1513[9]
  i1512.epoOutlineEnabled = !!i1513[10]
  return i1512
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1514 = root || request.c( 'TMPro.TMP_Settings' )
  var i1515 = data
  i1514.assetVersion = i1515[0]
  i1514.m_TextWrappingMode = i1515[1]
  i1514.m_enableKerning = !!i1515[2]
  var i1517 = i1515[3]
  var i1516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.add(i1517[i + 0]);
  }
  i1514.m_ActiveFontFeatures = i1516
  i1514.m_enableExtraPadding = !!i1515[4]
  i1514.m_enableTintAllSprites = !!i1515[5]
  i1514.m_enableParseEscapeCharacters = !!i1515[6]
  i1514.m_EnableRaycastTarget = !!i1515[7]
  i1514.m_GetFontFeaturesAtRuntime = !!i1515[8]
  i1514.m_missingGlyphCharacter = i1515[9]
  i1514.m_ClearDynamicDataOnBuild = !!i1515[10]
  i1514.m_warningsDisabled = !!i1515[11]
  request.r(i1515[12], i1515[13], 0, i1514, 'm_defaultFontAsset')
  i1514.m_defaultFontAssetPath = i1515[14]
  i1514.m_defaultFontSize = i1515[15]
  i1514.m_defaultAutoSizeMinRatio = i1515[16]
  i1514.m_defaultAutoSizeMaxRatio = i1515[17]
  i1514.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1515[18], i1515[19] )
  i1514.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1515[20], i1515[21] )
  i1514.m_autoSizeTextContainer = !!i1515[22]
  i1514.m_IsTextObjectScaleStatic = !!i1515[23]
  var i1519 = i1515[24]
  var i1518 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1519.length; i += 2) {
  request.r(i1519[i + 0], i1519[i + 1], 1, i1518, '')
  }
  i1514.m_fallbackFontAssets = i1518
  i1514.m_matchMaterialPreset = !!i1515[25]
  i1514.m_HideSubTextObjects = !!i1515[26]
  request.r(i1515[27], i1515[28], 0, i1514, 'm_defaultSpriteAsset')
  i1514.m_defaultSpriteAssetPath = i1515[29]
  i1514.m_enableEmojiSupport = !!i1515[30]
  i1514.m_MissingCharacterSpriteUnicode = i1515[31]
  var i1521 = i1515[32]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1521.length; i += 2) {
  request.r(i1521[i + 0], i1521[i + 1], 1, i1520, '')
  }
  i1514.m_EmojiFallbackTextAssets = i1520
  i1514.m_defaultColorGradientPresetsPath = i1515[33]
  request.r(i1515[34], i1515[35], 0, i1514, 'm_defaultStyleSheet')
  i1514.m_StyleSheetsResourcePath = i1515[36]
  request.r(i1515[37], i1515[38], 0, i1514, 'm_leadingCharacters')
  request.r(i1515[39], i1515[40], 0, i1514, 'm_followingCharacters')
  i1514.m_UseModernHangulLineBreakingRules = !!i1515[41]
  return i1514
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1524 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1525 = data
  var i1527 = i1525[0]
  var i1526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.add(request.d('TMPro.TMP_Style', i1527[i + 0]));
  }
  i1524.m_StyleList = i1526
  return i1524
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.TMP_Style' )
  var i1531 = data
  i1530.m_Name = i1531[0]
  i1530.m_HashCode = i1531[1]
  i1530.m_OpeningDefinition = i1531[2]
  i1530.m_ClosingDefinition = i1531[3]
  i1530.m_OpeningTagArray = i1531[4]
  i1530.m_ClosingTagArray = i1531[5]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1533 = data
  var i1535 = i1533[0]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1535[i + 0]) );
  }
  i1532.files = i1534
  i1532.componentToPrefabIds = i1533[1]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1539 = data
  i1538.path = i1539[0]
  request.r(i1539[1], i1539[2], 0, i1538, 'unityObject')
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1541 = data
  var i1543 = i1541[0]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1543[i + 0]) );
  }
  i1540.scriptsExecutionOrder = i1542
  var i1545 = i1541[1]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1545[i + 0]) );
  }
  i1540.sortingLayers = i1544
  var i1547 = i1541[2]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1547[i + 0]) );
  }
  i1540.cullingLayers = i1546
  i1540.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1541[3], i1540.timeSettings)
  i1540.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1541[4], i1540.physicsSettings)
  i1540.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1541[5], i1540.physics2DSettings)
  i1540.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1541[6], i1540.qualitySettings)
  i1540.enableRealtimeShadows = !!i1541[7]
  i1540.enableAutoInstancing = !!i1541[8]
  i1540.enableStaticBatching = !!i1541[9]
  i1540.enableDynamicBatching = !!i1541[10]
  i1540.usePreservativeDynamicBatching = !!i1541[11]
  i1540.lightmapEncodingQuality = i1541[12]
  i1540.desiredColorSpace = i1541[13]
  var i1549 = i1541[14]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( i1549[i + 0] );
  }
  i1540.allTags = i1548
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1553 = data
  i1552.name = i1553[0]
  i1552.value = i1553[1]
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1557 = data
  i1556.id = i1557[0]
  i1556.name = i1557[1]
  i1556.value = i1557[2]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1561 = data
  i1560.id = i1561[0]
  i1560.name = i1561[1]
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1563 = data
  i1562.fixedDeltaTime = i1563[0]
  i1562.maximumDeltaTime = i1563[1]
  i1562.timeScale = i1563[2]
  i1562.maximumParticleTimestep = i1563[3]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1565 = data
  i1564.gravity = new pc.Vec3( i1565[0], i1565[1], i1565[2] )
  i1564.defaultSolverIterations = i1565[3]
  i1564.bounceThreshold = i1565[4]
  i1564.autoSyncTransforms = !!i1565[5]
  i1564.autoSimulation = !!i1565[6]
  var i1567 = i1565[7]
  var i1566 = []
  for(var i = 0; i < i1567.length; i += 1) {
    i1566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1567[i + 0]) );
  }
  i1564.collisionMatrix = i1566
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.layerId = i1571[1]
  i1570.otherLayerId = i1571[2]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1573 = data
  request.r(i1573[0], i1573[1], 0, i1572, 'material')
  i1572.gravity = new pc.Vec2( i1573[2], i1573[3] )
  i1572.positionIterations = i1573[4]
  i1572.velocityIterations = i1573[5]
  i1572.velocityThreshold = i1573[6]
  i1572.maxLinearCorrection = i1573[7]
  i1572.maxAngularCorrection = i1573[8]
  i1572.maxTranslationSpeed = i1573[9]
  i1572.maxRotationSpeed = i1573[10]
  i1572.baumgarteScale = i1573[11]
  i1572.baumgarteTOIScale = i1573[12]
  i1572.timeToSleep = i1573[13]
  i1572.linearSleepTolerance = i1573[14]
  i1572.angularSleepTolerance = i1573[15]
  i1572.defaultContactOffset = i1573[16]
  i1572.autoSimulation = !!i1573[17]
  i1572.queriesHitTriggers = !!i1573[18]
  i1572.queriesStartInColliders = !!i1573[19]
  i1572.callbacksOnDisable = !!i1573[20]
  i1572.reuseCollisionCallbacks = !!i1573[21]
  i1572.autoSyncTransforms = !!i1573[22]
  var i1575 = i1573[23]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1575[i + 0]) );
  }
  i1572.collisionMatrix = i1574
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1579 = data
  i1578.enabled = !!i1579[0]
  i1578.layerId = i1579[1]
  i1578.otherLayerId = i1579[2]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1581 = data
  var i1583 = i1581[0]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 1) {
    i1582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1583[i + 0]) );
  }
  i1580.qualityLevels = i1582
  var i1585 = i1581[1]
  var i1584 = []
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.push( i1585[i + 0] );
  }
  i1580.names = i1584
  i1580.shadows = i1581[2]
  i1580.anisotropicFiltering = i1581[3]
  i1580.antiAliasing = i1581[4]
  i1580.lodBias = i1581[5]
  i1580.shadowCascades = i1581[6]
  i1580.shadowDistance = i1581[7]
  i1580.shadowmaskMode = i1581[8]
  i1580.shadowProjection = i1581[9]
  i1580.shadowResolution = i1581[10]
  i1580.softParticles = !!i1581[11]
  i1580.softVegetation = !!i1581[12]
  i1580.activeColorSpace = i1581[13]
  i1580.desiredColorSpace = i1581[14]
  i1580.masterTextureLimit = i1581[15]
  i1580.maxQueuedFrames = i1581[16]
  i1580.particleRaycastBudget = i1581[17]
  i1580.pixelLightCount = i1581[18]
  i1580.realtimeReflectionProbes = !!i1581[19]
  i1580.shadowCascade2Split = i1581[20]
  i1580.shadowCascade4Split = new pc.Vec3( i1581[21], i1581[22], i1581[23] )
  i1580.streamingMipmapsActive = !!i1581[24]
  i1580.vSyncCount = i1581[25]
  i1580.asyncUploadBufferSize = i1581[26]
  i1580.asyncUploadTimeSlice = i1581[27]
  i1580.billboardsFaceCameraPosition = !!i1581[28]
  i1580.shadowNearPlaneOffset = i1581[29]
  i1580.streamingMipmapsMemoryBudget = i1581[30]
  i1580.maximumLODLevel = i1581[31]
  i1580.streamingMipmapsAddAllCameras = !!i1581[32]
  i1580.streamingMipmapsMaxLevelReduction = i1581[33]
  i1580.streamingMipmapsRenderersPerFrame = i1581[34]
  i1580.resolutionScalingFixedDPIFactor = i1581[35]
  i1580.streamingMipmapsMaxFileIORequests = i1581[36]
  i1580.currentQualityLevel = i1581[37]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1591 = data
  i1590.weight = i1591[0]
  i1590.vertices = i1591[1]
  i1590.normals = i1591[2]
  i1590.tangents = i1591[3]
  return i1590
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1593 = data
  request.r(i1593[0], i1593[1], 0, i1592, 'm_ObjectArgument')
  i1592.m_ObjectArgumentAssemblyTypeName = i1593[2]
  i1592.m_IntArgument = i1593[3]
  i1592.m_FloatArgument = i1593[4]
  i1592.m_StringArgument = i1593[5]
  i1592.m_BoolArgument = !!i1593[6]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i1595 = data
  i1594.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1595[0], i1594.Event)
  i1594.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i1595[1], i1594.filterSettings)
  i1594.overrideMaterialId = i1595[2]
  i1594.overrideMaterialPassIndex = i1595[3]
  i1594.overrideShaderId = i1595[4]
  i1594.overrideShaderPassIndex = i1595[5]
  i1594.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1595[6], i1594.overrideMode)
  i1594.overrideDepthState = !!i1595[7]
  i1594.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1595[8], i1594.depthCompareFunction)
  i1594.enableWrite = !!i1595[9]
  i1594.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i1595[10], i1594.stencilSettings)
  i1594.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i1595[11], i1594.cameraSettings)
  return i1594
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1597 = data
  i1596.m_GlyphIndex = i1597[0]
  i1596.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1597[1], i1596.m_GlyphValueRecord)
  return i1596
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1598 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1599 = data
  i1598.m_XCoordinate = i1599[0]
  i1598.m_YCoordinate = i1599[1]
  return i1598
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1600 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1601 = data
  i1600.m_XPositionAdjustment = i1601[0]
  i1600.m_YPositionAdjustment = i1601[1]
  return i1600
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1603 = data
  i1602.xPlacement = i1603[0]
  i1602.yPlacement = i1603[1]
  i1602.xAdvance = i1603[2]
  i1602.yAdvance = i1603[3]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i1605 = data
  i1604.Value = i1605[0]
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i1607 = data
  i1606.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1607[0], i1606.RenderQueueType)
  i1606.LayerMask = i1607[1]
  var i1609 = i1607[2]
  var i1608 = []
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.push( i1609[i + 0] );
  }
  i1606.PassNames = i1608
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i1611 = data
  i1610.overrideStencilState = !!i1611[0]
  i1610.stencilReference = i1611[1]
  i1610.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1611[2], i1610.stencilCompareFunctionValue)
  i1610.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1611[3], i1610.passOperationValue)
  i1610.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1611[4], i1610.failOperationValue)
  i1610.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1611[5], i1610.zFailOperationValue)
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i1613 = data
  i1612.overrideCamera = !!i1613[0]
  i1612.restoreCamera = !!i1613[1]
  i1612.offset = new pc.Vec4( i1613[2], i1613[3], i1613[4], i1613[5] )
  i1612.cameraFieldOfView = i1613[6]
  return i1612
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1615 = data
  i1614.m_XPlacement = i1615[0]
  i1614.m_YPlacement = i1615[1]
  i1614.m_XAdvance = i1615[2]
  i1614.m_YAdvance = i1615[3]
  return i1614
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[18],"76":[19],"77":[8],"78":[8],"79":[8],"80":[8],"81":[8],"82":[8],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[19],"98":[5],"99":[100],"101":[100],"25":[24],"102":[30],"103":[12,5],"104":[105,106],"107":[105],"108":[30],"37":[36],"109":[25],"110":[24],"111":[19],"21":[19],"112":[113],"114":[24],"115":[5,24],"31":[24,32],"116":[24],"117":[32,24],"118":[5],"119":[32,24],"120":[24],"121":[122],"123":[122],"124":[122],"125":[24],"126":[24],"28":[25],"30":[32,24],"127":[24],"27":[25],"34":[24],"128":[24],"129":[24],"130":[24],"131":[24],"132":[24],"133":[24],"134":[24],"135":[24],"136":[32,24],"137":[24],"138":[24],"139":[24],"140":[24],"141":[32,24],"142":[24],"143":[36],"144":[36],"145":[36],"146":[36],"147":[19],"148":[19]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","CarController","UnityEngine.MeshRenderer","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","GuestController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.SkinnedMeshRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.UI.ContentSizeFitter","DAT.UI.FX.PulseEffect","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","GameManager","ColorPalette","GuestPath","SpawnManager","ParkingSlotManager","CarLineManager","BarrierController","UnityEngine.AudioClip","PlayerInteraction","GuestSpawnPos","VFXManager","DAT.Managers.AudioManager","UnityEngine.AudioSource","DAT.Core.ResponsiveManager","ParkingSlotController","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","DAT.UI.FX.RotationEffect","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","DAT.UI.FX.FadeEffect","DAT.Core.Optimization.MeshCombiner","DAT.Core.Optimization.ColliderSimplifier.EdgeColliderOptimizer","UnityEngine.PolygonCollider2D","UnityEngine.EdgeCollider2D","DAT.Core.Optimization.ColliderSimplifier.PolygonColliderOptimizer","DAT.Core.Motion.UIImageSpriteAnimation","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.66f2";

Deserializers.productName = "iKame Technical Test Bus Away";

Deserializers.lunaInitializationTime = "08/07/2026 08:45:30";

Deserializers.lunaDaysRunning = "1.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "41828";

Deserializers.projectId = "cbfe3c40de136434a969a42bad174c40";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.17.0\ncom.unity.render-pipelines.universal: 17.0.4\ncom.unity.timeline: 1.8.10\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1726";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4440";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c17d3abc-51f6-4546-86da-56cc91951f26";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

