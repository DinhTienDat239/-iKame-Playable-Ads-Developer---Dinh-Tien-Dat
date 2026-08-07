var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointSpring' )
  var i753 = data
  i752.spring = i753[0]
  i752.damper = i753[1]
  i752.targetPosition = i753[2]
  return i752
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointMotor' )
  var i755 = data
  i754.m_TargetVelocity = i755[0]
  i754.m_Force = i755[1]
  i754.m_FreeSpin = i755[2]
  return i754
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointLimits' )
  var i757 = data
  i756.m_Min = i757[0]
  i756.m_Max = i757[1]
  i756.m_Bounciness = i757[2]
  i756.m_BounceMinVelocity = i757[3]
  i756.m_ContactDistance = i757[4]
  i756.minBounce = i757[5]
  i756.maxBounce = i757[6]
  return i756
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.JointDrive' )
  var i759 = data
  i758.m_PositionSpring = i759[0]
  i758.m_PositionDamper = i759[1]
  i758.m_MaximumForce = i759[2]
  i758.m_UseAcceleration = i759[3]
  return i758
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i761 = data
  i760.m_Spring = i761[0]
  i760.m_Damper = i761[1]
  return i760
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i763 = data
  i762.m_Limit = i763[0]
  i762.m_Bounciness = i763[1]
  i762.m_ContactDistance = i763[2]
  return i762
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i765 = data
  i764.m_ExtremumSlip = i765[0]
  i764.m_ExtremumValue = i765[1]
  i764.m_AsymptoteSlip = i765[2]
  i764.m_AsymptoteValue = i765[3]
  i764.m_Stiffness = i765[4]
  return i764
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i767 = data
  i766.m_LowerAngle = i767[0]
  i766.m_UpperAngle = i767[1]
  return i766
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i769 = data
  i768.m_MotorSpeed = i769[0]
  i768.m_MaximumMotorTorque = i769[1]
  return i768
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i771 = data
  i770.m_DampingRatio = i771[0]
  i770.m_Frequency = i771[1]
  i770.m_Angle = i771[2]
  return i770
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i773 = data
  i772.m_LowerTranslation = i773[0]
  i772.m_UpperTranslation = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i774 = root || new pc.UnityMaterial()
  var i775 = data
  i774.name = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'shader')
  i774.renderQueue = i775[3]
  i774.enableInstancing = !!i775[4]
  var i777 = i775[5]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i777[i + 0]) );
  }
  i774.floatParameters = i776
  var i779 = i775[6]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i779[i + 0]) );
  }
  i774.colorParameters = i778
  var i781 = i775[7]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i781[i + 0]) );
  }
  i774.vectorParameters = i780
  var i783 = i775[8]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i783[i + 0]) );
  }
  i774.textureParameters = i782
  var i785 = i775[9]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i785[i + 0]) );
  }
  i774.materialFlags = i784
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i789 = data
  i788.name = i789[0]
  i788.value = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i793 = data
  i792.name = i793[0]
  i792.value = new pc.Color(i793[1], i793[2], i793[3], i793[4])
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i797 = data
  i796.name = i797[0]
  i796.value = new pc.Vec4( i797[1], i797[2], i797[3], i797[4] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i801 = data
  i800.name = i801[0]
  request.r(i801[1], i801[2], 0, i800, 'value')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i805 = data
  i804.name = i805[0]
  i804.enabled = !!i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i807 = data
  i806.name = i807[0]
  i806.width = i807[1]
  i806.height = i807[2]
  i806.mipmapCount = i807[3]
  i806.anisoLevel = i807[4]
  i806.filterMode = i807[5]
  i806.hdr = !!i807[6]
  i806.format = i807[7]
  i806.wrapMode = i807[8]
  i806.alphaIsTransparency = !!i807[9]
  i806.alphaSource = i807[10]
  i806.graphicsFormat = i807[11]
  i806.sRGBTexture = !!i807[12]
  i806.desiredColorSpace = i807[13]
  i806.wrapU = i807[14]
  i806.wrapV = i807[15]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i809 = data
  i808.name = i809[0]
  i808.halfPrecision = !!i809[1]
  i808.useSimplification = !!i809[2]
  i808.useUInt32IndexFormat = !!i809[3]
  i808.vertexCount = i809[4]
  i808.aabb = i809[5]
  var i811 = i809[6]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( !!i811[i + 0] );
  }
  i808.streams = i810
  i808.vertices = i809[7]
  var i813 = i809[8]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i813[i + 0]) );
  }
  i808.subMeshes = i812
  var i815 = i809[9]
  var i814 = []
  for(var i = 0; i < i815.length; i += 16) {
    i814.push( new pc.Mat4().setData(i815[i + 0], i815[i + 1], i815[i + 2], i815[i + 3],  i815[i + 4], i815[i + 5], i815[i + 6], i815[i + 7],  i815[i + 8], i815[i + 9], i815[i + 10], i815[i + 11],  i815[i + 12], i815[i + 13], i815[i + 14], i815[i + 15]) );
  }
  i808.bindposes = i814
  var i817 = i809[10]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i817[i + 0]) );
  }
  i808.blendShapes = i816
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i823 = data
  i822.triangles = i823[0]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i829 = data
  i828.name = i829[0]
  var i831 = i829[1]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i831[i + 0]) );
  }
  i828.frames = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i833 = data
  i832.position = new pc.Vec3( i833[0], i833[1], i833[2] )
  i832.scale = new pc.Vec3( i833[3], i833[4], i833[5] )
  i832.rotation = new pc.Quat(i833[6], i833[7], i833[8], i833[9])
  return i832
}

Deserializers["CarController"] = function (request, data, root) {
  var i834 = root || request.c( 'CarController' )
  var i835 = data
  i834.carType = i835[0]
  i834.carCapacity = i835[1]
  i834.carColor = i835[2]
  i834.isFirstLine = !!i835[3]
  i834.isParked = !!i835[4]
  i834.isMoving = !!i835[5]
  i834.currentPassengerCount = i835[6]
  i834._isBlockedByAhead = !!i835[7]
  i834._isReversing = !!i835[8]
  i834.isOutOfCarLine = !!i835[9]
  i834.moveSpeed = i835[10]
  i834.guestPickupSpeed = i835[11]
  i834.speedTransitionDuration = i835[12]
  i834.rotateSpeed = i835[13]
  i834.pathLookAhead = i835[14]
  i834.parkRotationY = i835[15]
  i834.parkApproachDistance = i835[16]
  i834.exitOffsetX = i835[17]
  i834.fullExitSpeedMultiplier = i835[18]
  i834.boostBodyTiltX = i835[19]
  i834.boostBodyTiltDuration = i835[20]
  i834.parkBrakeTiltX = i835[21]
  i834.parkBrakeTiltInDuration = i835[22]
  i834.parkBrakeTiltOutDuration = i835[23]
  i834.turnSwayMaxZ = i835[24]
  i834.turnSwayFactor = i835[25]
  i834.turnSwayReturnSpeed = i835[26]
  i834.collisionCheckDistance = i835[27]
  i834.hoodCloseDuration = i835[28]
  i834.hoodClosedStartScale = new pc.Vec3( i835[29], i835[30], i835[31] )
  i834.hoodCloseDropOffset = i835[32]
  var i837 = i835[33]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.seatTransforms = i836
  request.r(i835[34], i835[35], 0, i834, 'carBodyMeshRenderer')
  request.r(i835[36], i835[37], 0, i834, 'carHoodMeshRenderer')
  request.r(i835[38], i835[39], 0, i834, 'carBody')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i841 = data
  i840.center = new pc.Vec3( i841[0], i841[1], i841[2] )
  i840.size = new pc.Vec3( i841[3], i841[4], i841[5] )
  i840.enabled = !!i841[6]
  i840.isTrigger = !!i841[7]
  request.r(i841[8], i841[9], 0, i840, 'material')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i843 = data
  i842.mass = i843[0]
  i842.drag = i843[1]
  i842.angularDrag = i843[2]
  i842.useGravity = !!i843[3]
  i842.isKinematic = !!i843[4]
  i842.constraints = i843[5]
  i842.maxAngularVelocity = i843[6]
  i842.collisionDetectionMode = i843[7]
  i842.interpolation = i843[8]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'animatorController')
  request.r(i845[2], i845[3], 0, i844, 'avatar')
  i844.updateMode = i845[4]
  i844.hasTransformHierarchy = !!i845[5]
  i844.applyRootMotion = !!i845[6]
  var i847 = i845[7]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.humanBones = i846
  i844.enabled = !!i845[8]
  return i844
}

Deserializers["GuestController"] = function (request, data, root) {
  var i848 = root || request.c( 'GuestController' )
  var i849 = data
  i848.guestColor = i849[0]
  i848.isOnCar = !!i849[1]
  i848.jumpPower = i849[2]
  i848.jumpDuration = i849[3]
  i848.queueMoveDuration = i849[4]
  request.r(i849[5], i849[6], 0, i848, 'meshRendererBody')
  request.r(i849[7], i849[8], 0, i848, 'animator')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i851 = data
  i850.name = i851[0]
  i850.tagId = i851[1]
  i850.enabled = !!i851[2]
  i850.isStatic = !!i851[3]
  i850.layer = i851[4]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'sharedMesh')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'additionalVertexStreams')
  i854.enabled = !!i855[2]
  request.r(i855[3], i855[4], 0, i854, 'sharedMaterial')
  var i857 = i855[5]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.sharedMaterials = i856
  i854.receiveShadows = !!i855[6]
  i854.shadowCastingMode = i855[7]
  i854.sortingLayerID = i855[8]
  i854.sortingOrder = i855[9]
  i854.lightmapIndex = i855[10]
  i854.lightmapSceneIndex = i855[11]
  i854.lightmapScaleOffset = new pc.Vec4( i855[12], i855[13], i855[14], i855[15] )
  i854.lightProbeUsage = i855[16]
  i854.reflectionProbeUsage = i855[17]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i861 = data
  i860.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i861[0], i860.main)
  i860.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i861[1], i860.colorBySpeed)
  i860.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i861[2], i860.colorOverLifetime)
  i860.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i861[3], i860.emission)
  i860.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i861[4], i860.rotationBySpeed)
  i860.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i861[5], i860.rotationOverLifetime)
  i860.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i861[6], i860.shape)
  i860.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i861[7], i860.sizeBySpeed)
  i860.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i861[8], i860.sizeOverLifetime)
  i860.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i861[9], i860.textureSheetAnimation)
  i860.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i861[10], i860.velocityOverLifetime)
  i860.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i861[11], i860.noise)
  i860.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i861[12], i860.inheritVelocity)
  i860.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i861[13], i860.forceOverLifetime)
  i860.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i861[14], i860.limitVelocityOverLifetime)
  i860.useAutoRandomSeed = !!i861[15]
  i860.randomSeed = i861[16]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemMain()
  var i863 = data
  i862.duration = i863[0]
  i862.loop = !!i863[1]
  i862.prewarm = !!i863[2]
  i862.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[3], i862.startDelay)
  i862.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[4], i862.startLifetime)
  i862.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[5], i862.startSpeed)
  i862.startSize3D = !!i863[6]
  i862.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[7], i862.startSizeX)
  i862.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[8], i862.startSizeY)
  i862.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[9], i862.startSizeZ)
  i862.startRotation3D = !!i863[10]
  i862.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[11], i862.startRotationX)
  i862.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[12], i862.startRotationY)
  i862.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[13], i862.startRotationZ)
  i862.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i863[14], i862.startColor)
  i862.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[15], i862.gravityModifier)
  i862.simulationSpace = i863[16]
  request.r(i863[17], i863[18], 0, i862, 'customSimulationSpace')
  i862.simulationSpeed = i863[19]
  i862.useUnscaledTime = !!i863[20]
  i862.scalingMode = i863[21]
  i862.playOnAwake = !!i863[22]
  i862.maxParticles = i863[23]
  i862.emitterVelocityMode = i863[24]
  i862.stopAction = i863[25]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i864 = root || new pc.MinMaxCurve()
  var i865 = data
  i864.mode = i865[0]
  i864.curveMin = new pc.AnimationCurve( { keys_flow: i865[1] } )
  i864.curveMax = new pc.AnimationCurve( { keys_flow: i865[2] } )
  i864.curveMultiplier = i865[3]
  i864.constantMin = i865[4]
  i864.constantMax = i865[5]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i866 = root || new pc.MinMaxGradient()
  var i867 = data
  i866.mode = i867[0]
  i866.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i867[1], i866.gradientMin)
  i866.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i867[2], i866.gradientMax)
  i866.colorMin = new pc.Color(i867[3], i867[4], i867[5], i867[6])
  i866.colorMax = new pc.Color(i867[7], i867[8], i867[9], i867[10])
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i869 = data
  i868.mode = i869[0]
  var i871 = i869[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i871[i + 0]) );
  }
  i868.colorKeys = i870
  var i873 = i869[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i873[i + 0]) );
  }
  i868.alphaKeys = i872
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemColorBySpeed()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i875[1], i874.color)
  i874.range = new pc.Vec2( i875[2], i875[3] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i879 = data
  i878.color = new pc.Color(i879[0], i879[1], i879[2], i879[3])
  i878.time = i879[4]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i883 = data
  i882.alpha = i883[0]
  i882.time = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemColorOverLifetime()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i885[1], i884.color)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemEmitter()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[1], i886.rateOverTime)
  i886.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[2], i886.rateOverDistance)
  var i889 = i887[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i889[i + 0]) );
  }
  i886.bursts = i888
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemBurst()
  var i893 = data
  i892.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[0], i892.count)
  i892.cycleCount = i893[1]
  i892.minCount = i893[2]
  i892.maxCount = i893[3]
  i892.repeatInterval = i893[4]
  i892.time = i893[5]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemRotationBySpeed()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.x)
  i894.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.y)
  i894.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[3], i894.z)
  i894.separateAxes = !!i895[4]
  i894.range = new pc.Vec2( i895[5], i895[6] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemRotationOverLifetime()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[1], i896.x)
  i896.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.y)
  i896.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.z)
  i896.separateAxes = !!i897[4]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemShape()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.shapeType = i899[1]
  i898.randomDirectionAmount = i899[2]
  i898.sphericalDirectionAmount = i899[3]
  i898.randomPositionAmount = i899[4]
  i898.alignToDirection = !!i899[5]
  i898.radius = i899[6]
  i898.radiusMode = i899[7]
  i898.radiusSpread = i899[8]
  i898.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[9], i898.radiusSpeed)
  i898.radiusThickness = i899[10]
  i898.angle = i899[11]
  i898.length = i899[12]
  i898.boxThickness = new pc.Vec3( i899[13], i899[14], i899[15] )
  i898.meshShapeType = i899[16]
  request.r(i899[17], i899[18], 0, i898, 'mesh')
  request.r(i899[19], i899[20], 0, i898, 'meshRenderer')
  request.r(i899[21], i899[22], 0, i898, 'skinnedMeshRenderer')
  i898.useMeshMaterialIndex = !!i899[23]
  i898.meshMaterialIndex = i899[24]
  i898.useMeshColors = !!i899[25]
  i898.normalOffset = i899[26]
  i898.arc = i899[27]
  i898.arcMode = i899[28]
  i898.arcSpread = i899[29]
  i898.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[30], i898.arcSpeed)
  i898.donutRadius = i899[31]
  i898.position = new pc.Vec3( i899[32], i899[33], i899[34] )
  i898.rotation = new pc.Vec3( i899[35], i899[36], i899[37] )
  i898.scale = new pc.Vec3( i899[38], i899[39], i899[40] )
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemSizeBySpeed()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[1], i900.x)
  i900.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.y)
  i900.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.z)
  i900.separateAxes = !!i901[4]
  i900.range = new pc.Vec2( i901[5], i901[6] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemSizeOverLifetime()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.x)
  i902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.y)
  i902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.z)
  i902.separateAxes = !!i903[4]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.mode = i905[1]
  i904.animation = i905[2]
  i904.numTilesX = i905[3]
  i904.numTilesY = i905[4]
  i904.useRandomRow = !!i905[5]
  i904.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[6], i904.frameOverTime)
  i904.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[7], i904.startFrame)
  i904.cycleCount = i905[8]
  i904.rowIndex = i905[9]
  i904.flipU = i905[10]
  i904.flipV = i905[11]
  i904.spriteCount = i905[12]
  var i907 = i905[13]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.sprites = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[1], i910.x)
  i910.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[2], i910.y)
  i910.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[3], i910.z)
  i910.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[4], i910.radial)
  i910.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[5], i910.speedModifier)
  i910.space = i911[6]
  i910.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[7], i910.orbitalX)
  i910.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[8], i910.orbitalY)
  i910.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[9], i910.orbitalZ)
  i910.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[10], i910.orbitalOffsetX)
  i910.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[11], i910.orbitalOffsetY)
  i910.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[12], i910.orbitalOffsetZ)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemNoise()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.separateAxes = !!i913[1]
  i912.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.strengthX)
  i912.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[3], i912.strengthY)
  i912.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[4], i912.strengthZ)
  i912.frequency = i913[5]
  i912.damping = !!i913[6]
  i912.octaveCount = i913[7]
  i912.octaveMultiplier = i913[8]
  i912.octaveScale = i913[9]
  i912.quality = i913[10]
  i912.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[11], i912.scrollSpeed)
  i912.scrollSpeedMultiplier = i913[12]
  i912.remapEnabled = !!i913[13]
  i912.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[14], i912.remapX)
  i912.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[15], i912.remapY)
  i912.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[16], i912.remapZ)
  i912.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[17], i912.positionAmount)
  i912.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[18], i912.rotationAmount)
  i912.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[19], i912.sizeAmount)
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i914 = root || new pc.ParticleSystemInheritVelocity()
  var i915 = data
  i914.enabled = !!i915[0]
  i914.mode = i915[1]
  i914.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i915[2], i914.curve)
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemForceOverLifetime()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[1], i916.x)
  i916.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[2], i916.y)
  i916.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[3], i916.z)
  i916.space = i917[4]
  i916.randomized = !!i917[5]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i919 = data
  i918.enabled = !!i919[0]
  i918.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[1], i918.limit)
  i918.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[2], i918.limitX)
  i918.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[3], i918.limitY)
  i918.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[4], i918.limitZ)
  i918.dampen = i919[5]
  i918.separateAxes = !!i919[6]
  i918.space = i919[7]
  i918.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[8], i918.drag)
  i918.multiplyDragByParticleSize = !!i919[9]
  i918.multiplyDragByParticleVelocity = !!i919[10]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'mesh')
  i920.meshCount = i921[2]
  i920.activeVertexStreamsCount = i921[3]
  i920.alignment = i921[4]
  i920.renderMode = i921[5]
  i920.sortMode = i921[6]
  i920.lengthScale = i921[7]
  i920.velocityScale = i921[8]
  i920.cameraVelocityScale = i921[9]
  i920.normalDirection = i921[10]
  i920.sortingFudge = i921[11]
  i920.minParticleSize = i921[12]
  i920.maxParticleSize = i921[13]
  i920.pivot = new pc.Vec3( i921[14], i921[15], i921[16] )
  request.r(i921[17], i921[18], 0, i920, 'trailMaterial')
  i920.applyActiveColorSpace = !!i921[19]
  i920.enabled = !!i921[20]
  request.r(i921[21], i921[22], 0, i920, 'sharedMaterial')
  var i923 = i921[23]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i920.sharedMaterials = i922
  i920.receiveShadows = !!i921[24]
  i920.shadowCastingMode = i921[25]
  i920.sortingLayerID = i921[26]
  i920.sortingOrder = i921[27]
  i920.lightmapIndex = i921[28]
  i920.lightmapSceneIndex = i921[29]
  i920.lightmapScaleOffset = new pc.Vec4( i921[30], i921[31], i921[32], i921[33] )
  i920.lightProbeUsage = i921[34]
  i920.reflectionProbeUsage = i921[35]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i925 = data
  i924.color = new pc.Color(i925[0], i925[1], i925[2], i925[3])
  request.r(i925[4], i925[5], 0, i924, 'sprite')
  i924.flipX = !!i925[6]
  i924.flipY = !!i925[7]
  i924.drawMode = i925[8]
  i924.size = new pc.Vec2( i925[9], i925[10] )
  i924.tileMode = i925[11]
  i924.adaptiveModeThreshold = i925[12]
  i924.maskInteraction = i925[13]
  i924.spriteSortPoint = i925[14]
  i924.enabled = !!i925[15]
  request.r(i925[16], i925[17], 0, i924, 'sharedMaterial')
  var i927 = i925[18]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i924.sharedMaterials = i926
  i924.receiveShadows = !!i925[19]
  i924.shadowCastingMode = i925[20]
  i924.sortingLayerID = i925[21]
  i924.sortingOrder = i925[22]
  i924.lightmapIndex = i925[23]
  i924.lightmapSceneIndex = i925[24]
  i924.lightmapScaleOffset = new pc.Vec4( i925[25], i925[26], i925[27], i925[28] )
  i924.lightProbeUsage = i925[29]
  i924.reflectionProbeUsage = i925[30]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'sharedMesh')
  var i931 = i929[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.bones = i930
  i928.updateWhenOffscreen = !!i929[3]
  i928.localBounds = i929[4]
  request.r(i929[5], i929[6], 0, i928, 'rootBone')
  var i933 = i929[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i933[i + 0]) );
  }
  i928.blendShapesWeights = i932
  i928.enabled = !!i929[8]
  request.r(i929[9], i929[10], 0, i928, 'sharedMaterial')
  var i935 = i929[11]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i928.sharedMaterials = i934
  i928.receiveShadows = !!i929[12]
  i928.shadowCastingMode = i929[13]
  i928.sortingLayerID = i929[14]
  i928.sortingOrder = i929[15]
  i928.lightmapIndex = i929[16]
  i928.lightmapSceneIndex = i929[17]
  i928.lightmapScaleOffset = new pc.Vec4( i929[18], i929[19], i929[20], i929[21] )
  i928.lightProbeUsage = i929[22]
  i928.reflectionProbeUsage = i929[23]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i939 = data
  i938.weight = i939[0]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i941 = data
  i940.name = i941[0]
  i940.atlasId = i941[1]
  i940.mipmapCount = i941[2]
  i940.hdr = !!i941[3]
  i940.size = i941[4]
  i940.anisoLevel = i941[5]
  i940.filterMode = i941[6]
  var i943 = i941[7]
  var i942 = []
  for(var i = 0; i < i943.length; i += 4) {
    i942.push( UnityEngine.Rect.MinMaxRect(i943[i + 0], i943[i + 1], i943[i + 2], i943[i + 3]) );
  }
  i940.rects = i942
  i940.wrapU = i941[8]
  i940.wrapV = i941[9]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i947 = data
  i946.name = i947[0]
  i946.index = i947[1]
  i946.startup = !!i947[2]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i949 = data
  i948.aspect = i949[0]
  i948.orthographic = !!i949[1]
  i948.orthographicSize = i949[2]
  i948.backgroundColor = new pc.Color(i949[3], i949[4], i949[5], i949[6])
  i948.nearClipPlane = i949[7]
  i948.farClipPlane = i949[8]
  i948.fieldOfView = i949[9]
  i948.depth = i949[10]
  i948.clearFlags = i949[11]
  i948.cullingMask = i949[12]
  i948.rect = i949[13]
  request.r(i949[14], i949[15], 0, i948, 'targetTexture')
  i948.usePhysicalProperties = !!i949[16]
  i948.focalLength = i949[17]
  i948.sensorSize = new pc.Vec2( i949[18], i949[19] )
  i948.lensShift = new pc.Vec2( i949[20], i949[21] )
  i948.gateFit = i949[22]
  i948.commandBufferCount = i949[23]
  i948.cameraType = i949[24]
  i948.enabled = !!i949[25]
  return i948
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i951 = data
  i950.m_RenderShadows = !!i951[0]
  i950.m_RequiresDepthTextureOption = i951[1]
  i950.m_RequiresOpaqueTextureOption = i951[2]
  i950.m_CameraType = i951[3]
  var i953 = i951[4]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i950.m_Cameras = i952
  i950.m_RendererIndex = i951[5]
  i950.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i951[6] )
  request.r(i951[7], i951[8], 0, i950, 'm_VolumeTrigger')
  i950.m_VolumeFrameworkUpdateModeOption = i951[9]
  i950.m_RenderPostProcessing = !!i951[10]
  i950.m_Antialiasing = i951[11]
  i950.m_AntialiasingQuality = i951[12]
  i950.m_StopNaN = !!i951[13]
  i950.m_Dithering = !!i951[14]
  i950.m_ClearDepth = !!i951[15]
  i950.m_AllowXRRendering = !!i951[16]
  i950.m_AllowHDROutput = !!i951[17]
  i950.m_UseScreenCoordOverride = !!i951[18]
  i950.m_ScreenSizeOverride = new pc.Vec4( i951[19], i951[20], i951[21], i951[22] )
  i950.m_ScreenCoordScaleBias = new pc.Vec4( i951[23], i951[24], i951[25], i951[26] )
  i950.m_RequiresDepthTexture = !!i951[27]
  i950.m_RequiresColorTexture = !!i951[28]
  i950.m_Version = i951[29]
  i950.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i951[30], i950.m_TaaSettings)
  return i950
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i957 = data
  i956.m_Quality = i957[0]
  i956.m_FrameInfluence = i957[1]
  i956.m_JitterScale = i957[2]
  i956.m_MipBias = i957[3]
  i956.m_VarianceClampScale = i957[4]
  i956.m_ContrastAdaptiveSharpening = i957[5]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i959 = data
  i958.type = i959[0]
  i958.color = new pc.Color(i959[1], i959[2], i959[3], i959[4])
  i958.cullingMask = i959[5]
  i958.intensity = i959[6]
  i958.range = i959[7]
  i958.spotAngle = i959[8]
  i958.shadows = i959[9]
  i958.shadowNormalBias = i959[10]
  i958.shadowBias = i959[11]
  i958.shadowStrength = i959[12]
  i958.shadowResolution = i959[13]
  i958.lightmapBakeType = i959[14]
  i958.renderMode = i959[15]
  request.r(i959[16], i959[17], 0, i958, 'cookie')
  i958.cookieSize = i959[18]
  i958.shadowNearPlane = i959[19]
  i958.occlusionMaskChannel = i959[20]
  i958.isBaked = !!i959[21]
  i958.mixedLightingMode = i959[22]
  i958.enabled = !!i959[23]
  return i958
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i961 = data
  i960.m_Version = i961[0]
  i960.m_UsePipelineSettings = !!i961[1]
  i960.m_AdditionalLightsShadowResolutionTier = i961[2]
  i960.m_LightLayerMask = i961[3]
  i960.m_RenderingLayers = i961[4]
  i960.m_CustomShadowLayers = !!i961[5]
  i960.m_ShadowLayerMask = i961[6]
  i960.m_ShadowRenderingLayers = i961[7]
  i960.m_LightCookieSize = new pc.Vec2( i961[8], i961[9] )
  i960.m_LightCookieOffset = new pc.Vec2( i961[10], i961[11] )
  i960.m_SoftShadowQuality = i961[12]
  return i960
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i963 = data
  i962.priority = i963[0]
  i962.blendDistance = i963[1]
  i962.weight = i963[2]
  request.r(i963[3], i963[4], 0, i962, 'sharedProfile')
  i962.m_IsGlobal = !!i963[5]
  return i962
}

Deserializers["GameManager"] = function (request, data, root) {
  var i964 = root || request.c( 'GameManager' )
  var i965 = data
  i964.guestPickupInterval = i965[0]
  i964.movingCarLimit = i965[1]
  request.r(i965[2], i965[3], 0, i964, 'colorPalette')
  request.r(i965[4], i965[5], 0, i964, 'guestPath')
  request.r(i965[6], i965[7], 0, i964, 'spawnManager')
  request.r(i965[8], i965[9], 0, i964, 'parkingSlotManager')
  request.r(i965[10], i965[11], 0, i964, 'carLineManager')
  i964.carDone = i965[12]
  i964.movingCarCount = i965[13]
  i964.isWin = !!i965[14]
  i964.isLose = !!i965[15]
  i964.persistAcrossScenes = !!i965[16]
  return i964
}

Deserializers["PlayerInteraction"] = function (request, data, root) {
  var i966 = root || request.c( 'PlayerInteraction' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'raycastCamera')
  i966.rayDistance = i967[2]
  return i966
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i968 = root || request.c( 'SpawnManager' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'car4Prefab')
  request.r(i969[2], i969[3], 0, i968, 'car6Prefab')
  request.r(i969[4], i969[5], 0, i968, 'car10Prefab')
  i968.columnCount = i969[6]
  i968.firstLineZ = i969[7]
  i968.columnSpacing = i969[8]
  i968.spawnY = i969[9]
  request.r(i969[10], i969[11], 0, i968, 'carParent')
  i968.safeDistanceCar4 = i969[12]
  i968.safeDistanceCar6 = i969[13]
  i968.safeDistanceCar10 = i969[14]
  var i971 = i969[15]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('CarSpawnData', i971[i + 0]) );
  }
  i968.column0 = i970
  var i973 = i969[16]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('CarSpawnData', i973[i + 0]) );
  }
  i968.column1 = i972
  var i975 = i969[17]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('CarSpawnData', i975[i + 0]) );
  }
  i968.column2 = i974
  var i977 = i969[18]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('CarSpawnData', i977[i + 0]) );
  }
  i968.column3 = i976
  var i979 = i969[19]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('CarSpawnData', i979[i + 0]) );
  }
  i968.column4 = i978
  request.r(i969[20], i969[21], 0, i968, 'guestPrefab')
  request.r(i969[22], i969[23], 0, i968, 'guestParent')
  i968.guestSpawnPosCount = i969[24]
  i968.guestSpacing = i969[25]
  i968.guestCurveRadius = i969[26]
  var i981 = i969[27]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i968.guestSpawnPositions = i980
  var i983 = i969[28]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('GuestColorSpawnData', i983[i + 0]) );
  }
  i968.guestColors0 = i982
  var i985 = i969[29]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('GuestColorSpawnData', i985[i + 0]) );
  }
  i968.guestColors1 = i984
  var i987 = i969[30]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('GuestColorSpawnData', i987[i + 0]) );
  }
  i968.guestColors2 = i986
  var i989 = i969[31]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('GuestColorSpawnData', i989[i + 0]) );
  }
  i968.guestColors3 = i988
  return i968
}

Deserializers["CarSpawnData"] = function (request, data, root) {
  var i992 = root || request.c( 'CarSpawnData' )
  var i993 = data
  i992.carType = i993[0]
  i992.carColor = i993[1]
  return i992
}

Deserializers["GuestColorSpawnData"] = function (request, data, root) {
  var i998 = root || request.c( 'GuestColorSpawnData' )
  var i999 = data
  i998.color = i999[0]
  i998.count = i999[1]
  return i998
}

Deserializers["CarLineManager"] = function (request, data, root) {
  var i1000 = root || request.c( 'CarLineManager' )
  var i1001 = data
  return i1000
}

Deserializers["GuestPath"] = function (request, data, root) {
  var i1002 = root || request.c( 'GuestPath' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i1002.waypoints = i1004
  return i1002
}

Deserializers["ParkingSlotManager"] = function (request, data, root) {
  var i1006 = root || request.c( 'ParkingSlotManager' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1006.parkingSlots = i1008
  var i1011 = i1007[1]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1006.parkingPath = i1010
  return i1006
}

Deserializers["ParkingSlotController"] = function (request, data, root) {
  var i1014 = root || request.c( 'ParkingSlotController' )
  var i1015 = data
  i1014.isParked = !!i1015[0]
  return i1014
}

Deserializers["GuestSpawnPos"] = function (request, data, root) {
  var i1016 = root || request.c( 'GuestSpawnPos' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'guestLeftDisplayTxt')
  i1016.queueType = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1019 = data
  i1018.center = new pc.Vec3( i1019[0], i1019[1], i1019[2] )
  i1018.radius = i1019[3]
  i1018.enabled = !!i1019[4]
  i1018.isTrigger = !!i1019[5]
  request.r(i1019[6], i1019[7], 0, i1018, 'material')
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1021 = data
  i1020.pivot = new pc.Vec2( i1021[0], i1021[1] )
  i1020.anchorMin = new pc.Vec2( i1021[2], i1021[3] )
  i1020.anchorMax = new pc.Vec2( i1021[4], i1021[5] )
  i1020.sizeDelta = new pc.Vec2( i1021[6], i1021[7] )
  i1020.anchoredPosition3D = new pc.Vec3( i1021[8], i1021[9], i1021[10] )
  i1020.rotation = new pc.Quat(i1021[11], i1021[12], i1021[13], i1021[14])
  i1020.scale = new pc.Vec3( i1021[15], i1021[16], i1021[17] )
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1023 = data
  i1022.planeDistance = i1023[0]
  i1022.referencePixelsPerUnit = i1023[1]
  i1022.isFallbackOverlay = !!i1023[2]
  i1022.renderMode = i1023[3]
  i1022.renderOrder = i1023[4]
  i1022.sortingLayerName = i1023[5]
  i1022.sortingOrder = i1023[6]
  i1022.scaleFactor = i1023[7]
  request.r(i1023[8], i1023[9], 0, i1022, 'worldCamera')
  i1022.overrideSorting = !!i1023[10]
  i1022.pixelPerfect = !!i1023[11]
  i1022.targetDisplay = i1023[12]
  i1022.overridePixelPerfect = !!i1023[13]
  i1022.enabled = !!i1023[14]
  return i1022
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1025 = data
  i1024.m_UiScaleMode = i1025[0]
  i1024.m_ReferencePixelsPerUnit = i1025[1]
  i1024.m_ScaleFactor = i1025[2]
  i1024.m_ReferenceResolution = new pc.Vec2( i1025[3], i1025[4] )
  i1024.m_ScreenMatchMode = i1025[5]
  i1024.m_MatchWidthOrHeight = i1025[6]
  i1024.m_PhysicalUnit = i1025[7]
  i1024.m_FallbackScreenDPI = i1025[8]
  i1024.m_DefaultSpriteDPI = i1025[9]
  i1024.m_DynamicPixelsPerUnit = i1025[10]
  i1024.m_PresetInfoIsWorld = !!i1025[11]
  return i1024
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1027 = data
  i1026.m_IgnoreReversedGraphics = !!i1027[0]
  i1026.m_BlockingObjects = i1027[1]
  i1026.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1027[2] )
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1029 = data
  i1028.cullTransparentMesh = !!i1029[0]
  return i1028
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1031 = data
  i1030.m_hasFontAssetChanged = !!i1031[0]
  request.r(i1031[1], i1031[2], 0, i1030, 'm_baseMaterial')
  i1030.m_maskOffset = new pc.Vec4( i1031[3], i1031[4], i1031[5], i1031[6] )
  i1030.m_text = i1031[7]
  i1030.m_isRightToLeft = !!i1031[8]
  request.r(i1031[9], i1031[10], 0, i1030, 'm_fontAsset')
  request.r(i1031[11], i1031[12], 0, i1030, 'm_sharedMaterial')
  var i1033 = i1031[13]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 2, i1032, '')
  }
  i1030.m_fontSharedMaterials = i1032
  request.r(i1031[14], i1031[15], 0, i1030, 'm_fontMaterial')
  var i1035 = i1031[16]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 2, i1034, '')
  }
  i1030.m_fontMaterials = i1034
  i1030.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1031[17], i1031[18], i1031[19], i1031[20])
  i1030.m_fontColor = new pc.Color(i1031[21], i1031[22], i1031[23], i1031[24])
  i1030.m_enableVertexGradient = !!i1031[25]
  i1030.m_colorMode = i1031[26]
  i1030.m_fontColorGradient = request.d('TMPro.VertexGradient', i1031[27], i1030.m_fontColorGradient)
  request.r(i1031[28], i1031[29], 0, i1030, 'm_fontColorGradientPreset')
  request.r(i1031[30], i1031[31], 0, i1030, 'm_spriteAsset')
  i1030.m_tintAllSprites = !!i1031[32]
  request.r(i1031[33], i1031[34], 0, i1030, 'm_StyleSheet')
  i1030.m_TextStyleHashCode = i1031[35]
  i1030.m_overrideHtmlColors = !!i1031[36]
  i1030.m_faceColor = UnityEngine.Color32.ConstructColor(i1031[37], i1031[38], i1031[39], i1031[40])
  i1030.m_fontSize = i1031[41]
  i1030.m_fontSizeBase = i1031[42]
  i1030.m_fontWeight = i1031[43]
  i1030.m_enableAutoSizing = !!i1031[44]
  i1030.m_fontSizeMin = i1031[45]
  i1030.m_fontSizeMax = i1031[46]
  i1030.m_fontStyle = i1031[47]
  i1030.m_HorizontalAlignment = i1031[48]
  i1030.m_VerticalAlignment = i1031[49]
  i1030.m_textAlignment = i1031[50]
  i1030.m_characterSpacing = i1031[51]
  i1030.m_characterHorizontalScale = i1031[52]
  i1030.m_wordSpacing = i1031[53]
  i1030.m_lineSpacing = i1031[54]
  i1030.m_lineSpacingMax = i1031[55]
  i1030.m_paragraphSpacing = i1031[56]
  i1030.m_charWidthMaxAdj = i1031[57]
  i1030.m_TextWrappingMode = i1031[58]
  i1030.m_wordWrappingRatios = i1031[59]
  i1030.m_overflowMode = i1031[60]
  request.r(i1031[61], i1031[62], 0, i1030, 'm_linkedTextComponent')
  request.r(i1031[63], i1031[64], 0, i1030, 'parentLinkedComponent')
  i1030.m_enableKerning = !!i1031[65]
  var i1037 = i1031[66]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.add(i1037[i + 0]);
  }
  i1030.m_ActiveFontFeatures = i1036
  i1030.m_enableExtraPadding = !!i1031[67]
  i1030.checkPaddingRequired = !!i1031[68]
  i1030.m_isRichText = !!i1031[69]
  i1030.m_parseCtrlCharacters = !!i1031[70]
  i1030.m_isOrthographic = !!i1031[71]
  i1030.m_isCullingEnabled = !!i1031[72]
  i1030.m_horizontalMapping = i1031[73]
  i1030.m_verticalMapping = i1031[74]
  i1030.m_uvLineOffset = i1031[75]
  i1030.m_geometrySortingOrder = i1031[76]
  i1030.m_IsTextObjectScaleStatic = !!i1031[77]
  i1030.m_VertexBufferAutoSizeReduction = !!i1031[78]
  i1030.m_useMaxVisibleDescender = !!i1031[79]
  i1030.m_pageToDisplay = i1031[80]
  i1030.m_margin = new pc.Vec4( i1031[81], i1031[82], i1031[83], i1031[84] )
  i1030.m_isUsingLegacyAnimationComponent = !!i1031[85]
  i1030.m_isVolumetricText = !!i1031[86]
  request.r(i1031[87], i1031[88], 0, i1030, 'm_Material')
  i1030.m_EmojiFallbackSupport = !!i1031[89]
  i1030.m_Maskable = !!i1031[90]
  i1030.m_Color = new pc.Color(i1031[91], i1031[92], i1031[93], i1031[94])
  i1030.m_RaycastTarget = !!i1031[95]
  i1030.m_RaycastPadding = new pc.Vec4( i1031[96], i1031[97], i1031[98], i1031[99] )
  return i1030
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.VertexGradient' )
  var i1039 = data
  i1038.topLeft = new pc.Color(i1039[0], i1039[1], i1039[2], i1039[3])
  i1038.topRight = new pc.Color(i1039[4], i1039[5], i1039[6], i1039[7])
  i1038.bottomLeft = new pc.Color(i1039[8], i1039[9], i1039[10], i1039[11])
  i1038.bottomRight = new pc.Color(i1039[12], i1039[13], i1039[14], i1039[15])
  return i1038
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1043 = data
  i1042.m_HorizontalFit = i1043[0]
  i1042.m_VerticalFit = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1045 = data
  i1044.ambientIntensity = i1045[0]
  i1044.reflectionIntensity = i1045[1]
  i1044.ambientMode = i1045[2]
  i1044.ambientLight = new pc.Color(i1045[3], i1045[4], i1045[5], i1045[6])
  i1044.ambientSkyColor = new pc.Color(i1045[7], i1045[8], i1045[9], i1045[10])
  i1044.ambientGroundColor = new pc.Color(i1045[11], i1045[12], i1045[13], i1045[14])
  i1044.ambientEquatorColor = new pc.Color(i1045[15], i1045[16], i1045[17], i1045[18])
  i1044.fogColor = new pc.Color(i1045[19], i1045[20], i1045[21], i1045[22])
  i1044.fogEndDistance = i1045[23]
  i1044.fogStartDistance = i1045[24]
  i1044.fogDensity = i1045[25]
  i1044.fog = !!i1045[26]
  request.r(i1045[27], i1045[28], 0, i1044, 'skybox')
  i1044.fogMode = i1045[29]
  var i1047 = i1045[30]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1047[i + 0]) );
  }
  i1044.lightmaps = i1046
  i1044.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1045[31], i1044.lightProbes)
  i1044.lightmapsMode = i1045[32]
  i1044.mixedBakeMode = i1045[33]
  i1044.environmentLightingMode = i1045[34]
  i1044.ambientProbe = new pc.SphericalHarmonicsL2(i1045[35])
  request.r(i1045[36], i1045[37], 0, i1044, 'customReflection')
  request.r(i1045[38], i1045[39], 0, i1044, 'defaultReflection')
  i1044.defaultReflectionMode = i1045[40]
  i1044.defaultReflectionResolution = i1045[41]
  i1044.sunLightObjectId = i1045[42]
  i1044.pixelLightCount = i1045[43]
  i1044.defaultReflectionHDR = !!i1045[44]
  i1044.hasLightDataAsset = !!i1045[45]
  i1044.hasManualGenerate = !!i1045[46]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'lightmapColor')
  request.r(i1051[2], i1051[3], 0, i1050, 'lightmapDirection')
  request.r(i1051[4], i1051[5], 0, i1050, 'shadowMask')
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1052 = root || new UnityEngine.LightProbes()
  var i1053 = data
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1061 = data
  i1060.AdditionalLightsRenderingMode = i1061[0]
  i1060.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1061[1], i1060.LightRenderingMode)
  i1060.MainLightRenderingModeValue = i1061[2]
  i1060.SupportsMainLightShadows = !!i1061[3]
  i1060.MixedLightingSupported = !!i1061[4]
  i1060.MainLightShadowmapResolutionValue = i1061[5]
  i1060.SupportsSoftShadows = !!i1061[6]
  i1060.SoftShadowQualityValue = i1061[7]
  i1060.ShadowDistance = i1061[8]
  i1060.ShadowCascadeCount = i1061[9]
  i1060.Cascade2Split = i1061[10]
  i1060.Cascade3Split = new pc.Vec2( i1061[11], i1061[12] )
  i1060.Cascade4Split = new pc.Vec3( i1061[13], i1061[14], i1061[15] )
  i1060.CascadeBorder = i1061[16]
  i1060.ShadowDepthBias = i1061[17]
  i1060.ShadowNormalBias = i1061[18]
  i1060.RequireDepthTexture = !!i1061[19]
  i1060.RequireOpaqueTexture = !!i1061[20]
  i1060.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i1061[21], i1060.scriptableRendererData)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1063 = data
  i1062.Disabled = i1063[0]
  i1062.PerVertex = i1063[1]
  i1062.PerPixel = i1063[2]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i1065 = data
  i1064.opaqueLayerMask = i1065[0]
  i1064.transparentLayerMask = i1065[1]
  var i1067 = i1065[2]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i1067[i + 0]) );
  }
  i1064.RenderObjectsFeatures = i1066
  i1064.name = i1065[3]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i1071 = data
  i1070.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i1071[0], i1070.settings)
  i1070.name = i1071[1]
  i1070.typeName = i1071[2]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1075[i + 0]));
  }
  i1072.ShaderCompilationErrors = i1074
  i1072.name = i1073[1]
  i1072.guid = i1073[2]
  var i1077 = i1073[3]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( i1077[i + 0] );
  }
  i1072.shaderDefinedKeywords = i1076
  var i1079 = i1073[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1079[i + 0]) );
  }
  i1072.passes = i1078
  var i1081 = i1073[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1081[i + 0]) );
  }
  i1072.usePasses = i1080
  var i1083 = i1073[6]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1083[i + 0]) );
  }
  i1072.defaultParameterValues = i1082
  request.r(i1073[7], i1073[8], 0, i1072, 'unityFallbackShader')
  i1072.readDepth = !!i1073[9]
  i1072.hasDepthOnlyPass = !!i1073[10]
  i1072.isCreatedByShaderGraph = !!i1073[11]
  i1072.disableBatching = !!i1073[12]
  i1072.compiled = !!i1073[13]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1087 = data
  i1086.shaderName = i1087[0]
  i1086.errorMessage = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1092 = root || new pc.UnityShaderPass()
  var i1093 = data
  i1092.id = i1093[0]
  i1092.subShaderIndex = i1093[1]
  i1092.name = i1093[2]
  i1092.passType = i1093[3]
  i1092.grabPassTextureName = i1093[4]
  i1092.usePass = !!i1093[5]
  i1092.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[6], i1092.zTest)
  i1092.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[7], i1092.zWrite)
  i1092.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[8], i1092.culling)
  i1092.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1093[9], i1092.blending)
  i1092.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1093[10], i1092.alphaBlending)
  i1092.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[11], i1092.colorWriteMask)
  i1092.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[12], i1092.offsetUnits)
  i1092.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[13], i1092.offsetFactor)
  i1092.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[14], i1092.stencilRef)
  i1092.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[15], i1092.stencilReadMask)
  i1092.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1093[16], i1092.stencilWriteMask)
  i1092.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1093[17], i1092.stencilOp)
  i1092.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1093[18], i1092.stencilOpFront)
  i1092.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1093[19], i1092.stencilOpBack)
  var i1095 = i1093[20]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1095[i + 0]) );
  }
  i1092.tags = i1094
  var i1097 = i1093[21]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( i1097[i + 0] );
  }
  i1092.passDefinedKeywords = i1096
  var i1099 = i1093[22]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1099[i + 0]) );
  }
  i1092.passDefinedKeywordGroups = i1098
  var i1101 = i1093[23]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1101[i + 0]) );
  }
  i1092.variants = i1100
  var i1103 = i1093[24]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1103[i + 0]) );
  }
  i1092.excludedVariants = i1102
  i1092.hasDepthReader = !!i1093[25]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1105 = data
  i1104.val = i1105[0]
  i1104.name = i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1107 = data
  i1106.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[0], i1106.src)
  i1106.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[1], i1106.dst)
  i1106.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[2], i1106.op)
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1109 = data
  i1108.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[0], i1108.pass)
  i1108.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[1], i1108.fail)
  i1108.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[2], i1108.zFail)
  i1108.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[3], i1108.comp)
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1113 = data
  i1112.name = i1113[0]
  i1112.value = i1113[1]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1117 = data
  var i1119 = i1117[0]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1116.keywords = i1118
  i1116.hasDiscard = !!i1117[1]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1123 = data
  i1122.passId = i1123[0]
  i1122.subShaderIndex = i1123[1]
  var i1125 = i1123[2]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1122.keywords = i1124
  i1122.vertexProgram = i1123[3]
  i1122.fragmentProgram = i1123[4]
  i1122.exportedForWebGl2 = !!i1123[5]
  i1122.readDepth = !!i1123[6]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'shader')
  i1128.pass = i1129[2]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.type = i1133[1]
  i1132.value = new pc.Vec4( i1133[2], i1133[3], i1133[4], i1133[5] )
  i1132.textureValue = i1133[6]
  i1132.shaderPropertyFlag = i1133[7]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1135 = data
  i1134.name = i1135[0]
  request.r(i1135[1], i1135[2], 0, i1134, 'texture')
  i1134.aabb = i1135[3]
  i1134.vertices = i1135[4]
  i1134.triangles = i1135[5]
  i1134.textureRect = UnityEngine.Rect.MinMaxRect(i1135[6], i1135[7], i1135[8], i1135[9])
  i1134.packedRect = UnityEngine.Rect.MinMaxRect(i1135[10], i1135[11], i1135[12], i1135[13])
  i1134.border = new pc.Vec4( i1135[14], i1135[15], i1135[16], i1135[17] )
  i1134.transparency = i1135[18]
  i1134.bounds = i1135[19]
  i1134.pixelsPerUnit = i1135[20]
  i1134.textureWidth = i1135[21]
  i1134.textureHeight = i1135[22]
  i1134.nativeSize = new pc.Vec2( i1135[23], i1135[24] )
  i1134.pivot = new pc.Vec2( i1135[25], i1135[26] )
  i1134.textureRectOffset = new pc.Vec2( i1135[27], i1135[28] )
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.wrapMode = i1137[1]
  i1136.isLooping = !!i1137[2]
  i1136.length = i1137[3]
  var i1139 = i1137[4]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1139[i + 0]) );
  }
  i1136.curves = i1138
  var i1141 = i1137[5]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1141[i + 0]) );
  }
  i1136.events = i1140
  i1136.halfPrecision = !!i1137[6]
  i1136._frameRate = i1137[7]
  i1136.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1137[8], i1136.localBounds)
  i1136.hasMuscleCurves = !!i1137[9]
  var i1143 = i1137[10]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1136.clipMuscleConstant = i1142
  i1136.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1137[11], i1136.clipBindingConstant)
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1147 = data
  i1146.path = i1147[0]
  i1146.hash = i1147[1]
  i1146.componentType = i1147[2]
  i1146.property = i1147[3]
  i1146.keys = i1147[4]
  var i1149 = i1147[5]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1149[i + 0]) );
  }
  i1146.objectReferenceKeys = i1148
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1153 = data
  i1152.time = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'value')
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1157 = data
  i1156.functionName = i1157[0]
  i1156.floatParameter = i1157[1]
  i1156.intParameter = i1157[2]
  i1156.stringParameter = i1157[3]
  request.r(i1157[4], i1157[5], 0, i1156, 'objectReferenceParameter')
  i1156.time = i1157[6]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1159 = data
  i1158.center = new pc.Vec3( i1159[0], i1159[1], i1159[2] )
  i1158.extends = new pc.Vec3( i1159[3], i1159[4], i1159[5] )
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1163 = data
  var i1165 = i1163[0]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1162.genericBindings = i1164
  var i1167 = i1163[1]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( i1167[i + 0] );
  }
  i1162.pptrCurveMapping = i1166
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.ascent = i1169[1]
  i1168.originalLineHeight = i1169[2]
  i1168.fontSize = i1169[3]
  var i1171 = i1169[4]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1171[i + 0]) );
  }
  i1168.characterInfo = i1170
  request.r(i1169[5], i1169[6], 0, i1168, 'texture')
  i1168.originalFontSize = i1169[7]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1175 = data
  i1174.index = i1175[0]
  i1174.advance = i1175[1]
  i1174.bearing = i1175[2]
  i1174.glyphWidth = i1175[3]
  i1174.glyphHeight = i1175[4]
  i1174.minX = i1175[5]
  i1174.maxX = i1175[6]
  i1174.minY = i1175[7]
  i1174.maxY = i1175[8]
  i1174.uvBottomLeftX = i1175[9]
  i1174.uvBottomLeftY = i1175[10]
  i1174.uvBottomRightX = i1175[11]
  i1174.uvBottomRightY = i1175[12]
  i1174.uvTopLeftX = i1175[13]
  i1174.uvTopLeftY = i1175[14]
  i1174.uvTopRightX = i1175[15]
  i1174.uvTopRightY = i1175[16]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1177 = data
  i1176.name = i1177[0]
  var i1179 = i1177[1]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1179[i + 0]) );
  }
  i1176.layers = i1178
  var i1181 = i1177[2]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1181[i + 0]) );
  }
  i1176.parameters = i1180
  i1176.animationClips = i1177[3]
  i1176.avatarUnsupported = i1177[4]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1185 = data
  i1184.name = i1185[0]
  i1184.defaultWeight = i1185[1]
  i1184.blendingMode = i1185[2]
  i1184.avatarMask = i1185[3]
  i1184.syncedLayerIndex = i1185[4]
  i1184.syncedLayerAffectsTiming = !!i1185[5]
  i1184.syncedLayers = i1185[6]
  i1184.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1185[7], i1184.stateMachine)
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1187 = data
  i1186.id = i1187[0]
  i1186.name = i1187[1]
  i1186.path = i1187[2]
  var i1189 = i1187[3]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1189[i + 0]) );
  }
  i1186.states = i1188
  var i1191 = i1187[4]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1191[i + 0]) );
  }
  i1186.machines = i1190
  var i1193 = i1187[5]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1193[i + 0]) );
  }
  i1186.entryStateTransitions = i1192
  var i1195 = i1187[6]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1195[i + 0]) );
  }
  i1186.exitStateTransitions = i1194
  var i1197 = i1187[7]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1197[i + 0]) );
  }
  i1186.anyStateTransitions = i1196
  i1186.defaultStateId = i1187[8]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1201 = data
  i1200.id = i1201[0]
  i1200.name = i1201[1]
  i1200.cycleOffset = i1201[2]
  i1200.cycleOffsetParameter = i1201[3]
  i1200.cycleOffsetParameterActive = !!i1201[4]
  i1200.mirror = !!i1201[5]
  i1200.mirrorParameter = i1201[6]
  i1200.mirrorParameterActive = !!i1201[7]
  i1200.motionId = i1201[8]
  i1200.nameHash = i1201[9]
  i1200.fullPathHash = i1201[10]
  i1200.speed = i1201[11]
  i1200.speedParameter = i1201[12]
  i1200.speedParameterActive = !!i1201[13]
  i1200.tag = i1201[14]
  i1200.tagHash = i1201[15]
  i1200.writeDefaultValues = !!i1201[16]
  var i1203 = i1201[17]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 2, i1202, '')
  }
  i1200.behaviours = i1202
  var i1205 = i1201[18]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1205[i + 0]) );
  }
  i1200.transitions = i1204
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1211 = data
  i1210.fullPath = i1211[0]
  i1210.canTransitionToSelf = !!i1211[1]
  i1210.duration = i1211[2]
  i1210.exitTime = i1211[3]
  i1210.hasExitTime = !!i1211[4]
  i1210.hasFixedDuration = !!i1211[5]
  i1210.interruptionSource = i1211[6]
  i1210.offset = i1211[7]
  i1210.orderedInterruption = !!i1211[8]
  i1210.destinationStateId = i1211[9]
  i1210.isExit = !!i1211[10]
  i1210.mute = !!i1211[11]
  i1210.solo = !!i1211[12]
  var i1213 = i1211[13]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1213[i + 0]) );
  }
  i1210.conditions = i1212
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1217 = data
  i1216.mode = i1217[0]
  i1216.parameter = i1217[1]
  i1216.threshold = i1217[2]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1223 = data
  i1222.destinationStateId = i1223[0]
  i1222.isExit = !!i1223[1]
  i1222.mute = !!i1223[2]
  i1222.solo = !!i1223[3]
  var i1225 = i1223[4]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1225[i + 0]) );
  }
  i1222.conditions = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1229 = data
  i1228.defaultBool = !!i1229[0]
  i1228.defaultFloat = i1229[1]
  i1228.defaultInt = i1229[2]
  i1228.name = i1229[3]
  i1228.nameHash = i1229[4]
  i1228.type = i1229[5]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.bytes64 = i1231[1]
  i1230.data = i1231[2]
  return i1230
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1233 = data
  var i1235 = i1233[0]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 1, i1234, '')
  }
  i1232.components = i1234
  return i1232
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1239 = data
  i1238.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1239[0], i1238.mode)
  i1238.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1239[1], i1238.neutralHDRRangeReductionMode)
  i1238.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1239[2], i1238.acesPreset)
  i1238.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1239[3], i1238.hueShiftAmount)
  i1238.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1239[4], i1238.detectPaperWhite)
  i1238.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1239[5], i1238.paperWhite)
  i1238.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1239[6], i1238.detectBrightnessLimits)
  i1238.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1239[7], i1238.minNits)
  i1238.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1239[8], i1238.maxNits)
  i1238.active = !!i1239[9]
  return i1238
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1241 = data
  i1240.m_Value = i1241[0]
  i1240.m_OverrideState = !!i1241[1]
  return i1240
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1243 = data
  i1242.m_Value = i1243[0]
  i1242.m_OverrideState = !!i1243[1]
  return i1242
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1245 = data
  i1244.m_Value = i1245[0]
  i1244.m_OverrideState = !!i1245[1]
  return i1244
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1247 = data
  i1246.m_Value = i1247[0]
  i1246.m_OverrideState = !!i1247[1]
  return i1246
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1249 = data
  i1248.m_Value = !!i1249[0]
  i1248.m_OverrideState = !!i1249[1]
  return i1248
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1251 = data
  i1250.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1251[0], i1250.skipIterations)
  i1250.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1251[1], i1250.threshold)
  i1250.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1251[2], i1250.intensity)
  i1250.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1251[3], i1250.scatter)
  i1250.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1251[4], i1250.clamp)
  i1250.tint = request.d('UnityEngine.Rendering.ColorParameter', i1251[5], i1250.tint)
  i1250.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1251[6], i1250.highQualityFiltering)
  i1250.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1251[7], i1250.downscale)
  i1250.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1251[8], i1250.maxIterations)
  i1250.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1251[9], i1250.dirtTexture)
  i1250.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1251[10], i1250.dirtIntensity)
  i1250.active = !!i1251[11]
  return i1250
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1253 = data
  i1252.m_Value = i1253[0]
  i1252.m_OverrideState = !!i1253[1]
  return i1252
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1255 = data
  i1254.m_Value = i1255[0]
  i1254.m_OverrideState = !!i1255[1]
  return i1254
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1257 = data
  i1256.m_Value = new pc.Color(i1257[0], i1257[1], i1257[2], i1257[3])
  i1256.m_OverrideState = !!i1257[4]
  return i1256
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1259 = data
  i1258.m_Value = i1259[0]
  i1258.m_OverrideState = !!i1259[1]
  return i1258
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1261 = data
  i1260.dimension = i1261[0]
  request.r(i1261[1], i1261[2], 0, i1260, 'm_Value')
  i1260.m_OverrideState = !!i1261[3]
  return i1260
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i1263 = data
  i1262.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i1263[0], i1262.mode)
  i1262.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i1263[1], i1262.quality)
  i1262.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1263[2], i1262.intensity)
  i1262.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1263[3], i1262.clamp)
  i1262.active = !!i1263[4]
  return i1262
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i1265 = data
  i1264.m_Value = i1265[0]
  i1264.m_OverrideState = !!i1265[1]
  return i1264
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i1267 = data
  i1266.m_Value = i1267[0]
  i1266.m_OverrideState = !!i1267[1]
  return i1266
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1269 = data
  i1268.color = request.d('UnityEngine.Rendering.ColorParameter', i1269[0], i1268.color)
  i1268.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1269[1], i1268.center)
  i1268.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1269[2], i1268.intensity)
  i1268.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1269[3], i1268.smoothness)
  i1268.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1269[4], i1268.rounded)
  i1268.active = !!i1269[5]
  return i1268
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1271 = data
  i1270.m_Value = new pc.Vec2( i1271[0], i1271[1] )
  i1270.m_OverrideState = !!i1271[2]
  return i1270
}

Deserializers["ColorPalette"] = function (request, data, root) {
  var i1272 = root || request.c( 'ColorPalette' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('ColorPalette+ColorEntry', i1275[i + 0]) );
  }
  i1272.entries = i1274
  return i1272
}

Deserializers["ColorPalette+ColorEntry"] = function (request, data, root) {
  var i1278 = root || request.c( 'ColorPalette+ColorEntry' )
  var i1279 = data
  i1278.color = i1279[0]
  request.r(i1279[1], i1279[2], 0, i1278, 'carMaterial')
  request.r(i1279[3], i1279[4], 0, i1278, 'carOutlineMaterial')
  request.r(i1279[5], i1279[6], 0, i1278, 'humanMaterial')
  return i1278
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1281 = data
  i1280.normalStyle = i1281[0]
  i1280.normalSpacingOffset = i1281[1]
  i1280.boldStyle = i1281[2]
  i1280.boldSpacing = i1281[3]
  i1280.italicStyle = i1281[4]
  i1280.tabSize = i1281[5]
  request.r(i1281[6], i1281[7], 0, i1280, 'atlas')
  i1280.m_SourceFontFileGUID = i1281[8]
  i1280.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1281[9], i1280.m_CreationSettings)
  request.r(i1281[10], i1281[11], 0, i1280, 'm_SourceFontFile')
  i1280.m_SourceFontFilePath = i1281[12]
  i1280.m_AtlasPopulationMode = i1281[13]
  i1280.InternalDynamicOS = !!i1281[14]
  var i1283 = i1281[15]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('UnityEngine.TextCore.Glyph', i1283[i + 0]));
  }
  i1280.m_GlyphTable = i1282
  var i1285 = i1281[16]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('TMPro.TMP_Character', i1285[i + 0]));
  }
  i1280.m_CharacterTable = i1284
  var i1287 = i1281[17]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 2, i1286, '')
  }
  i1280.m_AtlasTextures = i1286
  i1280.m_AtlasTextureIndex = i1281[18]
  i1280.m_IsMultiAtlasTexturesEnabled = !!i1281[19]
  i1280.m_GetFontFeatures = !!i1281[20]
  i1280.m_ClearDynamicDataOnBuild = !!i1281[21]
  i1280.m_AtlasWidth = i1281[22]
  i1280.m_AtlasHeight = i1281[23]
  i1280.m_AtlasPadding = i1281[24]
  i1280.m_AtlasRenderMode = i1281[25]
  var i1289 = i1281[26]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.add(request.d('UnityEngine.TextCore.GlyphRect', i1289[i + 0]));
  }
  i1280.m_UsedGlyphRects = i1288
  var i1291 = i1281[27]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('UnityEngine.TextCore.GlyphRect', i1291[i + 0]));
  }
  i1280.m_FreeGlyphRects = i1290
  i1280.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1281[28], i1280.m_FontFeatureTable)
  i1280.m_ShouldReimportFontFeatures = !!i1281[29]
  var i1293 = i1281[30]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 1, i1292, '')
  }
  i1280.m_FallbackFontAssetTable = i1292
  var i1295 = i1281[31]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('TMPro.TMP_FontWeightPair', i1295[i + 0]) );
  }
  i1280.m_FontWeightTable = i1294
  var i1297 = i1281[32]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('TMPro.TMP_FontWeightPair', i1297[i + 0]) );
  }
  i1280.fontWeights = i1296
  i1280.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1281[33], i1280.m_fontInfo)
  var i1299 = i1281[34]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.TMP_Glyph', i1299[i + 0]));
  }
  i1280.m_glyphInfoList = i1298
  i1280.m_KerningTable = request.d('TMPro.KerningTable', i1281[35], i1280.m_KerningTable)
  var i1301 = i1281[36]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 1, i1300, '')
  }
  i1280.fallbackFontAssets = i1300
  i1280.m_Version = i1281[37]
  i1280.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1281[38], i1280.m_FaceInfo)
  request.r(i1281[39], i1281[40], 0, i1280, 'm_Material')
  return i1280
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1303 = data
  i1302.sourceFontFileName = i1303[0]
  i1302.sourceFontFileGUID = i1303[1]
  i1302.faceIndex = i1303[2]
  i1302.pointSizeSamplingMode = i1303[3]
  i1302.pointSize = i1303[4]
  i1302.padding = i1303[5]
  i1302.paddingMode = i1303[6]
  i1302.packingMode = i1303[7]
  i1302.atlasWidth = i1303[8]
  i1302.atlasHeight = i1303[9]
  i1302.characterSetSelectionMode = i1303[10]
  i1302.characterSequence = i1303[11]
  i1302.referencedFontAssetGUID = i1303[12]
  i1302.referencedTextAssetGUID = i1303[13]
  i1302.fontStyle = i1303[14]
  i1302.fontStyleModifier = i1303[15]
  i1302.renderMode = i1303[16]
  i1302.includeFontFeatures = !!i1303[17]
  return i1302
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1307 = data
  i1306.m_Index = i1307[0]
  i1306.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1307[1], i1306.m_Metrics)
  i1306.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1307[2], i1306.m_GlyphRect)
  i1306.m_Scale = i1307[3]
  i1306.m_AtlasIndex = i1307[4]
  i1306.m_ClassDefinitionType = i1307[5]
  return i1306
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1309 = data
  i1308.m_Width = i1309[0]
  i1308.m_Height = i1309[1]
  i1308.m_HorizontalBearingX = i1309[2]
  i1308.m_HorizontalBearingY = i1309[3]
  i1308.m_HorizontalAdvance = i1309[4]
  return i1308
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1311 = data
  i1310.m_X = i1311[0]
  i1310.m_Y = i1311[1]
  i1310.m_Width = i1311[2]
  i1310.m_Height = i1311[3]
  return i1310
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_Character' )
  var i1315 = data
  i1314.m_ElementType = i1315[0]
  i1314.m_Unicode = i1315[1]
  i1314.m_GlyphIndex = i1315[2]
  i1314.m_Scale = i1315[3]
  return i1314
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1321 = data
  var i1323 = i1321[0]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('TMPro.MultipleSubstitutionRecord', i1323[i + 0]));
  }
  i1320.m_MultipleSubstitutionRecords = i1322
  var i1325 = i1321[1]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('TMPro.LigatureSubstitutionRecord', i1325[i + 0]));
  }
  i1320.m_LigatureSubstitutionRecords = i1324
  var i1327 = i1321[2]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1327[i + 0]));
  }
  i1320.m_GlyphPairAdjustmentRecords = i1326
  var i1329 = i1321[3]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1329[i + 0]));
  }
  i1320.m_MarkToBaseAdjustmentRecords = i1328
  var i1331 = i1321[4]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1331[i + 0]));
  }
  i1320.m_MarkToMarkAdjustmentRecords = i1330
  return i1320
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1335 = data
  i1334.m_TargetGlyphID = i1335[0]
  i1334.m_SubstituteGlyphIDs = i1335[1]
  return i1334
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1339 = data
  i1338.m_ComponentGlyphIDs = i1339[0]
  i1338.m_LigatureGlyphID = i1339[1]
  return i1338
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1342 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1343 = data
  i1342.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1343[0], i1342.m_FirstAdjustmentRecord)
  i1342.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1343[1], i1342.m_SecondAdjustmentRecord)
  i1342.m_FeatureLookupFlags = i1343[2]
  return i1342
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1344 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1345 = data
  i1344.m_GlyphIndex = i1345[0]
  i1344.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1345[1], i1344.m_GlyphValueRecord)
  return i1344
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1347 = data
  i1346.m_XPlacement = i1347[0]
  i1346.m_YPlacement = i1347[1]
  i1346.m_XAdvance = i1347[2]
  i1346.m_YAdvance = i1347[3]
  return i1346
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1351 = data
  i1350.m_BaseGlyphID = i1351[0]
  i1350.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1351[1], i1350.m_BaseGlyphAnchorPoint)
  i1350.m_MarkGlyphID = i1351[2]
  i1350.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1351[3], i1350.m_MarkPositionAdjustment)
  return i1350
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1355 = data
  i1354.m_BaseMarkGlyphID = i1355[0]
  i1354.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1355[1], i1354.m_BaseMarkGlyphAnchorPoint)
  i1354.m_CombiningMarkGlyphID = i1355[2]
  i1354.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1355[3], i1354.m_CombiningMarkPositionAdjustment)
  return i1354
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'regularTypeface')
  request.r(i1361[2], i1361[3], 0, i1360, 'italicTypeface')
  return i1360
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1363 = data
  i1362.Name = i1363[0]
  i1362.PointSize = i1363[1]
  i1362.Scale = i1363[2]
  i1362.CharacterCount = i1363[3]
  i1362.LineHeight = i1363[4]
  i1362.Baseline = i1363[5]
  i1362.Ascender = i1363[6]
  i1362.CapHeight = i1363[7]
  i1362.Descender = i1363[8]
  i1362.CenterLine = i1363[9]
  i1362.SuperscriptOffset = i1363[10]
  i1362.SubscriptOffset = i1363[11]
  i1362.SubSize = i1363[12]
  i1362.Underline = i1363[13]
  i1362.UnderlineThickness = i1363[14]
  i1362.strikethrough = i1363[15]
  i1362.strikethroughThickness = i1363[16]
  i1362.TabWidth = i1363[17]
  i1362.Padding = i1363[18]
  i1362.AtlasWidth = i1363[19]
  i1362.AtlasHeight = i1363[20]
  return i1362
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1367 = data
  i1366.id = i1367[0]
  i1366.x = i1367[1]
  i1366.y = i1367[2]
  i1366.width = i1367[3]
  i1366.height = i1367[4]
  i1366.xOffset = i1367[5]
  i1366.yOffset = i1367[6]
  i1366.xAdvance = i1367[7]
  i1366.scale = i1367[8]
  return i1366
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.KerningTable' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.add(request.d('TMPro.KerningPair', i1371[i + 0]));
  }
  i1368.kerningPairs = i1370
  return i1368
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1374 = root || request.c( 'TMPro.KerningPair' )
  var i1375 = data
  i1374.xOffset = i1375[0]
  i1374.m_FirstGlyph = i1375[1]
  i1374.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1375[2], i1374.m_FirstGlyphAdjustments)
  i1374.m_SecondGlyph = i1375[3]
  i1374.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1375[4], i1374.m_SecondGlyphAdjustments)
  i1374.m_IgnoreSpacingAdjustments = !!i1375[5]
  return i1374
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1376 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1377 = data
  i1376.m_FaceIndex = i1377[0]
  i1376.m_FamilyName = i1377[1]
  i1376.m_StyleName = i1377[2]
  i1376.m_PointSize = i1377[3]
  i1376.m_Scale = i1377[4]
  i1376.m_UnitsPerEM = i1377[5]
  i1376.m_LineHeight = i1377[6]
  i1376.m_AscentLine = i1377[7]
  i1376.m_CapLine = i1377[8]
  i1376.m_MeanLine = i1377[9]
  i1376.m_Baseline = i1377[10]
  i1376.m_DescentLine = i1377[11]
  i1376.m_SuperscriptOffset = i1377[12]
  i1376.m_SuperscriptSize = i1377[13]
  i1376.m_SubscriptOffset = i1377[14]
  i1376.m_SubscriptSize = i1377[15]
  i1376.m_UnderlineOffset = i1377[16]
  i1376.m_UnderlineThickness = i1377[17]
  i1376.m_StrikethroughOffset = i1377[18]
  i1376.m_StrikethroughThickness = i1377[19]
  i1376.m_TabWidth = i1377[20]
  return i1376
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1379 = data
  i1378.useSafeMode = !!i1379[0]
  i1378.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1379[1], i1378.safeModeOptions)
  i1378.timeScale = i1379[2]
  i1378.unscaledTimeScale = i1379[3]
  i1378.useSmoothDeltaTime = !!i1379[4]
  i1378.maxSmoothUnscaledTime = i1379[5]
  i1378.rewindCallbackMode = i1379[6]
  i1378.showUnityEditorReport = !!i1379[7]
  i1378.logBehaviour = i1379[8]
  i1378.drawGizmos = !!i1379[9]
  i1378.defaultRecyclable = !!i1379[10]
  i1378.defaultAutoPlay = i1379[11]
  i1378.defaultUpdateType = i1379[12]
  i1378.defaultTimeScaleIndependent = !!i1379[13]
  i1378.defaultEaseType = i1379[14]
  i1378.defaultEaseOvershootOrAmplitude = i1379[15]
  i1378.defaultEasePeriod = i1379[16]
  i1378.defaultAutoKill = !!i1379[17]
  i1378.defaultLoopType = i1379[18]
  i1378.debugMode = !!i1379[19]
  i1378.debugStoreTargetId = !!i1379[20]
  i1378.showPreviewPanel = !!i1379[21]
  i1378.storeSettingsLocation = i1379[22]
  i1378.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1379[23], i1378.modules)
  i1378.createASMDEF = !!i1379[24]
  i1378.showPlayingTweens = !!i1379[25]
  i1378.showPausedTweens = !!i1379[26]
  return i1378
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1380 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1381 = data
  i1380.logBehaviour = i1381[0]
  i1380.nestedTweenFailureBehaviour = i1381[1]
  return i1380
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1382 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1383 = data
  i1382.showPanel = !!i1383[0]
  i1382.audioEnabled = !!i1383[1]
  i1382.physicsEnabled = !!i1383[2]
  i1382.physics2DEnabled = !!i1383[3]
  i1382.spriteEnabled = !!i1383[4]
  i1382.uiEnabled = !!i1383[5]
  i1382.textMeshProEnabled = !!i1383[6]
  i1382.tk2DEnabled = !!i1383[7]
  i1382.deAudioEnabled = !!i1383[8]
  i1382.deUnityExtendedEnabled = !!i1383[9]
  i1382.epoOutlineEnabled = !!i1383[10]
  return i1382
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.TMP_Settings' )
  var i1385 = data
  i1384.assetVersion = i1385[0]
  i1384.m_TextWrappingMode = i1385[1]
  i1384.m_enableKerning = !!i1385[2]
  var i1387 = i1385[3]
  var i1386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.add(i1387[i + 0]);
  }
  i1384.m_ActiveFontFeatures = i1386
  i1384.m_enableExtraPadding = !!i1385[4]
  i1384.m_enableTintAllSprites = !!i1385[5]
  i1384.m_enableParseEscapeCharacters = !!i1385[6]
  i1384.m_EnableRaycastTarget = !!i1385[7]
  i1384.m_GetFontFeaturesAtRuntime = !!i1385[8]
  i1384.m_missingGlyphCharacter = i1385[9]
  i1384.m_ClearDynamicDataOnBuild = !!i1385[10]
  i1384.m_warningsDisabled = !!i1385[11]
  request.r(i1385[12], i1385[13], 0, i1384, 'm_defaultFontAsset')
  i1384.m_defaultFontAssetPath = i1385[14]
  i1384.m_defaultFontSize = i1385[15]
  i1384.m_defaultAutoSizeMinRatio = i1385[16]
  i1384.m_defaultAutoSizeMaxRatio = i1385[17]
  i1384.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1385[18], i1385[19] )
  i1384.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1385[20], i1385[21] )
  i1384.m_autoSizeTextContainer = !!i1385[22]
  i1384.m_IsTextObjectScaleStatic = !!i1385[23]
  var i1389 = i1385[24]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1389.length; i += 2) {
  request.r(i1389[i + 0], i1389[i + 1], 1, i1388, '')
  }
  i1384.m_fallbackFontAssets = i1388
  i1384.m_matchMaterialPreset = !!i1385[25]
  i1384.m_HideSubTextObjects = !!i1385[26]
  request.r(i1385[27], i1385[28], 0, i1384, 'm_defaultSpriteAsset')
  i1384.m_defaultSpriteAssetPath = i1385[29]
  i1384.m_enableEmojiSupport = !!i1385[30]
  i1384.m_MissingCharacterSpriteUnicode = i1385[31]
  var i1391 = i1385[32]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1391.length; i += 2) {
  request.r(i1391[i + 0], i1391[i + 1], 1, i1390, '')
  }
  i1384.m_EmojiFallbackTextAssets = i1390
  i1384.m_defaultColorGradientPresetsPath = i1385[33]
  request.r(i1385[34], i1385[35], 0, i1384, 'm_defaultStyleSheet')
  i1384.m_StyleSheetsResourcePath = i1385[36]
  request.r(i1385[37], i1385[38], 0, i1384, 'm_leadingCharacters')
  request.r(i1385[39], i1385[40], 0, i1384, 'm_followingCharacters')
  i1384.m_UseModernHangulLineBreakingRules = !!i1385[41]
  return i1384
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1394 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'spriteSheet')
  var i1397 = i1395[2]
  var i1396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.add(request.d('TMPro.TMP_Sprite', i1397[i + 0]));
  }
  i1394.spriteInfoList = i1396
  var i1399 = i1395[3]
  var i1398 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1399.length; i += 2) {
  request.r(i1399[i + 0], i1399[i + 1], 1, i1398, '')
  }
  i1394.fallbackSpriteAssets = i1398
  var i1401 = i1395[4]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.add(request.d('TMPro.TMP_SpriteCharacter', i1401[i + 0]));
  }
  i1394.m_SpriteCharacterTable = i1400
  var i1403 = i1395[5]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.add(request.d('TMPro.TMP_SpriteGlyph', i1403[i + 0]));
  }
  i1394.m_GlyphTable = i1402
  i1394.m_Version = i1395[6]
  i1394.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1395[7], i1394.m_FaceInfo)
  request.r(i1395[8], i1395[9], 0, i1394, 'm_Material')
  return i1394
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1407 = data
  i1406.name = i1407[0]
  i1406.hashCode = i1407[1]
  i1406.unicode = i1407[2]
  i1406.pivot = new pc.Vec2( i1407[3], i1407[4] )
  request.r(i1407[5], i1407[6], 0, i1406, 'sprite')
  i1406.id = i1407[7]
  i1406.x = i1407[8]
  i1406.y = i1407[9]
  i1406.width = i1407[10]
  i1406.height = i1407[11]
  i1406.xOffset = i1407[12]
  i1406.yOffset = i1407[13]
  i1406.xAdvance = i1407[14]
  i1406.scale = i1407[15]
  return i1406
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1413 = data
  i1412.m_Name = i1413[0]
  i1412.m_ElementType = i1413[1]
  i1412.m_Unicode = i1413[2]
  i1412.m_GlyphIndex = i1413[3]
  i1412.m_Scale = i1413[4]
  return i1412
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'sprite')
  i1416.m_Index = i1417[2]
  i1416.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1417[3], i1416.m_Metrics)
  i1416.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1417[4], i1416.m_GlyphRect)
  i1416.m_Scale = i1417[5]
  i1416.m_AtlasIndex = i1417[6]
  i1416.m_ClassDefinitionType = i1417[7]
  return i1416
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1418 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1419 = data
  var i1421 = i1419[0]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.add(request.d('TMPro.TMP_Style', i1421[i + 0]));
  }
  i1418.m_StyleList = i1420
  return i1418
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.TMP_Style' )
  var i1425 = data
  i1424.m_Name = i1425[0]
  i1424.m_HashCode = i1425[1]
  i1424.m_OpeningDefinition = i1425[2]
  i1424.m_ClosingDefinition = i1425[3]
  i1424.m_OpeningTagArray = i1425[4]
  i1424.m_ClosingTagArray = i1425[5]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1427 = data
  var i1429 = i1427[0]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1429[i + 0]) );
  }
  i1426.files = i1428
  i1426.componentToPrefabIds = i1427[1]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1433 = data
  i1432.path = i1433[0]
  request.r(i1433[1], i1433[2], 0, i1432, 'unityObject')
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1435 = data
  var i1437 = i1435[0]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1437[i + 0]) );
  }
  i1434.scriptsExecutionOrder = i1436
  var i1439 = i1435[1]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1439[i + 0]) );
  }
  i1434.sortingLayers = i1438
  var i1441 = i1435[2]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1441[i + 0]) );
  }
  i1434.cullingLayers = i1440
  i1434.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1435[3], i1434.timeSettings)
  i1434.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1435[4], i1434.physicsSettings)
  i1434.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1435[5], i1434.physics2DSettings)
  i1434.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1435[6], i1434.qualitySettings)
  i1434.enableRealtimeShadows = !!i1435[7]
  i1434.enableAutoInstancing = !!i1435[8]
  i1434.enableStaticBatching = !!i1435[9]
  i1434.enableDynamicBatching = !!i1435[10]
  i1434.usePreservativeDynamicBatching = !!i1435[11]
  i1434.lightmapEncodingQuality = i1435[12]
  i1434.desiredColorSpace = i1435[13]
  var i1443 = i1435[14]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( i1443[i + 0] );
  }
  i1434.allTags = i1442
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1447 = data
  i1446.name = i1447[0]
  i1446.value = i1447[1]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1451 = data
  i1450.id = i1451[0]
  i1450.name = i1451[1]
  i1450.value = i1451[2]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1455 = data
  i1454.id = i1455[0]
  i1454.name = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1457 = data
  i1456.fixedDeltaTime = i1457[0]
  i1456.maximumDeltaTime = i1457[1]
  i1456.timeScale = i1457[2]
  i1456.maximumParticleTimestep = i1457[3]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1459 = data
  i1458.gravity = new pc.Vec3( i1459[0], i1459[1], i1459[2] )
  i1458.defaultSolverIterations = i1459[3]
  i1458.bounceThreshold = i1459[4]
  i1458.autoSyncTransforms = !!i1459[5]
  i1458.autoSimulation = !!i1459[6]
  var i1461 = i1459[7]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1461[i + 0]) );
  }
  i1458.collisionMatrix = i1460
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1465 = data
  i1464.enabled = !!i1465[0]
  i1464.layerId = i1465[1]
  i1464.otherLayerId = i1465[2]
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1467 = data
  request.r(i1467[0], i1467[1], 0, i1466, 'material')
  i1466.gravity = new pc.Vec2( i1467[2], i1467[3] )
  i1466.positionIterations = i1467[4]
  i1466.velocityIterations = i1467[5]
  i1466.velocityThreshold = i1467[6]
  i1466.maxLinearCorrection = i1467[7]
  i1466.maxAngularCorrection = i1467[8]
  i1466.maxTranslationSpeed = i1467[9]
  i1466.maxRotationSpeed = i1467[10]
  i1466.baumgarteScale = i1467[11]
  i1466.baumgarteTOIScale = i1467[12]
  i1466.timeToSleep = i1467[13]
  i1466.linearSleepTolerance = i1467[14]
  i1466.angularSleepTolerance = i1467[15]
  i1466.defaultContactOffset = i1467[16]
  i1466.autoSimulation = !!i1467[17]
  i1466.queriesHitTriggers = !!i1467[18]
  i1466.queriesStartInColliders = !!i1467[19]
  i1466.callbacksOnDisable = !!i1467[20]
  i1466.reuseCollisionCallbacks = !!i1467[21]
  i1466.autoSyncTransforms = !!i1467[22]
  var i1469 = i1467[23]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1469[i + 0]) );
  }
  i1466.collisionMatrix = i1468
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1473 = data
  i1472.enabled = !!i1473[0]
  i1472.layerId = i1473[1]
  i1472.otherLayerId = i1473[2]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1475 = data
  var i1477 = i1475[0]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1477[i + 0]) );
  }
  i1474.qualityLevels = i1476
  var i1479 = i1475[1]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( i1479[i + 0] );
  }
  i1474.names = i1478
  i1474.shadows = i1475[2]
  i1474.anisotropicFiltering = i1475[3]
  i1474.antiAliasing = i1475[4]
  i1474.lodBias = i1475[5]
  i1474.shadowCascades = i1475[6]
  i1474.shadowDistance = i1475[7]
  i1474.shadowmaskMode = i1475[8]
  i1474.shadowProjection = i1475[9]
  i1474.shadowResolution = i1475[10]
  i1474.softParticles = !!i1475[11]
  i1474.softVegetation = !!i1475[12]
  i1474.activeColorSpace = i1475[13]
  i1474.desiredColorSpace = i1475[14]
  i1474.masterTextureLimit = i1475[15]
  i1474.maxQueuedFrames = i1475[16]
  i1474.particleRaycastBudget = i1475[17]
  i1474.pixelLightCount = i1475[18]
  i1474.realtimeReflectionProbes = !!i1475[19]
  i1474.shadowCascade2Split = i1475[20]
  i1474.shadowCascade4Split = new pc.Vec3( i1475[21], i1475[22], i1475[23] )
  i1474.streamingMipmapsActive = !!i1475[24]
  i1474.vSyncCount = i1475[25]
  i1474.asyncUploadBufferSize = i1475[26]
  i1474.asyncUploadTimeSlice = i1475[27]
  i1474.billboardsFaceCameraPosition = !!i1475[28]
  i1474.shadowNearPlaneOffset = i1475[29]
  i1474.streamingMipmapsMemoryBudget = i1475[30]
  i1474.maximumLODLevel = i1475[31]
  i1474.streamingMipmapsAddAllCameras = !!i1475[32]
  i1474.streamingMipmapsMaxLevelReduction = i1475[33]
  i1474.streamingMipmapsRenderersPerFrame = i1475[34]
  i1474.resolutionScalingFixedDPIFactor = i1475[35]
  i1474.streamingMipmapsMaxFileIORequests = i1475[36]
  i1474.currentQualityLevel = i1475[37]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1485 = data
  i1484.weight = i1485[0]
  i1484.vertices = i1485[1]
  i1484.normals = i1485[2]
  i1484.tangents = i1485[3]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i1487 = data
  i1486.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1487[0], i1486.Event)
  i1486.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i1487[1], i1486.filterSettings)
  i1486.overrideMaterialId = i1487[2]
  i1486.overrideMaterialPassIndex = i1487[3]
  i1486.overrideShaderId = i1487[4]
  i1486.overrideShaderPassIndex = i1487[5]
  i1486.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1487[6], i1486.overrideMode)
  i1486.overrideDepthState = !!i1487[7]
  i1486.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1487[8], i1486.depthCompareFunction)
  i1486.enableWrite = !!i1487[9]
  i1486.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i1487[10], i1486.stencilSettings)
  i1486.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i1487[11], i1486.cameraSettings)
  return i1486
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1488 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1489 = data
  i1488.m_XCoordinate = i1489[0]
  i1488.m_YCoordinate = i1489[1]
  return i1488
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1490 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1491 = data
  i1490.m_XPositionAdjustment = i1491[0]
  i1490.m_YPositionAdjustment = i1491[1]
  return i1490
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1492 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1493 = data
  i1492.xPlacement = i1493[0]
  i1492.yPlacement = i1493[1]
  i1492.xAdvance = i1493[2]
  i1492.yAdvance = i1493[3]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i1495 = data
  i1494.Value = i1495[0]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i1497 = data
  i1496.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1497[0], i1496.RenderQueueType)
  i1496.LayerMask = i1497[1]
  var i1499 = i1497[2]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( i1499[i + 0] );
  }
  i1496.PassNames = i1498
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i1501 = data
  i1500.overrideStencilState = !!i1501[0]
  i1500.stencilReference = i1501[1]
  i1500.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1501[2], i1500.stencilCompareFunctionValue)
  i1500.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1501[3], i1500.passOperationValue)
  i1500.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1501[4], i1500.failOperationValue)
  i1500.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1501[5], i1500.zFailOperationValue)
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i1503 = data
  i1502.overrideCamera = !!i1503[0]
  i1502.restoreCamera = !!i1503[1]
  i1502.offset = new pc.Vec4( i1503[2], i1503[3], i1503[4], i1503[5] )
  i1502.cameraFieldOfView = i1503[6]
  return i1502
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[19],"65":[20],"66":[8],"67":[8],"68":[8],"69":[8],"70":[8],"71":[8],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[20],"87":[5],"88":[89],"90":[89],"39":[38],"91":[92],"93":[12,5],"94":[95,96],"97":[95],"98":[92],"99":[100],"101":[39],"102":[38],"103":[20],"22":[20],"24":[23],"104":[38],"105":[5,38],"36":[38,43],"106":[38],"107":[43,38],"108":[5],"109":[43,38],"110":[38],"111":[112],"113":[112],"114":[112],"115":[38],"116":[38],"42":[39],"92":[43,38],"117":[38],"41":[39],"45":[38],"118":[38],"119":[38],"120":[38],"121":[38],"122":[38],"123":[38],"124":[38],"125":[38],"126":[43,38],"127":[38],"128":[38],"129":[38],"130":[38],"131":[43,38],"132":[38],"133":[100],"134":[100],"135":[100],"136":[100],"137":[20],"138":[20]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","CarController","UnityEngine.MeshRenderer","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","GuestController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","UnityEngine.SkinnedMeshRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","GameManager","ColorPalette","GuestPath","SpawnManager","ParkingSlotManager","CarLineManager","PlayerInteraction","GuestSpawnPos","ParkingSlotController","TMPro.TextMeshProUGUI","UnityEngine.SphereCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.UI.ContentSizeFitter","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","DAT.UI.FX.FadeEffect","UnityEngine.UI.Image","DAT.Core.Optimization.MeshCombiner","DAT.Core.Optimization.ColliderSimplifier.EdgeColliderOptimizer","UnityEngine.PolygonCollider2D","UnityEngine.EdgeCollider2D","DAT.Core.Optimization.ColliderSimplifier.PolygonColliderOptimizer","DAT.Core.Motion.UIImageSpriteAnimation","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.66f2";

Deserializers.productName = "iKame Technical Test Bus Away";

Deserializers.lunaInitializationTime = "08/07/2026 08:45:30";

Deserializers.lunaDaysRunning = "0.4";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "36645";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1842";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4112";

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

Deserializers.buildID = "7dd6c7c2-4cd6-464c-8e53-abc9efd6707c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

