var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.JointSpring' )
  var i2425 = data
  i2424.spring = i2425[0]
  i2424.damper = i2425[1]
  i2424.targetPosition = i2425[2]
  return i2424
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.JointMotor' )
  var i2427 = data
  i2426.m_TargetVelocity = i2427[0]
  i2426.m_Force = i2427[1]
  i2426.m_FreeSpin = i2427[2]
  return i2426
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.JointLimits' )
  var i2429 = data
  i2428.m_Min = i2429[0]
  i2428.m_Max = i2429[1]
  i2428.m_Bounciness = i2429[2]
  i2428.m_BounceMinVelocity = i2429[3]
  i2428.m_ContactDistance = i2429[4]
  i2428.minBounce = i2429[5]
  i2428.maxBounce = i2429[6]
  return i2428
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.JointDrive' )
  var i2431 = data
  i2430.m_PositionSpring = i2431[0]
  i2430.m_PositionDamper = i2431[1]
  i2430.m_MaximumForce = i2431[2]
  i2430.m_UseAcceleration = i2431[3]
  return i2430
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2433 = data
  i2432.m_Spring = i2433[0]
  i2432.m_Damper = i2433[1]
  return i2432
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2435 = data
  i2434.m_Limit = i2435[0]
  i2434.m_Bounciness = i2435[1]
  i2434.m_ContactDistance = i2435[2]
  return i2434
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2437 = data
  i2436.m_ExtremumSlip = i2437[0]
  i2436.m_ExtremumValue = i2437[1]
  i2436.m_AsymptoteSlip = i2437[2]
  i2436.m_AsymptoteValue = i2437[3]
  i2436.m_Stiffness = i2437[4]
  return i2436
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2438 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2439 = data
  i2438.m_LowerAngle = i2439[0]
  i2438.m_UpperAngle = i2439[1]
  return i2438
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2441 = data
  i2440.m_MotorSpeed = i2441[0]
  i2440.m_MaximumMotorTorque = i2441[1]
  return i2440
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2443 = data
  i2442.m_DampingRatio = i2443[0]
  i2442.m_Frequency = i2443[1]
  i2442.m_Angle = i2443[2]
  return i2442
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2445 = data
  i2444.m_LowerTranslation = i2445[0]
  i2444.m_UpperTranslation = i2445[1]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2447 = data
  i2446.name = i2447[0]
  i2446.width = i2447[1]
  i2446.height = i2447[2]
  i2446.mipmapCount = i2447[3]
  i2446.anisoLevel = i2447[4]
  i2446.filterMode = i2447[5]
  i2446.hdr = !!i2447[6]
  i2446.format = i2447[7]
  i2446.wrapMode = i2447[8]
  i2446.alphaIsTransparency = !!i2447[9]
  i2446.alphaSource = i2447[10]
  i2446.graphicsFormat = i2447[11]
  i2446.sRGBTexture = !!i2447[12]
  i2446.desiredColorSpace = i2447[13]
  i2446.wrapU = i2447[14]
  i2446.wrapV = i2447[15]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2448 = root || new pc.UnityMaterial()
  var i2449 = data
  i2448.name = i2449[0]
  request.r(i2449[1], i2449[2], 0, i2448, 'shader')
  i2448.renderQueue = i2449[3]
  i2448.enableInstancing = !!i2449[4]
  var i2451 = i2449[5]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2451[i + 0]) );
  }
  i2448.floatParameters = i2450
  var i2453 = i2449[6]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2453[i + 0]) );
  }
  i2448.colorParameters = i2452
  var i2455 = i2449[7]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2455[i + 0]) );
  }
  i2448.vectorParameters = i2454
  var i2457 = i2449[8]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2457[i + 0]) );
  }
  i2448.textureParameters = i2456
  var i2459 = i2449[9]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2459[i + 0]) );
  }
  i2448.materialFlags = i2458
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2463 = data
  i2462.name = i2463[0]
  i2462.value = i2463[1]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2467 = data
  i2466.name = i2467[0]
  i2466.value = new pc.Color(i2467[1], i2467[2], i2467[3], i2467[4])
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2471 = data
  i2470.name = i2471[0]
  i2470.value = new pc.Vec4( i2471[1], i2471[2], i2471[3], i2471[4] )
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2475 = data
  i2474.name = i2475[0]
  request.r(i2475[1], i2475[2], 0, i2474, 'value')
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2479 = data
  i2478.name = i2479[0]
  i2478.enabled = !!i2479[1]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2481 = data
  i2480.name = i2481[0]
  i2480.halfPrecision = !!i2481[1]
  i2480.useSimplification = !!i2481[2]
  i2480.useUInt32IndexFormat = !!i2481[3]
  i2480.vertexCount = i2481[4]
  i2480.aabb = i2481[5]
  var i2483 = i2481[6]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( !!i2483[i + 0] );
  }
  i2480.streams = i2482
  i2480.vertices = i2481[7]
  var i2485 = i2481[8]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2485[i + 0]) );
  }
  i2480.subMeshes = i2484
  var i2487 = i2481[9]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 16) {
    i2486.push( new pc.Mat4().setData(i2487[i + 0], i2487[i + 1], i2487[i + 2], i2487[i + 3],  i2487[i + 4], i2487[i + 5], i2487[i + 6], i2487[i + 7],  i2487[i + 8], i2487[i + 9], i2487[i + 10], i2487[i + 11],  i2487[i + 12], i2487[i + 13], i2487[i + 14], i2487[i + 15]) );
  }
  i2480.bindposes = i2486
  var i2489 = i2481[10]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2489[i + 0]) );
  }
  i2480.blendShapes = i2488
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2495 = data
  i2494.triangles = i2495[0]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2501 = data
  i2500.name = i2501[0]
  var i2503 = i2501[1]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2503[i + 0]) );
  }
  i2500.frames = i2502
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2505 = data
  i2504.position = new pc.Vec3( i2505[0], i2505[1], i2505[2] )
  i2504.scale = new pc.Vec3( i2505[3], i2505[4], i2505[5] )
  i2504.rotation = new pc.Quat(i2505[6], i2505[7], i2505[8], i2505[9])
  return i2504
}

Deserializers["CarController"] = function (request, data, root) {
  var i2506 = root || request.c( 'CarController' )
  var i2507 = data
  i2506.carType = i2507[0]
  i2506.carCapacity = i2507[1]
  i2506.carColor = i2507[2]
  i2506.isFirstLine = !!i2507[3]
  i2506.isParked = !!i2507[4]
  i2506.isMoving = !!i2507[5]
  i2506.currentPassengerCount = i2507[6]
  i2506._isBlockedByAhead = !!i2507[7]
  i2506._isReversing = !!i2507[8]
  i2506.isOutOfCarLine = !!i2507[9]
  i2506.moveSpeed = i2507[10]
  i2506.guestPickupSpeed = i2507[11]
  i2506.speedTransitionDuration = i2507[12]
  i2506.rotateSpeed = i2507[13]
  i2506.pathLookAhead = i2507[14]
  i2506.parkRotationY = i2507[15]
  i2506.parkApproachDistance = i2507[16]
  i2506.reverseSpeedMultiplier = i2507[17]
  i2506.exitOffsetX = i2507[18]
  i2506.fullExitSpeedMultiplier = i2507[19]
  i2506.fullExitBoostSegmentT = i2507[20]
  i2506.boostBodyTiltX = i2507[21]
  i2506.boostBodyTiltDuration = i2507[22]
  i2506.parkBrakeTiltX = i2507[23]
  i2506.parkBrakeTiltInDuration = i2507[24]
  i2506.parkBrakeTiltOutDuration = i2507[25]
  i2506.laneBlockedSwayZ = i2507[26]
  i2506.laneBlockedSwayStepDuration = i2507[27]
  i2506.turnSwayMaxZ = i2507[28]
  i2506.turnSwayFactor = i2507[29]
  i2506.turnSwayReturnSpeed = i2507[30]
  i2506.collisionCheckDistance = i2507[31]
  i2506.aheadCollisionResumeDelay = i2507[32]
  i2506.reverseCollisionStopDuration = i2507[33]
  i2506.hoodCloseDuration = i2507[34]
  i2506.hoodClosedStartScale = new pc.Vec3( i2507[35], i2507[36], i2507[37] )
  i2506.hoodCloseDropOffset = i2507[38]
  var i2509 = i2507[39]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 2) {
  request.r(i2509[i + 0], i2509[i + 1], 2, i2508, '')
  }
  i2506.seatTransforms = i2508
  request.r(i2507[40], i2507[41], 0, i2506, 'carBodyMeshRenderer')
  request.r(i2507[42], i2507[43], 0, i2506, 'carHoodMeshRenderer')
  request.r(i2507[44], i2507[45], 0, i2506, 'carBody')
  request.r(i2507[46], i2507[47], 0, i2506, 'carSmokeFX')
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2513 = data
  i2512.center = new pc.Vec3( i2513[0], i2513[1], i2513[2] )
  i2512.size = new pc.Vec3( i2513[3], i2513[4], i2513[5] )
  i2512.enabled = !!i2513[6]
  i2512.isTrigger = !!i2513[7]
  request.r(i2513[8], i2513[9], 0, i2512, 'material')
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2515 = data
  i2514.mass = i2515[0]
  i2514.drag = i2515[1]
  i2514.angularDrag = i2515[2]
  i2514.useGravity = !!i2515[3]
  i2514.isKinematic = !!i2515[4]
  i2514.constraints = i2515[5]
  i2514.maxAngularVelocity = i2515[6]
  i2514.collisionDetectionMode = i2515[7]
  i2514.interpolation = i2515[8]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'animatorController')
  request.r(i2517[2], i2517[3], 0, i2516, 'avatar')
  i2516.updateMode = i2517[4]
  i2516.hasTransformHierarchy = !!i2517[5]
  i2516.applyRootMotion = !!i2517[6]
  var i2519 = i2517[7]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 2) {
  request.r(i2519[i + 0], i2519[i + 1], 2, i2518, '')
  }
  i2516.humanBones = i2518
  i2516.enabled = !!i2517[8]
  return i2516
}

Deserializers["GuestController"] = function (request, data, root) {
  var i2520 = root || request.c( 'GuestController' )
  var i2521 = data
  i2520.guestColor = i2521[0]
  i2520.isOnCar = !!i2521[1]
  i2520.jumpPower = i2521[2]
  i2520.jumpDuration = i2521[3]
  i2520.queueMoveDuration = i2521[4]
  request.r(i2521[5], i2521[6], 0, i2520, 'meshRendererBody')
  request.r(i2521[7], i2521[8], 0, i2520, 'animator')
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2523 = data
  i2522.name = i2523[0]
  i2522.tagId = i2523[1]
  i2522.enabled = !!i2523[2]
  i2522.isStatic = !!i2523[3]
  i2522.layer = i2523[4]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'sharedMesh')
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2527 = data
  request.r(i2527[0], i2527[1], 0, i2526, 'additionalVertexStreams')
  i2526.enabled = !!i2527[2]
  request.r(i2527[3], i2527[4], 0, i2526, 'sharedMaterial')
  var i2529 = i2527[5]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 2, i2528, '')
  }
  i2526.sharedMaterials = i2528
  i2526.receiveShadows = !!i2527[6]
  i2526.shadowCastingMode = i2527[7]
  i2526.sortingLayerID = i2527[8]
  i2526.sortingOrder = i2527[9]
  i2526.lightmapIndex = i2527[10]
  i2526.lightmapSceneIndex = i2527[11]
  i2526.lightmapScaleOffset = new pc.Vec4( i2527[12], i2527[13], i2527[14], i2527[15] )
  i2526.lightProbeUsage = i2527[16]
  i2526.reflectionProbeUsage = i2527[17]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2533 = data
  i2532.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2533[0], i2532.main)
  i2532.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2533[1], i2532.colorBySpeed)
  i2532.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2533[2], i2532.colorOverLifetime)
  i2532.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2533[3], i2532.emission)
  i2532.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2533[4], i2532.rotationBySpeed)
  i2532.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2533[5], i2532.rotationOverLifetime)
  i2532.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2533[6], i2532.shape)
  i2532.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2533[7], i2532.sizeBySpeed)
  i2532.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2533[8], i2532.sizeOverLifetime)
  i2532.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2533[9], i2532.textureSheetAnimation)
  i2532.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2533[10], i2532.velocityOverLifetime)
  i2532.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2533[11], i2532.noise)
  i2532.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2533[12], i2532.inheritVelocity)
  i2532.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2533[13], i2532.forceOverLifetime)
  i2532.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2533[14], i2532.limitVelocityOverLifetime)
  i2532.useAutoRandomSeed = !!i2533[15]
  i2532.randomSeed = i2533[16]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2534 = root || new pc.ParticleSystemMain()
  var i2535 = data
  i2534.duration = i2535[0]
  i2534.loop = !!i2535[1]
  i2534.prewarm = !!i2535[2]
  i2534.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[3], i2534.startDelay)
  i2534.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[4], i2534.startLifetime)
  i2534.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[5], i2534.startSpeed)
  i2534.startSize3D = !!i2535[6]
  i2534.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[7], i2534.startSizeX)
  i2534.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[8], i2534.startSizeY)
  i2534.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[9], i2534.startSizeZ)
  i2534.startRotation3D = !!i2535[10]
  i2534.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[11], i2534.startRotationX)
  i2534.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[12], i2534.startRotationY)
  i2534.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[13], i2534.startRotationZ)
  i2534.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2535[14], i2534.startColor)
  i2534.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[15], i2534.gravityModifier)
  i2534.simulationSpace = i2535[16]
  request.r(i2535[17], i2535[18], 0, i2534, 'customSimulationSpace')
  i2534.simulationSpeed = i2535[19]
  i2534.useUnscaledTime = !!i2535[20]
  i2534.scalingMode = i2535[21]
  i2534.playOnAwake = !!i2535[22]
  i2534.maxParticles = i2535[23]
  i2534.emitterVelocityMode = i2535[24]
  i2534.stopAction = i2535[25]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2536 = root || new pc.MinMaxCurve()
  var i2537 = data
  i2536.mode = i2537[0]
  i2536.curveMin = new pc.AnimationCurve( { keys_flow: i2537[1] } )
  i2536.curveMax = new pc.AnimationCurve( { keys_flow: i2537[2] } )
  i2536.curveMultiplier = i2537[3]
  i2536.constantMin = i2537[4]
  i2536.constantMax = i2537[5]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2538 = root || new pc.MinMaxGradient()
  var i2539 = data
  i2538.mode = i2539[0]
  i2538.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2539[1], i2538.gradientMin)
  i2538.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2539[2], i2538.gradientMax)
  i2538.colorMin = new pc.Color(i2539[3], i2539[4], i2539[5], i2539[6])
  i2538.colorMax = new pc.Color(i2539[7], i2539[8], i2539[9], i2539[10])
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2541 = data
  i2540.mode = i2541[0]
  var i2543 = i2541[1]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2543[i + 0]) );
  }
  i2540.colorKeys = i2542
  var i2545 = i2541[2]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2545[i + 0]) );
  }
  i2540.alphaKeys = i2544
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2546 = root || new pc.ParticleSystemColorBySpeed()
  var i2547 = data
  i2546.enabled = !!i2547[0]
  i2546.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2547[1], i2546.color)
  i2546.range = new pc.Vec2( i2547[2], i2547[3] )
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2551 = data
  i2550.color = new pc.Color(i2551[0], i2551[1], i2551[2], i2551[3])
  i2550.time = i2551[4]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2555 = data
  i2554.alpha = i2555[0]
  i2554.time = i2555[1]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2556 = root || new pc.ParticleSystemColorOverLifetime()
  var i2557 = data
  i2556.enabled = !!i2557[0]
  i2556.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2557[1], i2556.color)
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2558 = root || new pc.ParticleSystemEmitter()
  var i2559 = data
  i2558.enabled = !!i2559[0]
  i2558.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2559[1], i2558.rateOverTime)
  i2558.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2559[2], i2558.rateOverDistance)
  var i2561 = i2559[3]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2561[i + 0]) );
  }
  i2558.bursts = i2560
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2564 = root || new pc.ParticleSystemBurst()
  var i2565 = data
  i2564.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2565[0], i2564.count)
  i2564.cycleCount = i2565[1]
  i2564.minCount = i2565[2]
  i2564.maxCount = i2565[3]
  i2564.repeatInterval = i2565[4]
  i2564.time = i2565[5]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2566 = root || new pc.ParticleSystemRotationBySpeed()
  var i2567 = data
  i2566.enabled = !!i2567[0]
  i2566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2567[1], i2566.x)
  i2566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2567[2], i2566.y)
  i2566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2567[3], i2566.z)
  i2566.separateAxes = !!i2567[4]
  i2566.range = new pc.Vec2( i2567[5], i2567[6] )
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2568 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2569 = data
  i2568.enabled = !!i2569[0]
  i2568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2569[1], i2568.x)
  i2568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2569[2], i2568.y)
  i2568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2569[3], i2568.z)
  i2568.separateAxes = !!i2569[4]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2570 = root || new pc.ParticleSystemShape()
  var i2571 = data
  i2570.enabled = !!i2571[0]
  i2570.shapeType = i2571[1]
  i2570.randomDirectionAmount = i2571[2]
  i2570.sphericalDirectionAmount = i2571[3]
  i2570.randomPositionAmount = i2571[4]
  i2570.alignToDirection = !!i2571[5]
  i2570.radius = i2571[6]
  i2570.radiusMode = i2571[7]
  i2570.radiusSpread = i2571[8]
  i2570.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2571[9], i2570.radiusSpeed)
  i2570.radiusThickness = i2571[10]
  i2570.angle = i2571[11]
  i2570.length = i2571[12]
  i2570.boxThickness = new pc.Vec3( i2571[13], i2571[14], i2571[15] )
  i2570.meshShapeType = i2571[16]
  request.r(i2571[17], i2571[18], 0, i2570, 'mesh')
  request.r(i2571[19], i2571[20], 0, i2570, 'meshRenderer')
  request.r(i2571[21], i2571[22], 0, i2570, 'skinnedMeshRenderer')
  i2570.useMeshMaterialIndex = !!i2571[23]
  i2570.meshMaterialIndex = i2571[24]
  i2570.useMeshColors = !!i2571[25]
  i2570.normalOffset = i2571[26]
  i2570.arc = i2571[27]
  i2570.arcMode = i2571[28]
  i2570.arcSpread = i2571[29]
  i2570.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2571[30], i2570.arcSpeed)
  i2570.donutRadius = i2571[31]
  i2570.position = new pc.Vec3( i2571[32], i2571[33], i2571[34] )
  i2570.rotation = new pc.Vec3( i2571[35], i2571[36], i2571[37] )
  i2570.scale = new pc.Vec3( i2571[38], i2571[39], i2571[40] )
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2572 = root || new pc.ParticleSystemSizeBySpeed()
  var i2573 = data
  i2572.enabled = !!i2573[0]
  i2572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2573[1], i2572.x)
  i2572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2573[2], i2572.y)
  i2572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2573[3], i2572.z)
  i2572.separateAxes = !!i2573[4]
  i2572.range = new pc.Vec2( i2573[5], i2573[6] )
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2574 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2575 = data
  i2574.enabled = !!i2575[0]
  i2574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2575[1], i2574.x)
  i2574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2575[2], i2574.y)
  i2574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2575[3], i2574.z)
  i2574.separateAxes = !!i2575[4]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2576 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2577 = data
  i2576.enabled = !!i2577[0]
  i2576.mode = i2577[1]
  i2576.animation = i2577[2]
  i2576.numTilesX = i2577[3]
  i2576.numTilesY = i2577[4]
  i2576.useRandomRow = !!i2577[5]
  i2576.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2577[6], i2576.frameOverTime)
  i2576.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2577[7], i2576.startFrame)
  i2576.cycleCount = i2577[8]
  i2576.rowIndex = i2577[9]
  i2576.flipU = i2577[10]
  i2576.flipV = i2577[11]
  i2576.spriteCount = i2577[12]
  var i2579 = i2577[13]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 2) {
  request.r(i2579[i + 0], i2579[i + 1], 2, i2578, '')
  }
  i2576.sprites = i2578
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2582 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2583 = data
  i2582.enabled = !!i2583[0]
  i2582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[1], i2582.x)
  i2582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[2], i2582.y)
  i2582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[3], i2582.z)
  i2582.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[4], i2582.radial)
  i2582.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[5], i2582.speedModifier)
  i2582.space = i2583[6]
  i2582.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[7], i2582.orbitalX)
  i2582.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[8], i2582.orbitalY)
  i2582.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[9], i2582.orbitalZ)
  i2582.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[10], i2582.orbitalOffsetX)
  i2582.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[11], i2582.orbitalOffsetY)
  i2582.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[12], i2582.orbitalOffsetZ)
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2584 = root || new pc.ParticleSystemNoise()
  var i2585 = data
  i2584.enabled = !!i2585[0]
  i2584.separateAxes = !!i2585[1]
  i2584.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[2], i2584.strengthX)
  i2584.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[3], i2584.strengthY)
  i2584.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[4], i2584.strengthZ)
  i2584.frequency = i2585[5]
  i2584.damping = !!i2585[6]
  i2584.octaveCount = i2585[7]
  i2584.octaveMultiplier = i2585[8]
  i2584.octaveScale = i2585[9]
  i2584.quality = i2585[10]
  i2584.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[11], i2584.scrollSpeed)
  i2584.scrollSpeedMultiplier = i2585[12]
  i2584.remapEnabled = !!i2585[13]
  i2584.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[14], i2584.remapX)
  i2584.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[15], i2584.remapY)
  i2584.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[16], i2584.remapZ)
  i2584.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[17], i2584.positionAmount)
  i2584.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[18], i2584.rotationAmount)
  i2584.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[19], i2584.sizeAmount)
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2586 = root || new pc.ParticleSystemInheritVelocity()
  var i2587 = data
  i2586.enabled = !!i2587[0]
  i2586.mode = i2587[1]
  i2586.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[2], i2586.curve)
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2588 = root || new pc.ParticleSystemForceOverLifetime()
  var i2589 = data
  i2588.enabled = !!i2589[0]
  i2588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2589[1], i2588.x)
  i2588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2589[2], i2588.y)
  i2588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2589[3], i2588.z)
  i2588.space = i2589[4]
  i2588.randomized = !!i2589[5]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2590 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2591 = data
  i2590.enabled = !!i2591[0]
  i2590.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2591[1], i2590.limit)
  i2590.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2591[2], i2590.limitX)
  i2590.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2591[3], i2590.limitY)
  i2590.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2591[4], i2590.limitZ)
  i2590.dampen = i2591[5]
  i2590.separateAxes = !!i2591[6]
  i2590.space = i2591[7]
  i2590.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2591[8], i2590.drag)
  i2590.multiplyDragByParticleSize = !!i2591[9]
  i2590.multiplyDragByParticleVelocity = !!i2591[10]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'mesh')
  i2592.meshCount = i2593[2]
  i2592.activeVertexStreamsCount = i2593[3]
  i2592.alignment = i2593[4]
  i2592.renderMode = i2593[5]
  i2592.sortMode = i2593[6]
  i2592.lengthScale = i2593[7]
  i2592.velocityScale = i2593[8]
  i2592.cameraVelocityScale = i2593[9]
  i2592.normalDirection = i2593[10]
  i2592.sortingFudge = i2593[11]
  i2592.minParticleSize = i2593[12]
  i2592.maxParticleSize = i2593[13]
  i2592.pivot = new pc.Vec3( i2593[14], i2593[15], i2593[16] )
  request.r(i2593[17], i2593[18], 0, i2592, 'trailMaterial')
  i2592.applyActiveColorSpace = !!i2593[19]
  i2592.enabled = !!i2593[20]
  request.r(i2593[21], i2593[22], 0, i2592, 'sharedMaterial')
  var i2595 = i2593[23]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 2, i2594, '')
  }
  i2592.sharedMaterials = i2594
  i2592.receiveShadows = !!i2593[24]
  i2592.shadowCastingMode = i2593[25]
  i2592.sortingLayerID = i2593[26]
  i2592.sortingOrder = i2593[27]
  i2592.lightmapIndex = i2593[28]
  i2592.lightmapSceneIndex = i2593[29]
  i2592.lightmapScaleOffset = new pc.Vec4( i2593[30], i2593[31], i2593[32], i2593[33] )
  i2592.lightProbeUsage = i2593[34]
  i2592.reflectionProbeUsage = i2593[35]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2597 = data
  request.r(i2597[0], i2597[1], 0, i2596, 'sharedMesh')
  var i2599 = i2597[2]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 2, i2598, '')
  }
  i2596.bones = i2598
  i2596.updateWhenOffscreen = !!i2597[3]
  i2596.localBounds = i2597[4]
  request.r(i2597[5], i2597[6], 0, i2596, 'rootBone')
  var i2601 = i2597[7]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2601[i + 0]) );
  }
  i2596.blendShapesWeights = i2600
  i2596.enabled = !!i2597[8]
  request.r(i2597[9], i2597[10], 0, i2596, 'sharedMaterial')
  var i2603 = i2597[11]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 2) {
  request.r(i2603[i + 0], i2603[i + 1], 2, i2602, '')
  }
  i2596.sharedMaterials = i2602
  i2596.receiveShadows = !!i2597[12]
  i2596.shadowCastingMode = i2597[13]
  i2596.sortingLayerID = i2597[14]
  i2596.sortingOrder = i2597[15]
  i2596.lightmapIndex = i2597[16]
  i2596.lightmapSceneIndex = i2597[17]
  i2596.lightmapScaleOffset = new pc.Vec4( i2597[18], i2597[19], i2597[20], i2597[21] )
  i2596.lightProbeUsage = i2597[22]
  i2596.reflectionProbeUsage = i2597[23]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2607 = data
  i2606.weight = i2607[0]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.atlasId = i2609[1]
  i2608.mipmapCount = i2609[2]
  i2608.hdr = !!i2609[3]
  i2608.size = i2609[4]
  i2608.anisoLevel = i2609[5]
  i2608.filterMode = i2609[6]
  var i2611 = i2609[7]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 4) {
    i2610.push( UnityEngine.Rect.MinMaxRect(i2611[i + 0], i2611[i + 1], i2611[i + 2], i2611[i + 3]) );
  }
  i2608.rects = i2610
  i2608.wrapU = i2609[8]
  i2608.wrapV = i2609[9]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2615 = data
  i2614.name = i2615[0]
  i2614.index = i2615[1]
  i2614.startup = !!i2615[2]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2617 = data
  i2616.aspect = i2617[0]
  i2616.orthographic = !!i2617[1]
  i2616.orthographicSize = i2617[2]
  i2616.backgroundColor = new pc.Color(i2617[3], i2617[4], i2617[5], i2617[6])
  i2616.nearClipPlane = i2617[7]
  i2616.farClipPlane = i2617[8]
  i2616.fieldOfView = i2617[9]
  i2616.depth = i2617[10]
  i2616.clearFlags = i2617[11]
  i2616.cullingMask = i2617[12]
  i2616.rect = i2617[13]
  request.r(i2617[14], i2617[15], 0, i2616, 'targetTexture')
  i2616.usePhysicalProperties = !!i2617[16]
  i2616.focalLength = i2617[17]
  i2616.sensorSize = new pc.Vec2( i2617[18], i2617[19] )
  i2616.lensShift = new pc.Vec2( i2617[20], i2617[21] )
  i2616.gateFit = i2617[22]
  i2616.commandBufferCount = i2617[23]
  i2616.cameraType = i2617[24]
  i2616.enabled = !!i2617[25]
  return i2616
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2619 = data
  i2618.m_RenderShadows = !!i2619[0]
  i2618.m_RequiresDepthTextureOption = i2619[1]
  i2618.m_RequiresOpaqueTextureOption = i2619[2]
  i2618.m_CameraType = i2619[3]
  var i2621 = i2619[4]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2621.length; i += 2) {
  request.r(i2621[i + 0], i2621[i + 1], 1, i2620, '')
  }
  i2618.m_Cameras = i2620
  i2618.m_RendererIndex = i2619[5]
  i2618.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2619[6] )
  request.r(i2619[7], i2619[8], 0, i2618, 'm_VolumeTrigger')
  i2618.m_VolumeFrameworkUpdateModeOption = i2619[9]
  i2618.m_RenderPostProcessing = !!i2619[10]
  i2618.m_Antialiasing = i2619[11]
  i2618.m_AntialiasingQuality = i2619[12]
  i2618.m_StopNaN = !!i2619[13]
  i2618.m_Dithering = !!i2619[14]
  i2618.m_ClearDepth = !!i2619[15]
  i2618.m_AllowXRRendering = !!i2619[16]
  i2618.m_AllowHDROutput = !!i2619[17]
  i2618.m_UseScreenCoordOverride = !!i2619[18]
  i2618.m_ScreenSizeOverride = new pc.Vec4( i2619[19], i2619[20], i2619[21], i2619[22] )
  i2618.m_ScreenCoordScaleBias = new pc.Vec4( i2619[23], i2619[24], i2619[25], i2619[26] )
  i2618.m_RequiresDepthTexture = !!i2619[27]
  i2618.m_RequiresColorTexture = !!i2619[28]
  i2618.m_Version = i2619[29]
  i2618.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2619[30], i2618.m_TaaSettings)
  return i2618
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2625 = data
  i2624.m_Quality = i2625[0]
  i2624.m_FrameInfluence = i2625[1]
  i2624.m_JitterScale = i2625[2]
  i2624.m_MipBias = i2625[3]
  i2624.m_VarianceClampScale = i2625[4]
  i2624.m_ContrastAdaptiveSharpening = i2625[5]
  return i2624
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2627 = data
  i2626.priority = i2627[0]
  i2626.blendDistance = i2627[1]
  i2626.weight = i2627[2]
  request.r(i2627[3], i2627[4], 0, i2626, 'sharedProfile')
  i2626.m_IsGlobal = !!i2627[5]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2629 = data
  i2628.pivot = new pc.Vec2( i2629[0], i2629[1] )
  i2628.anchorMin = new pc.Vec2( i2629[2], i2629[3] )
  i2628.anchorMax = new pc.Vec2( i2629[4], i2629[5] )
  i2628.sizeDelta = new pc.Vec2( i2629[6], i2629[7] )
  i2628.anchoredPosition3D = new pc.Vec3( i2629[8], i2629[9], i2629[10] )
  i2628.rotation = new pc.Quat(i2629[11], i2629[12], i2629[13], i2629[14])
  i2628.scale = new pc.Vec3( i2629[15], i2629[16], i2629[17] )
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2631 = data
  i2630.planeDistance = i2631[0]
  i2630.referencePixelsPerUnit = i2631[1]
  i2630.isFallbackOverlay = !!i2631[2]
  i2630.renderMode = i2631[3]
  i2630.renderOrder = i2631[4]
  i2630.sortingLayerName = i2631[5]
  i2630.sortingOrder = i2631[6]
  i2630.scaleFactor = i2631[7]
  request.r(i2631[8], i2631[9], 0, i2630, 'worldCamera')
  i2630.overrideSorting = !!i2631[10]
  i2630.pixelPerfect = !!i2631[11]
  i2630.targetDisplay = i2631[12]
  i2630.overridePixelPerfect = !!i2631[13]
  i2630.enabled = !!i2631[14]
  return i2630
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2633 = data
  i2632.m_UiScaleMode = i2633[0]
  i2632.m_ReferencePixelsPerUnit = i2633[1]
  i2632.m_ScaleFactor = i2633[2]
  i2632.m_ReferenceResolution = new pc.Vec2( i2633[3], i2633[4] )
  i2632.m_ScreenMatchMode = i2633[5]
  i2632.m_MatchWidthOrHeight = i2633[6]
  i2632.m_PhysicalUnit = i2633[7]
  i2632.m_FallbackScreenDPI = i2633[8]
  i2632.m_DefaultSpriteDPI = i2633[9]
  i2632.m_DynamicPixelsPerUnit = i2633[10]
  i2632.m_PresetInfoIsWorld = !!i2633[11]
  return i2632
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2635 = data
  i2634.m_IgnoreReversedGraphics = !!i2635[0]
  i2634.m_BlockingObjects = i2635[1]
  i2634.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2635[2] )
  return i2634
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2636 = root || request.c( 'UIManager' )
  var i2637 = data
  request.r(i2637[0], i2637[1], 0, i2636, 'winScreen')
  request.r(i2637[2], i2637[3], 0, i2636, 'winIcon')
  request.r(i2637[4], i2637[5], 0, i2636, 'winTxt')
  request.r(i2637[6], i2637[7], 0, i2636, 'winCTABtn')
  request.r(i2637[8], i2637[9], 0, i2636, 'loseScreen')
  request.r(i2637[10], i2637[11], 0, i2636, 'loseIcon')
  request.r(i2637[12], i2637[13], 0, i2636, 'loseTxt')
  request.r(i2637[14], i2637[15], 0, i2636, 'loseCTABtn')
  request.r(i2637[16], i2637[17], 0, i2636, 'carMovingDisplay')
  request.r(i2637[18], i2637[19], 0, i2636, 'carMovingTxt')
  request.r(i2637[20], i2637[21], 0, i2636, 'WarnBox')
  request.r(i2637[22], i2637[23], 0, i2636, 'WarnTxt')
  request.r(i2637[24], i2637[25], 0, i2636, 'tutorialTxt')
  i2636.screenFadeDuration = i2637[26]
  i2636.screenFadeAlpha = i2637[27]
  i2636.popupItemDuration = i2637[28]
  i2636.popupItemDelay = i2637[29]
  i2636.ctaPulseScale = i2637[30]
  i2636.ctaPulseHalfDuration = i2637[31]
  i2636.carMovingPopupScale = i2637[32]
  i2636.carMovingPopupInDuration = i2637[33]
  i2636.carMovingPopupOutDuration = i2637[34]
  i2636.warnTextRedDuration = i2637[35]
  i2636.warnShakeAngle = i2637[36]
  i2636.warnShakeDuration = i2637[37]
  i2636.warnBoxSlideOffset = i2637[38]
  i2636.warnBoxShowDuration = i2637[39]
  i2636.warnBoxHideDuration = i2637[40]
  i2636.warnBoxTotalDuration = i2637[41]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2639 = data
  i2638.cullTransparentMesh = !!i2639[0]
  return i2638
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2640 = root || request.c( 'UnityEngine.UI.Image' )
  var i2641 = data
  request.r(i2641[0], i2641[1], 0, i2640, 'm_Sprite')
  i2640.m_Type = i2641[2]
  i2640.m_PreserveAspect = !!i2641[3]
  i2640.m_FillCenter = !!i2641[4]
  i2640.m_FillMethod = i2641[5]
  i2640.m_FillAmount = i2641[6]
  i2640.m_FillClockwise = !!i2641[7]
  i2640.m_FillOrigin = i2641[8]
  i2640.m_UseSpriteMesh = !!i2641[9]
  i2640.m_PixelsPerUnitMultiplier = i2641[10]
  request.r(i2641[11], i2641[12], 0, i2640, 'm_Material')
  i2640.m_Maskable = !!i2641[13]
  i2640.m_Color = new pc.Color(i2641[14], i2641[15], i2641[16], i2641[17])
  i2640.m_RaycastTarget = !!i2641[18]
  i2640.m_RaycastPadding = new pc.Vec4( i2641[19], i2641[20], i2641[21], i2641[22] )
  return i2640
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2643 = data
  i2642.m_hasFontAssetChanged = !!i2643[0]
  request.r(i2643[1], i2643[2], 0, i2642, 'm_baseMaterial')
  i2642.m_maskOffset = new pc.Vec4( i2643[3], i2643[4], i2643[5], i2643[6] )
  i2642.m_text = i2643[7]
  i2642.m_isRightToLeft = !!i2643[8]
  request.r(i2643[9], i2643[10], 0, i2642, 'm_fontAsset')
  request.r(i2643[11], i2643[12], 0, i2642, 'm_sharedMaterial')
  var i2645 = i2643[13]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 2) {
  request.r(i2645[i + 0], i2645[i + 1], 2, i2644, '')
  }
  i2642.m_fontSharedMaterials = i2644
  request.r(i2643[14], i2643[15], 0, i2642, 'm_fontMaterial')
  var i2647 = i2643[16]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 2) {
  request.r(i2647[i + 0], i2647[i + 1], 2, i2646, '')
  }
  i2642.m_fontMaterials = i2646
  i2642.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2643[17], i2643[18], i2643[19], i2643[20])
  i2642.m_fontColor = new pc.Color(i2643[21], i2643[22], i2643[23], i2643[24])
  i2642.m_enableVertexGradient = !!i2643[25]
  i2642.m_colorMode = i2643[26]
  i2642.m_fontColorGradient = request.d('TMPro.VertexGradient', i2643[27], i2642.m_fontColorGradient)
  request.r(i2643[28], i2643[29], 0, i2642, 'm_fontColorGradientPreset')
  request.r(i2643[30], i2643[31], 0, i2642, 'm_spriteAsset')
  i2642.m_tintAllSprites = !!i2643[32]
  request.r(i2643[33], i2643[34], 0, i2642, 'm_StyleSheet')
  i2642.m_TextStyleHashCode = i2643[35]
  i2642.m_overrideHtmlColors = !!i2643[36]
  i2642.m_faceColor = UnityEngine.Color32.ConstructColor(i2643[37], i2643[38], i2643[39], i2643[40])
  i2642.m_fontSize = i2643[41]
  i2642.m_fontSizeBase = i2643[42]
  i2642.m_fontWeight = i2643[43]
  i2642.m_enableAutoSizing = !!i2643[44]
  i2642.m_fontSizeMin = i2643[45]
  i2642.m_fontSizeMax = i2643[46]
  i2642.m_fontStyle = i2643[47]
  i2642.m_HorizontalAlignment = i2643[48]
  i2642.m_VerticalAlignment = i2643[49]
  i2642.m_textAlignment = i2643[50]
  i2642.m_characterSpacing = i2643[51]
  i2642.m_characterHorizontalScale = i2643[52]
  i2642.m_wordSpacing = i2643[53]
  i2642.m_lineSpacing = i2643[54]
  i2642.m_lineSpacingMax = i2643[55]
  i2642.m_paragraphSpacing = i2643[56]
  i2642.m_charWidthMaxAdj = i2643[57]
  i2642.m_TextWrappingMode = i2643[58]
  i2642.m_wordWrappingRatios = i2643[59]
  i2642.m_overflowMode = i2643[60]
  request.r(i2643[61], i2643[62], 0, i2642, 'm_linkedTextComponent')
  request.r(i2643[63], i2643[64], 0, i2642, 'parentLinkedComponent')
  i2642.m_enableKerning = !!i2643[65]
  var i2649 = i2643[66]
  var i2648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.add(i2649[i + 0]);
  }
  i2642.m_ActiveFontFeatures = i2648
  i2642.m_enableExtraPadding = !!i2643[67]
  i2642.checkPaddingRequired = !!i2643[68]
  i2642.m_isRichText = !!i2643[69]
  i2642.m_parseCtrlCharacters = !!i2643[70]
  i2642.m_isOrthographic = !!i2643[71]
  i2642.m_isCullingEnabled = !!i2643[72]
  i2642.m_horizontalMapping = i2643[73]
  i2642.m_verticalMapping = i2643[74]
  i2642.m_uvLineOffset = i2643[75]
  i2642.m_geometrySortingOrder = i2643[76]
  i2642.m_IsTextObjectScaleStatic = !!i2643[77]
  i2642.m_VertexBufferAutoSizeReduction = !!i2643[78]
  i2642.m_useMaxVisibleDescender = !!i2643[79]
  i2642.m_pageToDisplay = i2643[80]
  i2642.m_margin = new pc.Vec4( i2643[81], i2643[82], i2643[83], i2643[84] )
  i2642.m_isUsingLegacyAnimationComponent = !!i2643[85]
  i2642.m_isVolumetricText = !!i2643[86]
  request.r(i2643[87], i2643[88], 0, i2642, 'm_Material')
  i2642.m_EmojiFallbackSupport = !!i2643[89]
  i2642.m_Maskable = !!i2643[90]
  i2642.m_Color = new pc.Color(i2643[91], i2643[92], i2643[93], i2643[94])
  i2642.m_RaycastTarget = !!i2643[95]
  i2642.m_RaycastPadding = new pc.Vec4( i2643[96], i2643[97], i2643[98], i2643[99] )
  return i2642
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.VertexGradient' )
  var i2651 = data
  i2650.topLeft = new pc.Color(i2651[0], i2651[1], i2651[2], i2651[3])
  i2650.topRight = new pc.Color(i2651[4], i2651[5], i2651[6], i2651[7])
  i2650.bottomLeft = new pc.Color(i2651[8], i2651[9], i2651[10], i2651[11])
  i2650.bottomRight = new pc.Color(i2651[12], i2651[13], i2651[14], i2651[15])
  return i2650
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2654 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2655 = data
  i2654.m_HorizontalFit = i2655[0]
  i2654.m_VerticalFit = i2655[1]
  return i2654
}

Deserializers["DAT.UI.FX.PulseEffect"] = function (request, data, root) {
  var i2656 = root || request.c( 'DAT.UI.FX.PulseEffect' )
  var i2657 = data
  i2656.pulseMode = i2657[0]
  i2656.pulseScale = i2657[1]
  i2656.duration = i2657[2]
  i2656.autoStart = !!i2657[3]
  i2656.startDelay = i2657[4]
  i2656.ease = i2657[5]
  i2656.loop = !!i2657[6]
  i2656.snap = !!i2657[7]
  i2656.delayBetween = i2657[8]
  return i2656
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2659 = data
  request.r(i2659[0], i2659[1], 0, i2658, 'm_FirstSelected')
  i2658.m_sendNavigationEvents = !!i2659[2]
  i2658.m_DragThreshold = i2659[3]
  return i2658
}

Deserializers["UnityEngine.InputSystem.UI.InputSystemUIInputModule"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.InputSystem.UI.InputSystemUIInputModule' )
  var i2661 = data
  i2660.m_MoveRepeatDelay = i2661[0]
  i2660.m_MoveRepeatRate = i2661[1]
  request.r(i2661[2], i2661[3], 0, i2660, 'm_XRTrackingOrigin')
  request.r(i2661[4], i2661[5], 0, i2660, 'm_ActionsAsset')
  request.r(i2661[6], i2661[7], 0, i2660, 'm_PointAction')
  request.r(i2661[8], i2661[9], 0, i2660, 'm_MoveAction')
  request.r(i2661[10], i2661[11], 0, i2660, 'm_SubmitAction')
  request.r(i2661[12], i2661[13], 0, i2660, 'm_CancelAction')
  request.r(i2661[14], i2661[15], 0, i2660, 'm_LeftClickAction')
  request.r(i2661[16], i2661[17], 0, i2660, 'm_MiddleClickAction')
  request.r(i2661[18], i2661[19], 0, i2660, 'm_RightClickAction')
  request.r(i2661[20], i2661[21], 0, i2660, 'm_ScrollWheelAction')
  request.r(i2661[22], i2661[23], 0, i2660, 'm_TrackedDevicePositionAction')
  request.r(i2661[24], i2661[25], 0, i2660, 'm_TrackedDeviceOrientationAction')
  i2660.m_DeselectOnBackgroundClick = !!i2661[26]
  i2660.m_PointerBehavior = i2661[27]
  i2660.m_CursorLockBehavior = i2661[28]
  i2660.m_ScrollDeltaPerTick = i2661[29]
  i2660.m_SendPointerHoverToParent = !!i2661[30]
  return i2660
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2662 = root || request.c( 'GameManager' )
  var i2663 = data
  i2662.guestPickupInterval = i2663[0]
  i2662.movingCarLimit = i2663[1]
  i2662.moveLimit = i2663[2]
  i2662.moveCount = i2663[3]
  request.r(i2663[4], i2663[5], 0, i2662, 'colorPalette')
  request.r(i2663[6], i2663[7], 0, i2662, 'guestPath')
  request.r(i2663[8], i2663[9], 0, i2662, 'spawnManager')
  request.r(i2663[10], i2663[11], 0, i2662, 'parkingSlotManager')
  request.r(i2663[12], i2663[13], 0, i2662, 'carLineManager')
  request.r(i2663[14], i2663[15], 0, i2662, 'barrierController')
  request.r(i2663[16], i2663[17], 0, i2662, 'uiManager')
  var i2665 = i2663[18]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 2) {
  request.r(i2665[i + 0], i2665[i + 1], 2, i2664, '')
  }
  i2662.tutorialObjects = i2664
  i2662.carDone = i2663[19]
  i2662.movingCarCount = i2663[20]
  i2662.isWin = !!i2663[21]
  i2662.isLose = !!i2663[22]
  i2662.isTutorialDone = !!i2663[23]
  request.r(i2663[24], i2663[25], 0, i2662, 'BGM')
  request.r(i2663[26], i2663[27], 0, i2662, 'carDoneSound')
  request.r(i2663[28], i2663[29], 0, i2662, 'carHopInSound')
  request.r(i2663[30], i2663[31], 0, i2662, 'fullRoadWarningSound')
  i2662.persistAcrossScenes = !!i2663[32]
  return i2662
}

Deserializers["PlayerInteraction"] = function (request, data, root) {
  var i2668 = root || request.c( 'PlayerInteraction' )
  var i2669 = data
  request.r(i2669[0], i2669[1], 0, i2668, 'raycastCamera')
  i2668.rayDistance = i2669[2]
  return i2668
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i2670 = root || request.c( 'SpawnManager' )
  var i2671 = data
  request.r(i2671[0], i2671[1], 0, i2670, 'car4Prefab')
  request.r(i2671[2], i2671[3], 0, i2670, 'car6Prefab')
  request.r(i2671[4], i2671[5], 0, i2670, 'car10Prefab')
  i2670.columnCount = i2671[6]
  i2670.firstLineZ = i2671[7]
  i2670.columnSpacing = i2671[8]
  i2670.spawnY = i2671[9]
  request.r(i2671[10], i2671[11], 0, i2670, 'carParent')
  i2670.safeDistanceCar4 = i2671[12]
  i2670.safeDistanceCar6 = i2671[13]
  i2670.safeDistanceCar10 = i2671[14]
  var i2673 = i2671[15]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('CarSpawnData', i2673[i + 0]) );
  }
  i2670.column0 = i2672
  var i2675 = i2671[16]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('CarSpawnData', i2675[i + 0]) );
  }
  i2670.column1 = i2674
  var i2677 = i2671[17]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('CarSpawnData', i2677[i + 0]) );
  }
  i2670.column2 = i2676
  var i2679 = i2671[18]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('CarSpawnData', i2679[i + 0]) );
  }
  i2670.column3 = i2678
  var i2681 = i2671[19]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('CarSpawnData', i2681[i + 0]) );
  }
  i2670.column4 = i2680
  request.r(i2671[20], i2671[21], 0, i2670, 'guestPrefab')
  request.r(i2671[22], i2671[23], 0, i2670, 'guestParent')
  i2670.guestSpawnPosCount = i2671[24]
  i2670.guestSpacing = i2671[25]
  i2670.guestCurveRadius = i2671[26]
  var i2683 = i2671[27]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 2) {
  request.r(i2683[i + 0], i2683[i + 1], 2, i2682, '')
  }
  i2670.guestSpawnPositions = i2682
  var i2685 = i2671[28]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('GuestColorSpawnData', i2685[i + 0]) );
  }
  i2670.guestColors0 = i2684
  var i2687 = i2671[29]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('GuestColorSpawnData', i2687[i + 0]) );
  }
  i2670.guestColors1 = i2686
  var i2689 = i2671[30]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('GuestColorSpawnData', i2689[i + 0]) );
  }
  i2670.guestColors2 = i2688
  var i2691 = i2671[31]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('GuestColorSpawnData', i2691[i + 0]) );
  }
  i2670.guestColors3 = i2690
  return i2670
}

Deserializers["CarSpawnData"] = function (request, data, root) {
  var i2694 = root || request.c( 'CarSpawnData' )
  var i2695 = data
  i2694.carType = i2695[0]
  i2694.carColor = i2695[1]
  return i2694
}

Deserializers["GuestColorSpawnData"] = function (request, data, root) {
  var i2700 = root || request.c( 'GuestColorSpawnData' )
  var i2701 = data
  i2700.color = i2701[0]
  i2700.count = i2701[1]
  return i2700
}

Deserializers["CarLineManager"] = function (request, data, root) {
  var i2702 = root || request.c( 'CarLineManager' )
  var i2703 = data
  i2702.carLineDepartQueueCheckInterval = i2703[0]
  return i2702
}

Deserializers["VFXManager"] = function (request, data, root) {
  var i2704 = root || request.c( 'VFXManager' )
  var i2705 = data
  request.r(i2705[0], i2705[1], 0, i2704, 'vfxCarDone')
  i2704.persistAcrossScenes = !!i2705[2]
  return i2704
}

Deserializers["DAT.Managers.AudioManager"] = function (request, data, root) {
  var i2706 = root || request.c( 'DAT.Managers.AudioManager' )
  var i2707 = data
  i2706.masterVolume = i2707[0]
  i2706.musicVolume = i2707[1]
  i2706.sfxVolume = i2707[2]
  i2706.muteMaster = !!i2707[3]
  i2706.muteMusic = !!i2707[4]
  i2706.muteSfx = !!i2707[5]
  i2706.isSaveToPlayerPref = !!i2707[6]
  var i2709 = i2707[7]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 2) {
  request.r(i2709[i + 0], i2709[i + 1], 2, i2708, '')
  }
  i2706.sfxChannels = i2708
  request.r(i2707[8], i2707[9], 0, i2706, 'musicA')
  request.r(i2707[10], i2707[11], 0, i2706, 'musicB')
  i2706.persistAcrossScenes = !!i2707[12]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2713 = data
  request.r(i2713[0], i2713[1], 0, i2712, 'clip')
  request.r(i2713[2], i2713[3], 0, i2712, 'outputAudioMixerGroup')
  i2712.playOnAwake = !!i2713[4]
  i2712.loop = !!i2713[5]
  i2712.time = i2713[6]
  i2712.volume = i2713[7]
  i2712.pitch = i2713[8]
  i2712.enabled = !!i2713[9]
  return i2712
}

Deserializers["DAT.Core.ResponsiveManager"] = function (request, data, root) {
  var i2714 = root || request.c( 'DAT.Core.ResponsiveManager' )
  var i2715 = data
  i2714.OnPortrait = request.d('UnityEngine.Events.UnityEvent', i2715[0], i2714.OnPortrait)
  i2714.OnLandscape = request.d('UnityEngine.Events.UnityEvent', i2715[1], i2714.OnLandscape)
  i2714.OnOrientationChanged = request.d('UnityEngine.Events.UnityEvent`1[[DAT.Core.Orientation, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null]]', i2715[2], i2714.OnOrientationChanged)
  i2714.currentOrientation = i2715[3]
  var i2717 = i2715[4]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 2) {
  request.r(i2717[i + 0], i2717[i + 1], 2, i2716, '')
  }
  i2714.portraitOnlyObjects = i2716
  var i2719 = i2715[5]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 2) {
  request.r(i2719[i + 0], i2719[i + 1], 2, i2718, '')
  }
  i2714.landscapeOnlyObjects = i2718
  request.r(i2715[6], i2715[7], 0, i2714, 'targetCanvasScaler')
  i2714.autoFindCanvasScaler = !!i2715[8]
  i2714.portraitResolution = new pc.Vec2( i2715[9], i2715[10] )
  i2714.landscapeResolution = new pc.Vec2( i2715[11], i2715[12] )
  i2714.adjustCamerasByAspect = !!i2715[13]
  var i2721 = i2715[14]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 2) {
  request.r(i2721[i + 0], i2721[i + 1], 2, i2720, '')
  }
  i2714.targetCameras = i2720
  i2714.values9x16 = request.d('DAT.Core.AspectCameraValues', i2715[15], i2714.values9x16)
  i2714.values9x18 = request.d('DAT.Core.AspectCameraValues', i2715[16], i2714.values9x18)
  i2714.values9x20 = request.d('DAT.Core.AspectCameraValues', i2715[17], i2714.values9x20)
  i2714.values9x21 = request.d('DAT.Core.AspectCameraValues', i2715[18], i2714.values9x21)
  i2714.useDeviceOrientation = !!i2715[19]
  i2714.aspectChangeThreshold = i2715[20]
  i2714.persistAcrossScenes = !!i2715[21]
  return i2714
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2722 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2723 = data
  i2722.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2723[0], i2722.m_PersistentCalls)
  return i2722
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2724 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2725 = data
  var i2727 = i2725[0]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(request.d('UnityEngine.Events.PersistentCall', i2727[i + 0]));
  }
  i2724.m_Calls = i2726
  return i2724
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2730 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2731 = data
  request.r(i2731[0], i2731[1], 0, i2730, 'm_Target')
  i2730.m_TargetAssemblyTypeName = i2731[2]
  i2730.m_MethodName = i2731[3]
  i2730.m_Mode = i2731[4]
  i2730.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2731[5], i2730.m_Arguments)
  i2730.m_CallState = i2731[6]
  return i2730
}

Deserializers["UnityEngine.Events.UnityEvent`1[[DAT.Core.Orientation, Assembly-CSharp, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null]]"] = function (request, data, root) {
  var i2732 = root || new (UnityEngine.Events.UnityEvent$1( Bridge.ns( 'DAT.Core.Orientation' ) ))
  var i2733 = data
  i2732.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2733[0], i2732.m_PersistentCalls)
  return i2732
}

Deserializers["DAT.Core.AspectCameraValues"] = function (request, data, root) {
  var i2736 = root || request.c( 'DAT.Core.AspectCameraValues' )
  var i2737 = data
  i2736.fieldOfView = i2737[0]
  i2736.orthographicSize = i2737[1]
  return i2736
}

Deserializers["GuestPath"] = function (request, data, root) {
  var i2738 = root || request.c( 'GuestPath' )
  var i2739 = data
  var i2741 = i2739[0]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 2) {
  request.r(i2741[i + 0], i2741[i + 1], 2, i2740, '')
  }
  i2738.waypoints = i2740
  return i2738
}

Deserializers["ParkingSlotManager"] = function (request, data, root) {
  var i2742 = root || request.c( 'ParkingSlotManager' )
  var i2743 = data
  var i2745 = i2743[0]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 2) {
  request.r(i2745[i + 0], i2745[i + 1], 2, i2744, '')
  }
  i2742.parkingSlots = i2744
  var i2747 = i2743[1]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 2) {
  request.r(i2747[i + 0], i2747[i + 1], 2, i2746, '')
  }
  i2742.parkingPath = i2746
  i2742.parkExitQueueCheckInterval = i2743[2]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2751 = data
  i2750.color = new pc.Color(i2751[0], i2751[1], i2751[2], i2751[3])
  request.r(i2751[4], i2751[5], 0, i2750, 'sprite')
  i2750.flipX = !!i2751[6]
  i2750.flipY = !!i2751[7]
  i2750.drawMode = i2751[8]
  i2750.size = new pc.Vec2( i2751[9], i2751[10] )
  i2750.tileMode = i2751[11]
  i2750.adaptiveModeThreshold = i2751[12]
  i2750.maskInteraction = i2751[13]
  i2750.spriteSortPoint = i2751[14]
  i2750.enabled = !!i2751[15]
  request.r(i2751[16], i2751[17], 0, i2750, 'sharedMaterial')
  var i2753 = i2751[18]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 2) {
  request.r(i2753[i + 0], i2753[i + 1], 2, i2752, '')
  }
  i2750.sharedMaterials = i2752
  i2750.receiveShadows = !!i2751[19]
  i2750.shadowCastingMode = i2751[20]
  i2750.sortingLayerID = i2751[21]
  i2750.sortingOrder = i2751[22]
  i2750.lightmapIndex = i2751[23]
  i2750.lightmapSceneIndex = i2751[24]
  i2750.lightmapScaleOffset = new pc.Vec4( i2751[25], i2751[26], i2751[27], i2751[28] )
  i2750.lightProbeUsage = i2751[29]
  i2750.reflectionProbeUsage = i2751[30]
  return i2750
}

Deserializers["ParkingSlotController"] = function (request, data, root) {
  var i2754 = root || request.c( 'ParkingSlotController' )
  var i2755 = data
  i2754.isParked = !!i2755[0]
  return i2754
}

Deserializers["GuestSpawnPos"] = function (request, data, root) {
  var i2756 = root || request.c( 'GuestSpawnPos' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'guestLeftDisplayTxt')
  i2756.queueType = i2757[2]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2759 = data
  i2758.center = new pc.Vec3( i2759[0], i2759[1], i2759[2] )
  i2758.radius = i2759[3]
  i2758.enabled = !!i2759[4]
  i2758.isTrigger = !!i2759[5]
  request.r(i2759[6], i2759[7], 0, i2758, 'material')
  return i2758
}

Deserializers["BarrierController"] = function (request, data, root) {
  var i2760 = root || request.c( 'BarrierController' )
  var i2761 = data
  request.r(i2761[0], i2761[1], 0, i2760, 'barrier')
  i2760.openDuration = i2761[2]
  i2760.holdOpenDuration = i2761[3]
  i2760.closeDuration = i2761[4]
  i2760.openAngleX = i2761[5]
  return i2760
}

Deserializers["DAT.UI.FX.RotationEffect"] = function (request, data, root) {
  var i2762 = root || request.c( 'DAT.UI.FX.RotationEffect' )
  var i2763 = data
  i2762.rotationMode = i2763[0]
  i2762.rotationAngle = i2763[1]
  i2762.duration = i2763[2]
  i2762.autoStart = !!i2763[3]
  i2762.startDelay = i2763[4]
  i2762.ease = i2763[5]
  i2762.loop = !!i2763[6]
  i2762.snap = !!i2763[7]
  i2762.delayBetween = i2763[8]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2765 = data
  i2764.ambientIntensity = i2765[0]
  i2764.reflectionIntensity = i2765[1]
  i2764.ambientMode = i2765[2]
  i2764.ambientLight = new pc.Color(i2765[3], i2765[4], i2765[5], i2765[6])
  i2764.ambientSkyColor = new pc.Color(i2765[7], i2765[8], i2765[9], i2765[10])
  i2764.ambientGroundColor = new pc.Color(i2765[11], i2765[12], i2765[13], i2765[14])
  i2764.ambientEquatorColor = new pc.Color(i2765[15], i2765[16], i2765[17], i2765[18])
  i2764.fogColor = new pc.Color(i2765[19], i2765[20], i2765[21], i2765[22])
  i2764.fogEndDistance = i2765[23]
  i2764.fogStartDistance = i2765[24]
  i2764.fogDensity = i2765[25]
  i2764.fog = !!i2765[26]
  request.r(i2765[27], i2765[28], 0, i2764, 'skybox')
  i2764.fogMode = i2765[29]
  var i2767 = i2765[30]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2767[i + 0]) );
  }
  i2764.lightmaps = i2766
  i2764.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2765[31], i2764.lightProbes)
  i2764.lightmapsMode = i2765[32]
  i2764.mixedBakeMode = i2765[33]
  i2764.environmentLightingMode = i2765[34]
  i2764.ambientProbe = new pc.SphericalHarmonicsL2(i2765[35])
  request.r(i2765[36], i2765[37], 0, i2764, 'customReflection')
  request.r(i2765[38], i2765[39], 0, i2764, 'defaultReflection')
  i2764.defaultReflectionMode = i2765[40]
  i2764.defaultReflectionResolution = i2765[41]
  i2764.sunLightObjectId = i2765[42]
  i2764.pixelLightCount = i2765[43]
  i2764.defaultReflectionHDR = !!i2765[44]
  i2764.hasLightDataAsset = !!i2765[45]
  i2764.hasManualGenerate = !!i2765[46]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2771 = data
  request.r(i2771[0], i2771[1], 0, i2770, 'lightmapColor')
  request.r(i2771[2], i2771[3], 0, i2770, 'lightmapDirection')
  request.r(i2771[4], i2771[5], 0, i2770, 'shadowMask')
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2772 = root || new UnityEngine.LightProbes()
  var i2773 = data
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2781 = data
  i2780.AdditionalLightsRenderingMode = i2781[0]
  i2780.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2781[1], i2780.LightRenderingMode)
  i2780.MainLightRenderingModeValue = i2781[2]
  i2780.SupportsMainLightShadows = !!i2781[3]
  i2780.MixedLightingSupported = !!i2781[4]
  i2780.MainLightShadowmapResolutionValue = i2781[5]
  i2780.SupportsSoftShadows = !!i2781[6]
  i2780.SoftShadowQualityValue = i2781[7]
  i2780.ShadowDistance = i2781[8]
  i2780.ShadowCascadeCount = i2781[9]
  i2780.Cascade2Split = i2781[10]
  i2780.Cascade3Split = new pc.Vec2( i2781[11], i2781[12] )
  i2780.Cascade4Split = new pc.Vec3( i2781[13], i2781[14], i2781[15] )
  i2780.CascadeBorder = i2781[16]
  i2780.ShadowDepthBias = i2781[17]
  i2780.ShadowNormalBias = i2781[18]
  i2780.RequireDepthTexture = !!i2781[19]
  i2780.RequireOpaqueTexture = !!i2781[20]
  i2780.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i2781[21], i2780.scriptableRendererData)
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2783 = data
  i2782.Disabled = i2783[0]
  i2782.PerVertex = i2783[1]
  i2782.PerPixel = i2783[2]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i2785 = data
  i2784.opaqueLayerMask = i2785[0]
  i2784.transparentLayerMask = i2785[1]
  var i2787 = i2785[2]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i2787[i + 0]) );
  }
  i2784.RenderObjectsFeatures = i2786
  i2784.name = i2785[3]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i2791 = data
  i2790.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i2791[0], i2790.settings)
  i2790.name = i2791[1]
  i2790.typeName = i2791[2]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2793 = data
  var i2795 = i2793[0]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2795[i + 0]));
  }
  i2792.ShaderCompilationErrors = i2794
  i2792.name = i2793[1]
  i2792.guid = i2793[2]
  var i2797 = i2793[3]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( i2797[i + 0] );
  }
  i2792.shaderDefinedKeywords = i2796
  var i2799 = i2793[4]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2799[i + 0]) );
  }
  i2792.passes = i2798
  var i2801 = i2793[5]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2801[i + 0]) );
  }
  i2792.usePasses = i2800
  var i2803 = i2793[6]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2803[i + 0]) );
  }
  i2792.defaultParameterValues = i2802
  request.r(i2793[7], i2793[8], 0, i2792, 'unityFallbackShader')
  i2792.readDepth = !!i2793[9]
  i2792.hasDepthOnlyPass = !!i2793[10]
  i2792.isCreatedByShaderGraph = !!i2793[11]
  i2792.disableBatching = !!i2793[12]
  i2792.compiled = !!i2793[13]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2807 = data
  i2806.shaderName = i2807[0]
  i2806.errorMessage = i2807[1]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2812 = root || new pc.UnityShaderPass()
  var i2813 = data
  i2812.id = i2813[0]
  i2812.subShaderIndex = i2813[1]
  i2812.name = i2813[2]
  i2812.passType = i2813[3]
  i2812.grabPassTextureName = i2813[4]
  i2812.usePass = !!i2813[5]
  i2812.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[6], i2812.zTest)
  i2812.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[7], i2812.zWrite)
  i2812.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[8], i2812.culling)
  i2812.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2813[9], i2812.blending)
  i2812.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2813[10], i2812.alphaBlending)
  i2812.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[11], i2812.colorWriteMask)
  i2812.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[12], i2812.offsetUnits)
  i2812.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[13], i2812.offsetFactor)
  i2812.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[14], i2812.stencilRef)
  i2812.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[15], i2812.stencilReadMask)
  i2812.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2813[16], i2812.stencilWriteMask)
  i2812.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2813[17], i2812.stencilOp)
  i2812.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2813[18], i2812.stencilOpFront)
  i2812.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2813[19], i2812.stencilOpBack)
  var i2815 = i2813[20]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2815[i + 0]) );
  }
  i2812.tags = i2814
  var i2817 = i2813[21]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( i2817[i + 0] );
  }
  i2812.passDefinedKeywords = i2816
  var i2819 = i2813[22]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2819[i + 0]) );
  }
  i2812.passDefinedKeywordGroups = i2818
  var i2821 = i2813[23]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2821[i + 0]) );
  }
  i2812.variants = i2820
  var i2823 = i2813[24]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2823[i + 0]) );
  }
  i2812.excludedVariants = i2822
  i2812.hasDepthReader = !!i2813[25]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2825 = data
  i2824.val = i2825[0]
  i2824.name = i2825[1]
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2827 = data
  i2826.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2827[0], i2826.src)
  i2826.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2827[1], i2826.dst)
  i2826.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2827[2], i2826.op)
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2829 = data
  i2828.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[0], i2828.pass)
  i2828.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[1], i2828.fail)
  i2828.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[2], i2828.zFail)
  i2828.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2829[3], i2828.comp)
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2833 = data
  i2832.name = i2833[0]
  i2832.value = i2833[1]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2837 = data
  var i2839 = i2837[0]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( i2839[i + 0] );
  }
  i2836.keywords = i2838
  i2836.hasDiscard = !!i2837[1]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2843 = data
  i2842.passId = i2843[0]
  i2842.subShaderIndex = i2843[1]
  var i2845 = i2843[2]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( i2845[i + 0] );
  }
  i2842.keywords = i2844
  i2842.vertexProgram = i2843[3]
  i2842.fragmentProgram = i2843[4]
  i2842.exportedForWebGl2 = !!i2843[5]
  i2842.readDepth = !!i2843[6]
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2849 = data
  request.r(i2849[0], i2849[1], 0, i2848, 'shader')
  i2848.pass = i2849[2]
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2853 = data
  i2852.name = i2853[0]
  i2852.type = i2853[1]
  i2852.value = new pc.Vec4( i2853[2], i2853[3], i2853[4], i2853[5] )
  i2852.textureValue = i2853[6]
  i2852.shaderPropertyFlag = i2853[7]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2855 = data
  i2854.name = i2855[0]
  request.r(i2855[1], i2855[2], 0, i2854, 'texture')
  i2854.aabb = i2855[3]
  i2854.vertices = i2855[4]
  i2854.triangles = i2855[5]
  i2854.textureRect = UnityEngine.Rect.MinMaxRect(i2855[6], i2855[7], i2855[8], i2855[9])
  i2854.packedRect = UnityEngine.Rect.MinMaxRect(i2855[10], i2855[11], i2855[12], i2855[13])
  i2854.border = new pc.Vec4( i2855[14], i2855[15], i2855[16], i2855[17] )
  i2854.transparency = i2855[18]
  i2854.bounds = i2855[19]
  i2854.pixelsPerUnit = i2855[20]
  i2854.textureWidth = i2855[21]
  i2854.textureHeight = i2855[22]
  i2854.nativeSize = new pc.Vec2( i2855[23], i2855[24] )
  i2854.pivot = new pc.Vec2( i2855[25], i2855[26] )
  i2854.textureRectOffset = new pc.Vec2( i2855[27], i2855[28] )
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2857 = data
  i2856.name = i2857[0]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2859 = data
  i2858.name = i2859[0]
  i2858.wrapMode = i2859[1]
  i2858.isLooping = !!i2859[2]
  i2858.length = i2859[3]
  var i2861 = i2859[4]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2861[i + 0]) );
  }
  i2858.curves = i2860
  var i2863 = i2859[5]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2863[i + 0]) );
  }
  i2858.events = i2862
  i2858.halfPrecision = !!i2859[6]
  i2858._frameRate = i2859[7]
  i2858.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2859[8], i2858.localBounds)
  i2858.hasMuscleCurves = !!i2859[9]
  var i2865 = i2859[10]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( i2865[i + 0] );
  }
  i2858.clipMuscleConstant = i2864
  i2858.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2859[11], i2858.clipBindingConstant)
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2869 = data
  i2868.path = i2869[0]
  i2868.hash = i2869[1]
  i2868.componentType = i2869[2]
  i2868.property = i2869[3]
  i2868.keys = i2869[4]
  var i2871 = i2869[5]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2871[i + 0]) );
  }
  i2868.objectReferenceKeys = i2870
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2875 = data
  i2874.time = i2875[0]
  request.r(i2875[1], i2875[2], 0, i2874, 'value')
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2879 = data
  i2878.functionName = i2879[0]
  i2878.floatParameter = i2879[1]
  i2878.intParameter = i2879[2]
  i2878.stringParameter = i2879[3]
  request.r(i2879[4], i2879[5], 0, i2878, 'objectReferenceParameter')
  i2878.time = i2879[6]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2881 = data
  i2880.center = new pc.Vec3( i2881[0], i2881[1], i2881[2] )
  i2880.extends = new pc.Vec3( i2881[3], i2881[4], i2881[5] )
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2885 = data
  var i2887 = i2885[0]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( i2887[i + 0] );
  }
  i2884.genericBindings = i2886
  var i2889 = i2885[1]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( i2889[i + 0] );
  }
  i2884.pptrCurveMapping = i2888
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2891 = data
  i2890.name = i2891[0]
  var i2893 = i2891[1]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2893[i + 0]) );
  }
  i2890.layers = i2892
  var i2895 = i2891[2]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2895[i + 0]) );
  }
  i2890.parameters = i2894
  i2890.animationClips = i2891[3]
  i2890.avatarUnsupported = i2891[4]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2899 = data
  i2898.name = i2899[0]
  i2898.defaultWeight = i2899[1]
  i2898.blendingMode = i2899[2]
  i2898.avatarMask = i2899[3]
  i2898.syncedLayerIndex = i2899[4]
  i2898.syncedLayerAffectsTiming = !!i2899[5]
  i2898.syncedLayers = i2899[6]
  i2898.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2899[7], i2898.stateMachine)
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2901 = data
  i2900.id = i2901[0]
  i2900.name = i2901[1]
  i2900.path = i2901[2]
  var i2903 = i2901[3]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2903[i + 0]) );
  }
  i2900.states = i2902
  var i2905 = i2901[4]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2905[i + 0]) );
  }
  i2900.machines = i2904
  var i2907 = i2901[5]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2907[i + 0]) );
  }
  i2900.entryStateTransitions = i2906
  var i2909 = i2901[6]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2909[i + 0]) );
  }
  i2900.exitStateTransitions = i2908
  var i2911 = i2901[7]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2911[i + 0]) );
  }
  i2900.anyStateTransitions = i2910
  i2900.defaultStateId = i2901[8]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2915 = data
  i2914.id = i2915[0]
  i2914.name = i2915[1]
  i2914.cycleOffset = i2915[2]
  i2914.cycleOffsetParameter = i2915[3]
  i2914.cycleOffsetParameterActive = !!i2915[4]
  i2914.mirror = !!i2915[5]
  i2914.mirrorParameter = i2915[6]
  i2914.mirrorParameterActive = !!i2915[7]
  i2914.motionId = i2915[8]
  i2914.nameHash = i2915[9]
  i2914.fullPathHash = i2915[10]
  i2914.speed = i2915[11]
  i2914.speedParameter = i2915[12]
  i2914.speedParameterActive = !!i2915[13]
  i2914.tag = i2915[14]
  i2914.tagHash = i2915[15]
  i2914.writeDefaultValues = !!i2915[16]
  var i2917 = i2915[17]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 2) {
  request.r(i2917[i + 0], i2917[i + 1], 2, i2916, '')
  }
  i2914.behaviours = i2916
  var i2919 = i2915[18]
  var i2918 = []
  for(var i = 0; i < i2919.length; i += 1) {
    i2918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2919[i + 0]) );
  }
  i2914.transitions = i2918
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2925 = data
  i2924.fullPath = i2925[0]
  i2924.canTransitionToSelf = !!i2925[1]
  i2924.duration = i2925[2]
  i2924.exitTime = i2925[3]
  i2924.hasExitTime = !!i2925[4]
  i2924.hasFixedDuration = !!i2925[5]
  i2924.interruptionSource = i2925[6]
  i2924.offset = i2925[7]
  i2924.orderedInterruption = !!i2925[8]
  i2924.destinationStateId = i2925[9]
  i2924.isExit = !!i2925[10]
  i2924.mute = !!i2925[11]
  i2924.solo = !!i2925[12]
  var i2927 = i2925[13]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 1) {
    i2926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2927[i + 0]) );
  }
  i2924.conditions = i2926
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2931 = data
  i2930.mode = i2931[0]
  i2930.parameter = i2931[1]
  i2930.threshold = i2931[2]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2937 = data
  i2936.destinationStateId = i2937[0]
  i2936.isExit = !!i2937[1]
  i2936.mute = !!i2937[2]
  i2936.solo = !!i2937[3]
  var i2939 = i2937[4]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2939[i + 0]) );
  }
  i2936.conditions = i2938
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2943 = data
  i2942.defaultBool = !!i2943[0]
  i2942.defaultFloat = i2943[1]
  i2942.defaultInt = i2943[2]
  i2942.name = i2943[3]
  i2942.nameHash = i2943[4]
  i2942.type = i2943[5]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2945 = data
  i2944.name = i2945[0]
  i2944.bytes64 = i2945[1]
  i2944.data = i2945[2]
  return i2944
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2946 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2947 = data
  var i2949 = i2947[0]
  var i2948 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2949.length; i += 2) {
  request.r(i2949[i + 0], i2949[i + 1], 1, i2948, '')
  }
  i2946.components = i2948
  return i2946
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2952 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2953 = data
  i2952.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2953[0], i2952.mode)
  i2952.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2953[1], i2952.neutralHDRRangeReductionMode)
  i2952.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2953[2], i2952.acesPreset)
  i2952.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2953[3], i2952.hueShiftAmount)
  i2952.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2953[4], i2952.detectPaperWhite)
  i2952.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2953[5], i2952.paperWhite)
  i2952.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2953[6], i2952.detectBrightnessLimits)
  i2952.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2953[7], i2952.minNits)
  i2952.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2953[8], i2952.maxNits)
  i2952.active = !!i2953[9]
  return i2952
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2954 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2955 = data
  i2954.m_Value = i2955[0]
  i2954.m_OverrideState = !!i2955[1]
  return i2954
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2956 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2957 = data
  i2956.m_Value = i2957[0]
  i2956.m_OverrideState = !!i2957[1]
  return i2956
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2958 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2959 = data
  i2958.m_Value = i2959[0]
  i2958.m_OverrideState = !!i2959[1]
  return i2958
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2960 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2961 = data
  i2960.m_Value = i2961[0]
  i2960.m_OverrideState = !!i2961[1]
  return i2960
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2962 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2963 = data
  i2962.m_Value = !!i2963[0]
  i2962.m_OverrideState = !!i2963[1]
  return i2962
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2964 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2965 = data
  i2964.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2965[0], i2964.skipIterations)
  i2964.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2965[1], i2964.threshold)
  i2964.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2965[2], i2964.intensity)
  i2964.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2965[3], i2964.scatter)
  i2964.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2965[4], i2964.clamp)
  i2964.tint = request.d('UnityEngine.Rendering.ColorParameter', i2965[5], i2964.tint)
  i2964.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2965[6], i2964.highQualityFiltering)
  i2964.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2965[7], i2964.downscale)
  i2964.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2965[8], i2964.maxIterations)
  i2964.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2965[9], i2964.dirtTexture)
  i2964.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2965[10], i2964.dirtIntensity)
  i2964.active = !!i2965[11]
  return i2964
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2966 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2967 = data
  i2966.m_Value = i2967[0]
  i2966.m_OverrideState = !!i2967[1]
  return i2966
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2968 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2969 = data
  i2968.m_Value = i2969[0]
  i2968.m_OverrideState = !!i2969[1]
  return i2968
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2970 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2971 = data
  i2970.m_Value = new pc.Color(i2971[0], i2971[1], i2971[2], i2971[3])
  i2970.m_OverrideState = !!i2971[4]
  return i2970
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2972 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2973 = data
  i2972.m_Value = i2973[0]
  i2972.m_OverrideState = !!i2973[1]
  return i2972
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2974 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2975 = data
  i2974.dimension = i2975[0]
  request.r(i2975[1], i2975[2], 0, i2974, 'm_Value')
  i2974.m_OverrideState = !!i2975[3]
  return i2974
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i2976 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i2977 = data
  i2976.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i2977[0], i2976.mode)
  i2976.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i2977[1], i2976.quality)
  i2976.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2977[2], i2976.intensity)
  i2976.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2977[3], i2976.clamp)
  i2976.active = !!i2977[4]
  return i2976
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i2978 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i2979 = data
  i2978.m_Value = i2979[0]
  i2978.m_OverrideState = !!i2979[1]
  return i2978
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i2980 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i2981 = data
  i2980.m_Value = i2981[0]
  i2980.m_OverrideState = !!i2981[1]
  return i2980
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2982 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2983 = data
  i2982.color = request.d('UnityEngine.Rendering.ColorParameter', i2983[0], i2982.color)
  i2982.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2983[1], i2982.center)
  i2982.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2983[2], i2982.intensity)
  i2982.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2983[3], i2982.smoothness)
  i2982.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2983[4], i2982.rounded)
  i2982.active = !!i2983[5]
  return i2982
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2984 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2985 = data
  i2984.m_Value = new pc.Vec2( i2985[0], i2985[1] )
  i2984.m_OverrideState = !!i2985[2]
  return i2984
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2986 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2987 = data
  i2986.normalStyle = i2987[0]
  i2986.normalSpacingOffset = i2987[1]
  i2986.boldStyle = i2987[2]
  i2986.boldSpacing = i2987[3]
  i2986.italicStyle = i2987[4]
  i2986.tabSize = i2987[5]
  request.r(i2987[6], i2987[7], 0, i2986, 'atlas')
  i2986.m_SourceFontFileGUID = i2987[8]
  i2986.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2987[9], i2986.m_CreationSettings)
  request.r(i2987[10], i2987[11], 0, i2986, 'm_SourceFontFile')
  i2986.m_SourceFontFilePath = i2987[12]
  i2986.m_AtlasPopulationMode = i2987[13]
  i2986.InternalDynamicOS = !!i2987[14]
  var i2989 = i2987[15]
  var i2988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.add(request.d('UnityEngine.TextCore.Glyph', i2989[i + 0]));
  }
  i2986.m_GlyphTable = i2988
  var i2991 = i2987[16]
  var i2990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2991.length; i += 1) {
    i2990.add(request.d('TMPro.TMP_Character', i2991[i + 0]));
  }
  i2986.m_CharacterTable = i2990
  var i2993 = i2987[17]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 2) {
  request.r(i2993[i + 0], i2993[i + 1], 2, i2992, '')
  }
  i2986.m_AtlasTextures = i2992
  i2986.m_AtlasTextureIndex = i2987[18]
  i2986.m_IsMultiAtlasTexturesEnabled = !!i2987[19]
  i2986.m_GetFontFeatures = !!i2987[20]
  i2986.m_ClearDynamicDataOnBuild = !!i2987[21]
  i2986.m_AtlasWidth = i2987[22]
  i2986.m_AtlasHeight = i2987[23]
  i2986.m_AtlasPadding = i2987[24]
  i2986.m_AtlasRenderMode = i2987[25]
  var i2995 = i2987[26]
  var i2994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2995.length; i += 1) {
    i2994.add(request.d('UnityEngine.TextCore.GlyphRect', i2995[i + 0]));
  }
  i2986.m_UsedGlyphRects = i2994
  var i2997 = i2987[27]
  var i2996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2997.length; i += 1) {
    i2996.add(request.d('UnityEngine.TextCore.GlyphRect', i2997[i + 0]));
  }
  i2986.m_FreeGlyphRects = i2996
  i2986.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2987[28], i2986.m_FontFeatureTable)
  i2986.m_ShouldReimportFontFeatures = !!i2987[29]
  var i2999 = i2987[30]
  var i2998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2999.length; i += 2) {
  request.r(i2999[i + 0], i2999[i + 1], 1, i2998, '')
  }
  i2986.m_FallbackFontAssetTable = i2998
  var i3001 = i2987[31]
  var i3000 = []
  for(var i = 0; i < i3001.length; i += 1) {
    i3000.push( request.d('TMPro.TMP_FontWeightPair', i3001[i + 0]) );
  }
  i2986.m_FontWeightTable = i3000
  var i3003 = i2987[32]
  var i3002 = []
  for(var i = 0; i < i3003.length; i += 1) {
    i3002.push( request.d('TMPro.TMP_FontWeightPair', i3003[i + 0]) );
  }
  i2986.fontWeights = i3002
  i2986.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2987[33], i2986.m_fontInfo)
  var i3005 = i2987[34]
  var i3004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3005.length; i += 1) {
    i3004.add(request.d('TMPro.TMP_Glyph', i3005[i + 0]));
  }
  i2986.m_glyphInfoList = i3004
  i2986.m_KerningTable = request.d('TMPro.KerningTable', i2987[35], i2986.m_KerningTable)
  var i3007 = i2987[36]
  var i3006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3007.length; i += 2) {
  request.r(i3007[i + 0], i3007[i + 1], 1, i3006, '')
  }
  i2986.fallbackFontAssets = i3006
  i2986.m_Version = i2987[37]
  i2986.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2987[38], i2986.m_FaceInfo)
  request.r(i2987[39], i2987[40], 0, i2986, 'm_Material')
  return i2986
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3008 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3009 = data
  i3008.sourceFontFileName = i3009[0]
  i3008.sourceFontFileGUID = i3009[1]
  i3008.faceIndex = i3009[2]
  i3008.pointSizeSamplingMode = i3009[3]
  i3008.pointSize = i3009[4]
  i3008.padding = i3009[5]
  i3008.paddingMode = i3009[6]
  i3008.packingMode = i3009[7]
  i3008.atlasWidth = i3009[8]
  i3008.atlasHeight = i3009[9]
  i3008.characterSetSelectionMode = i3009[10]
  i3008.characterSequence = i3009[11]
  i3008.referencedFontAssetGUID = i3009[12]
  i3008.referencedTextAssetGUID = i3009[13]
  i3008.fontStyle = i3009[14]
  i3008.fontStyleModifier = i3009[15]
  i3008.renderMode = i3009[16]
  i3008.includeFontFeatures = !!i3009[17]
  return i3008
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3012 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3013 = data
  i3012.m_Index = i3013[0]
  i3012.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3013[1], i3012.m_Metrics)
  i3012.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3013[2], i3012.m_GlyphRect)
  i3012.m_Scale = i3013[3]
  i3012.m_AtlasIndex = i3013[4]
  i3012.m_ClassDefinitionType = i3013[5]
  return i3012
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3014 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3015 = data
  i3014.m_Width = i3015[0]
  i3014.m_Height = i3015[1]
  i3014.m_HorizontalBearingX = i3015[2]
  i3014.m_HorizontalBearingY = i3015[3]
  i3014.m_HorizontalAdvance = i3015[4]
  return i3014
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3016 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3017 = data
  i3016.m_X = i3017[0]
  i3016.m_Y = i3017[1]
  i3016.m_Width = i3017[2]
  i3016.m_Height = i3017[3]
  return i3016
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3020 = root || request.c( 'TMPro.TMP_Character' )
  var i3021 = data
  i3020.m_ElementType = i3021[0]
  i3020.m_Unicode = i3021[1]
  i3020.m_GlyphIndex = i3021[2]
  i3020.m_Scale = i3021[3]
  return i3020
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3026 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3027 = data
  var i3029 = i3027[0]
  var i3028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i3029.length; i += 1) {
    i3028.add(request.d('TMPro.MultipleSubstitutionRecord', i3029[i + 0]));
  }
  i3026.m_MultipleSubstitutionRecords = i3028
  var i3031 = i3027[1]
  var i3030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i3031.length; i += 1) {
    i3030.add(request.d('TMPro.LigatureSubstitutionRecord', i3031[i + 0]));
  }
  i3026.m_LigatureSubstitutionRecords = i3030
  var i3033 = i3027[2]
  var i3032 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3033.length; i += 1) {
    i3032.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i3033[i + 0]));
  }
  i3026.m_GlyphPairAdjustmentRecords = i3032
  var i3035 = i3027[3]
  var i3034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i3035[i + 0]));
  }
  i3026.m_MarkToBaseAdjustmentRecords = i3034
  var i3037 = i3027[4]
  var i3036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i3037[i + 0]));
  }
  i3026.m_MarkToMarkAdjustmentRecords = i3036
  return i3026
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i3040 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i3041 = data
  i3040.m_TargetGlyphID = i3041[0]
  i3040.m_SubstituteGlyphIDs = i3041[1]
  return i3040
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i3044 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i3045 = data
  i3044.m_ComponentGlyphIDs = i3045[0]
  i3044.m_LigatureGlyphID = i3045[1]
  return i3044
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3048 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i3049 = data
  i3048.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3049[0], i3048.m_FirstAdjustmentRecord)
  i3048.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i3049[1], i3048.m_SecondAdjustmentRecord)
  i3048.m_FeatureLookupFlags = i3049[2]
  return i3048
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i3052 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i3053 = data
  i3052.m_BaseGlyphID = i3053[0]
  i3052.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3053[1], i3052.m_BaseGlyphAnchorPoint)
  i3052.m_MarkGlyphID = i3053[2]
  i3052.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3053[3], i3052.m_MarkPositionAdjustment)
  return i3052
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i3056 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i3057 = data
  i3056.m_BaseMarkGlyphID = i3057[0]
  i3056.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i3057[1], i3056.m_BaseMarkGlyphAnchorPoint)
  i3056.m_CombiningMarkGlyphID = i3057[2]
  i3056.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i3057[3], i3056.m_CombiningMarkPositionAdjustment)
  return i3056
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3062 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3063 = data
  request.r(i3063[0], i3063[1], 0, i3062, 'regularTypeface')
  request.r(i3063[2], i3063[3], 0, i3062, 'italicTypeface')
  return i3062
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3064 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3065 = data
  i3064.Name = i3065[0]
  i3064.PointSize = i3065[1]
  i3064.Scale = i3065[2]
  i3064.CharacterCount = i3065[3]
  i3064.LineHeight = i3065[4]
  i3064.Baseline = i3065[5]
  i3064.Ascender = i3065[6]
  i3064.CapHeight = i3065[7]
  i3064.Descender = i3065[8]
  i3064.CenterLine = i3065[9]
  i3064.SuperscriptOffset = i3065[10]
  i3064.SubscriptOffset = i3065[11]
  i3064.SubSize = i3065[12]
  i3064.Underline = i3065[13]
  i3064.UnderlineThickness = i3065[14]
  i3064.strikethrough = i3065[15]
  i3064.strikethroughThickness = i3065[16]
  i3064.TabWidth = i3065[17]
  i3064.Padding = i3065[18]
  i3064.AtlasWidth = i3065[19]
  i3064.AtlasHeight = i3065[20]
  return i3064
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3068 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3069 = data
  i3068.id = i3069[0]
  i3068.x = i3069[1]
  i3068.y = i3069[2]
  i3068.width = i3069[3]
  i3068.height = i3069[4]
  i3068.xOffset = i3069[5]
  i3068.yOffset = i3069[6]
  i3068.xAdvance = i3069[7]
  i3068.scale = i3069[8]
  return i3068
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3070 = root || request.c( 'TMPro.KerningTable' )
  var i3071 = data
  var i3073 = i3071[0]
  var i3072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.add(request.d('TMPro.KerningPair', i3073[i + 0]));
  }
  i3070.kerningPairs = i3072
  return i3070
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3076 = root || request.c( 'TMPro.KerningPair' )
  var i3077 = data
  i3076.xOffset = i3077[0]
  i3076.m_FirstGlyph = i3077[1]
  i3076.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3077[2], i3076.m_FirstGlyphAdjustments)
  i3076.m_SecondGlyph = i3077[3]
  i3076.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3077[4], i3076.m_SecondGlyphAdjustments)
  i3076.m_IgnoreSpacingAdjustments = !!i3077[5]
  return i3076
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3078 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3079 = data
  i3078.m_FaceIndex = i3079[0]
  i3078.m_FamilyName = i3079[1]
  i3078.m_StyleName = i3079[2]
  i3078.m_PointSize = i3079[3]
  i3078.m_Scale = i3079[4]
  i3078.m_UnitsPerEM = i3079[5]
  i3078.m_LineHeight = i3079[6]
  i3078.m_AscentLine = i3079[7]
  i3078.m_CapLine = i3079[8]
  i3078.m_MeanLine = i3079[9]
  i3078.m_Baseline = i3079[10]
  i3078.m_DescentLine = i3079[11]
  i3078.m_SuperscriptOffset = i3079[12]
  i3078.m_SuperscriptSize = i3079[13]
  i3078.m_SubscriptOffset = i3079[14]
  i3078.m_SubscriptSize = i3079[15]
  i3078.m_UnderlineOffset = i3079[16]
  i3078.m_UnderlineThickness = i3079[17]
  i3078.m_StrikethroughOffset = i3079[18]
  i3078.m_StrikethroughThickness = i3079[19]
  i3078.m_TabWidth = i3079[20]
  return i3078
}

Deserializers["UnityEngine.InputSystem.InputActionAsset"] = function (request, data, root) {
  var i3080 = root || request.c( 'UnityEngine.InputSystem.InputActionAsset' )
  var i3081 = data
  var i3083 = i3081[0]
  var i3082 = []
  for(var i = 0; i < i3083.length; i += 1) {
    i3082.push( request.d('UnityEngine.InputSystem.InputActionMap', i3083[i + 0]) );
  }
  i3080.m_ActionMaps = i3082
  var i3085 = i3081[1]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 1) {
    i3084.push( request.d('UnityEngine.InputSystem.InputControlScheme', i3085[i + 0]) );
  }
  i3080.m_ControlSchemes = i3084
  i3080.m_IsProjectWide = !!i3081[2]
  return i3080
}

Deserializers["UnityEngine.InputSystem.InputActionMap"] = function (request, data, root) {
  var i3088 = root || request.c( 'UnityEngine.InputSystem.InputActionMap' )
  var i3089 = data
  i3088.m_Name = i3089[0]
  i3088.m_Id = i3089[1]
  request.r(i3089[2], i3089[3], 0, i3088, 'm_Asset')
  var i3091 = i3089[4]
  var i3090 = []
  for(var i = 0; i < i3091.length; i += 1) {
    i3090.push( request.d('UnityEngine.InputSystem.InputAction', i3091[i + 0]) );
  }
  i3088.m_Actions = i3090
  var i3093 = i3089[5]
  var i3092 = []
  for(var i = 0; i < i3093.length; i += 1) {
    i3092.push( request.d('UnityEngine.InputSystem.InputBinding', i3093[i + 0]) );
  }
  i3088.m_Bindings = i3092
  return i3088
}

Deserializers["UnityEngine.InputSystem.InputAction"] = function (request, data, root) {
  var i3096 = root || request.c( 'UnityEngine.InputSystem.InputAction' )
  var i3097 = data
  i3096.m_Name = i3097[0]
  i3096.m_Type = i3097[1]
  i3096.m_ExpectedControlType = i3097[2]
  i3096.m_Id = i3097[3]
  i3096.m_Processors = i3097[4]
  i3096.m_Interactions = i3097[5]
  var i3099 = i3097[6]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 1) {
    i3098.push( request.d('UnityEngine.InputSystem.InputBinding', i3099[i + 0]) );
  }
  i3096.m_SingletonActionBindings = i3098
  i3096.m_Flags = i3097[7]
  return i3096
}

Deserializers["UnityEngine.InputSystem.InputBinding"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.InputSystem.InputBinding' )
  var i3103 = data
  i3102.m_Name = i3103[0]
  i3102.m_Id = i3103[1]
  i3102.m_Path = i3103[2]
  i3102.m_Interactions = i3103[3]
  i3102.m_Processors = i3103[4]
  i3102.m_Groups = i3103[5]
  i3102.m_Action = i3103[6]
  i3102.m_Flags = i3103[7]
  return i3102
}

Deserializers["UnityEngine.InputSystem.InputControlScheme"] = function (request, data, root) {
  var i3106 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme' )
  var i3107 = data
  i3106.m_Name = i3107[0]
  i3106.m_BindingGroup = i3107[1]
  var i3109 = i3107[2]
  var i3108 = []
  for(var i = 0; i < i3109.length; i += 1) {
    i3108.push( request.d('UnityEngine.InputSystem.InputControlScheme+DeviceRequirement', i3109[i + 0]) );
  }
  i3106.m_DeviceRequirements = i3108
  return i3106
}

Deserializers["UnityEngine.InputSystem.InputControlScheme+DeviceRequirement"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.InputSystem.InputControlScheme+DeviceRequirement' )
  var i3113 = data
  i3112.m_ControlPath = i3113[0]
  i3112.m_Flags = i3113[1]
  return i3112
}

Deserializers["UnityEngine.InputSystem.InputActionReference"] = function (request, data, root) {
  var i3114 = root || request.c( 'UnityEngine.InputSystem.InputActionReference' )
  var i3115 = data
  request.r(i3115[0], i3115[1], 0, i3114, 'm_Asset')
  i3114.m_ActionId = i3115[2]
  return i3114
}

Deserializers["ColorPalette"] = function (request, data, root) {
  var i3116 = root || request.c( 'ColorPalette' )
  var i3117 = data
  var i3119 = i3117[0]
  var i3118 = []
  for(var i = 0; i < i3119.length; i += 1) {
    i3118.push( request.d('ColorPalette+ColorEntry', i3119[i + 0]) );
  }
  i3116.entries = i3118
  return i3116
}

Deserializers["ColorPalette+ColorEntry"] = function (request, data, root) {
  var i3122 = root || request.c( 'ColorPalette+ColorEntry' )
  var i3123 = data
  i3122.color = i3123[0]
  request.r(i3123[1], i3123[2], 0, i3122, 'carMaterial')
  request.r(i3123[3], i3123[4], 0, i3122, 'carOutlineMaterial')
  request.r(i3123[5], i3123[6], 0, i3122, 'humanMaterial')
  return i3122
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3124 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3125 = data
  i3124.useSafeMode = !!i3125[0]
  i3124.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3125[1], i3124.safeModeOptions)
  i3124.timeScale = i3125[2]
  i3124.unscaledTimeScale = i3125[3]
  i3124.useSmoothDeltaTime = !!i3125[4]
  i3124.maxSmoothUnscaledTime = i3125[5]
  i3124.rewindCallbackMode = i3125[6]
  i3124.showUnityEditorReport = !!i3125[7]
  i3124.logBehaviour = i3125[8]
  i3124.drawGizmos = !!i3125[9]
  i3124.defaultRecyclable = !!i3125[10]
  i3124.defaultAutoPlay = i3125[11]
  i3124.defaultUpdateType = i3125[12]
  i3124.defaultTimeScaleIndependent = !!i3125[13]
  i3124.defaultEaseType = i3125[14]
  i3124.defaultEaseOvershootOrAmplitude = i3125[15]
  i3124.defaultEasePeriod = i3125[16]
  i3124.defaultAutoKill = !!i3125[17]
  i3124.defaultLoopType = i3125[18]
  i3124.debugMode = !!i3125[19]
  i3124.debugStoreTargetId = !!i3125[20]
  i3124.showPreviewPanel = !!i3125[21]
  i3124.storeSettingsLocation = i3125[22]
  i3124.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3125[23], i3124.modules)
  i3124.createASMDEF = !!i3125[24]
  i3124.showPlayingTweens = !!i3125[25]
  i3124.showPausedTweens = !!i3125[26]
  return i3124
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3126 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3127 = data
  i3126.logBehaviour = i3127[0]
  i3126.nestedTweenFailureBehaviour = i3127[1]
  return i3126
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3128 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3129 = data
  i3128.showPanel = !!i3129[0]
  i3128.audioEnabled = !!i3129[1]
  i3128.physicsEnabled = !!i3129[2]
  i3128.physics2DEnabled = !!i3129[3]
  i3128.spriteEnabled = !!i3129[4]
  i3128.uiEnabled = !!i3129[5]
  i3128.textMeshProEnabled = !!i3129[6]
  i3128.tk2DEnabled = !!i3129[7]
  i3128.deAudioEnabled = !!i3129[8]
  i3128.deUnityExtendedEnabled = !!i3129[9]
  i3128.epoOutlineEnabled = !!i3129[10]
  return i3128
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3130 = root || request.c( 'TMPro.TMP_Settings' )
  var i3131 = data
  i3130.assetVersion = i3131[0]
  i3130.m_TextWrappingMode = i3131[1]
  i3130.m_enableKerning = !!i3131[2]
  var i3133 = i3131[3]
  var i3132 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i3133.length; i += 1) {
    i3132.add(i3133[i + 0]);
  }
  i3130.m_ActiveFontFeatures = i3132
  i3130.m_enableExtraPadding = !!i3131[4]
  i3130.m_enableTintAllSprites = !!i3131[5]
  i3130.m_enableParseEscapeCharacters = !!i3131[6]
  i3130.m_EnableRaycastTarget = !!i3131[7]
  i3130.m_GetFontFeaturesAtRuntime = !!i3131[8]
  i3130.m_missingGlyphCharacter = i3131[9]
  i3130.m_ClearDynamicDataOnBuild = !!i3131[10]
  i3130.m_warningsDisabled = !!i3131[11]
  request.r(i3131[12], i3131[13], 0, i3130, 'm_defaultFontAsset')
  i3130.m_defaultFontAssetPath = i3131[14]
  i3130.m_defaultFontSize = i3131[15]
  i3130.m_defaultAutoSizeMinRatio = i3131[16]
  i3130.m_defaultAutoSizeMaxRatio = i3131[17]
  i3130.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3131[18], i3131[19] )
  i3130.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3131[20], i3131[21] )
  i3130.m_autoSizeTextContainer = !!i3131[22]
  i3130.m_IsTextObjectScaleStatic = !!i3131[23]
  var i3135 = i3131[24]
  var i3134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3135.length; i += 2) {
  request.r(i3135[i + 0], i3135[i + 1], 1, i3134, '')
  }
  i3130.m_fallbackFontAssets = i3134
  i3130.m_matchMaterialPreset = !!i3131[25]
  i3130.m_HideSubTextObjects = !!i3131[26]
  request.r(i3131[27], i3131[28], 0, i3130, 'm_defaultSpriteAsset')
  i3130.m_defaultSpriteAssetPath = i3131[29]
  i3130.m_enableEmojiSupport = !!i3131[30]
  i3130.m_MissingCharacterSpriteUnicode = i3131[31]
  var i3137 = i3131[32]
  var i3136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i3137.length; i += 2) {
  request.r(i3137[i + 0], i3137[i + 1], 1, i3136, '')
  }
  i3130.m_EmojiFallbackTextAssets = i3136
  i3130.m_defaultColorGradientPresetsPath = i3131[33]
  request.r(i3131[34], i3131[35], 0, i3130, 'm_defaultStyleSheet')
  i3130.m_StyleSheetsResourcePath = i3131[36]
  request.r(i3131[37], i3131[38], 0, i3130, 'm_leadingCharacters')
  request.r(i3131[39], i3131[40], 0, i3130, 'm_followingCharacters')
  i3130.m_UseModernHangulLineBreakingRules = !!i3131[41]
  return i3130
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3140 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3141 = data
  var i3143 = i3141[0]
  var i3142 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.add(request.d('TMPro.TMP_Style', i3143[i + 0]));
  }
  i3140.m_StyleList = i3142
  return i3140
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3146 = root || request.c( 'TMPro.TMP_Style' )
  var i3147 = data
  i3146.m_Name = i3147[0]
  i3146.m_HashCode = i3147[1]
  i3146.m_OpeningDefinition = i3147[2]
  i3146.m_ClosingDefinition = i3147[3]
  i3146.m_OpeningTagArray = i3147[4]
  i3146.m_ClosingTagArray = i3147[5]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3149 = data
  var i3151 = i3149[0]
  var i3150 = []
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3151[i + 0]) );
  }
  i3148.files = i3150
  i3148.componentToPrefabIds = i3149[1]
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3155 = data
  i3154.path = i3155[0]
  request.r(i3155[1], i3155[2], 0, i3154, 'unityObject')
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3157 = data
  var i3159 = i3157[0]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3159[i + 0]) );
  }
  i3156.scriptsExecutionOrder = i3158
  var i3161 = i3157[1]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3161[i + 0]) );
  }
  i3156.sortingLayers = i3160
  var i3163 = i3157[2]
  var i3162 = []
  for(var i = 0; i < i3163.length; i += 1) {
    i3162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3163[i + 0]) );
  }
  i3156.cullingLayers = i3162
  i3156.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3157[3], i3156.timeSettings)
  i3156.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3157[4], i3156.physicsSettings)
  i3156.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3157[5], i3156.physics2DSettings)
  i3156.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3157[6], i3156.qualitySettings)
  i3156.enableRealtimeShadows = !!i3157[7]
  i3156.enableAutoInstancing = !!i3157[8]
  i3156.enableStaticBatching = !!i3157[9]
  i3156.enableDynamicBatching = !!i3157[10]
  i3156.usePreservativeDynamicBatching = !!i3157[11]
  i3156.lightmapEncodingQuality = i3157[12]
  i3156.desiredColorSpace = i3157[13]
  var i3165 = i3157[14]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 1) {
    i3164.push( i3165[i + 0] );
  }
  i3156.allTags = i3164
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3169 = data
  i3168.name = i3169[0]
  i3168.value = i3169[1]
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3173 = data
  i3172.id = i3173[0]
  i3172.name = i3173[1]
  i3172.value = i3173[2]
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3177 = data
  i3176.id = i3177[0]
  i3176.name = i3177[1]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3179 = data
  i3178.fixedDeltaTime = i3179[0]
  i3178.maximumDeltaTime = i3179[1]
  i3178.timeScale = i3179[2]
  i3178.maximumParticleTimestep = i3179[3]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3181 = data
  i3180.gravity = new pc.Vec3( i3181[0], i3181[1], i3181[2] )
  i3180.defaultSolverIterations = i3181[3]
  i3180.bounceThreshold = i3181[4]
  i3180.autoSyncTransforms = !!i3181[5]
  i3180.autoSimulation = !!i3181[6]
  var i3183 = i3181[7]
  var i3182 = []
  for(var i = 0; i < i3183.length; i += 1) {
    i3182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3183[i + 0]) );
  }
  i3180.collisionMatrix = i3182
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3187 = data
  i3186.enabled = !!i3187[0]
  i3186.layerId = i3187[1]
  i3186.otherLayerId = i3187[2]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3189 = data
  request.r(i3189[0], i3189[1], 0, i3188, 'material')
  i3188.gravity = new pc.Vec2( i3189[2], i3189[3] )
  i3188.positionIterations = i3189[4]
  i3188.velocityIterations = i3189[5]
  i3188.velocityThreshold = i3189[6]
  i3188.maxLinearCorrection = i3189[7]
  i3188.maxAngularCorrection = i3189[8]
  i3188.maxTranslationSpeed = i3189[9]
  i3188.maxRotationSpeed = i3189[10]
  i3188.baumgarteScale = i3189[11]
  i3188.baumgarteTOIScale = i3189[12]
  i3188.timeToSleep = i3189[13]
  i3188.linearSleepTolerance = i3189[14]
  i3188.angularSleepTolerance = i3189[15]
  i3188.defaultContactOffset = i3189[16]
  i3188.autoSimulation = !!i3189[17]
  i3188.queriesHitTriggers = !!i3189[18]
  i3188.queriesStartInColliders = !!i3189[19]
  i3188.callbacksOnDisable = !!i3189[20]
  i3188.reuseCollisionCallbacks = !!i3189[21]
  i3188.autoSyncTransforms = !!i3189[22]
  var i3191 = i3189[23]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3191[i + 0]) );
  }
  i3188.collisionMatrix = i3190
  return i3188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3195 = data
  i3194.enabled = !!i3195[0]
  i3194.layerId = i3195[1]
  i3194.otherLayerId = i3195[2]
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3197 = data
  var i3199 = i3197[0]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3199[i + 0]) );
  }
  i3196.qualityLevels = i3198
  var i3201 = i3197[1]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( i3201[i + 0] );
  }
  i3196.names = i3200
  i3196.shadows = i3197[2]
  i3196.anisotropicFiltering = i3197[3]
  i3196.antiAliasing = i3197[4]
  i3196.lodBias = i3197[5]
  i3196.shadowCascades = i3197[6]
  i3196.shadowDistance = i3197[7]
  i3196.shadowmaskMode = i3197[8]
  i3196.shadowProjection = i3197[9]
  i3196.shadowResolution = i3197[10]
  i3196.softParticles = !!i3197[11]
  i3196.softVegetation = !!i3197[12]
  i3196.activeColorSpace = i3197[13]
  i3196.desiredColorSpace = i3197[14]
  i3196.masterTextureLimit = i3197[15]
  i3196.maxQueuedFrames = i3197[16]
  i3196.particleRaycastBudget = i3197[17]
  i3196.pixelLightCount = i3197[18]
  i3196.realtimeReflectionProbes = !!i3197[19]
  i3196.shadowCascade2Split = i3197[20]
  i3196.shadowCascade4Split = new pc.Vec3( i3197[21], i3197[22], i3197[23] )
  i3196.streamingMipmapsActive = !!i3197[24]
  i3196.vSyncCount = i3197[25]
  i3196.asyncUploadBufferSize = i3197[26]
  i3196.asyncUploadTimeSlice = i3197[27]
  i3196.billboardsFaceCameraPosition = !!i3197[28]
  i3196.shadowNearPlaneOffset = i3197[29]
  i3196.streamingMipmapsMemoryBudget = i3197[30]
  i3196.maximumLODLevel = i3197[31]
  i3196.streamingMipmapsAddAllCameras = !!i3197[32]
  i3196.streamingMipmapsMaxLevelReduction = i3197[33]
  i3196.streamingMipmapsRenderersPerFrame = i3197[34]
  i3196.resolutionScalingFixedDPIFactor = i3197[35]
  i3196.streamingMipmapsMaxFileIORequests = i3197[36]
  i3196.currentQualityLevel = i3197[37]
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3207 = data
  i3206.weight = i3207[0]
  i3206.vertices = i3207[1]
  i3206.normals = i3207[2]
  i3206.tangents = i3207[3]
  return i3206
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3208 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3209 = data
  request.r(i3209[0], i3209[1], 0, i3208, 'm_ObjectArgument')
  i3208.m_ObjectArgumentAssemblyTypeName = i3209[2]
  i3208.m_IntArgument = i3209[3]
  i3208.m_FloatArgument = i3209[4]
  i3208.m_StringArgument = i3209[5]
  i3208.m_BoolArgument = !!i3209[6]
  return i3208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i3211 = data
  i3210.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3211[0], i3210.Event)
  i3210.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i3211[1], i3210.filterSettings)
  i3210.overrideMaterialId = i3211[2]
  i3210.overrideMaterialPassIndex = i3211[3]
  i3210.overrideShaderId = i3211[4]
  i3210.overrideShaderPassIndex = i3211[5]
  i3210.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3211[6], i3210.overrideMode)
  i3210.overrideDepthState = !!i3211[7]
  i3210.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3211[8], i3210.depthCompareFunction)
  i3210.enableWrite = !!i3211[9]
  i3210.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i3211[10], i3210.stencilSettings)
  i3210.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i3211[11], i3210.cameraSettings)
  return i3210
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3212 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i3213 = data
  i3212.m_GlyphIndex = i3213[0]
  i3212.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i3213[1], i3212.m_GlyphValueRecord)
  return i3212
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i3214 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i3215 = data
  i3214.m_XCoordinate = i3215[0]
  i3214.m_YCoordinate = i3215[1]
  return i3214
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i3216 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i3217 = data
  i3216.m_XPositionAdjustment = i3217[0]
  i3216.m_YPositionAdjustment = i3217[1]
  return i3216
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3218 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3219 = data
  i3218.xPlacement = i3219[0]
  i3218.yPlacement = i3219[1]
  i3218.xAdvance = i3219[2]
  i3218.yAdvance = i3219[3]
  return i3218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i3220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i3221 = data
  i3220.Value = i3221[0]
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i3223 = data
  i3222.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3223[0], i3222.RenderQueueType)
  i3222.LayerMask = i3223[1]
  var i3225 = i3223[2]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( i3225[i + 0] );
  }
  i3222.PassNames = i3224
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i3227 = data
  i3226.overrideStencilState = !!i3227[0]
  i3226.stencilReference = i3227[1]
  i3226.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3227[2], i3226.stencilCompareFunctionValue)
  i3226.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3227[3], i3226.passOperationValue)
  i3226.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3227[4], i3226.failOperationValue)
  i3226.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3227[5], i3226.zFailOperationValue)
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i3228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i3229 = data
  i3228.overrideCamera = !!i3229[0]
  i3228.restoreCamera = !!i3229[1]
  i3228.offset = new pc.Vec4( i3229[2], i3229[3], i3229[4], i3229[5] )
  i3228.cameraFieldOfView = i3229[6]
  return i3228
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i3231 = data
  i3230.m_XPlacement = i3231[0]
  i3230.m_YPlacement = i3231[1]
  i3230.m_XAdvance = i3231[2]
  i3230.m_YAdvance = i3231[3]
  return i3230
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[18],"76":[19],"77":[8],"78":[8],"79":[8],"80":[8],"81":[8],"82":[8],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[19],"98":[5],"99":[100],"101":[100],"25":[24],"102":[30],"103":[12,5],"104":[105,106],"107":[105],"108":[30],"37":[36],"109":[25],"110":[24],"111":[19],"21":[19],"112":[113],"114":[24],"115":[5,24],"31":[24,32],"116":[24],"117":[32,24],"118":[5],"119":[32,24],"120":[24],"121":[122],"123":[122],"124":[122],"125":[24],"126":[24],"28":[25],"30":[32,24],"127":[24],"27":[25],"34":[24],"128":[24],"129":[24],"130":[24],"131":[24],"132":[24],"133":[24],"134":[24],"135":[24],"136":[32,24],"137":[24],"138":[24],"139":[24],"140":[24],"141":[32,24],"142":[24],"143":[36],"144":[36],"145":[36],"146":[36],"147":[19],"148":[19]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","CarController","UnityEngine.MeshRenderer","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","GuestController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.SkinnedMeshRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Image","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.UI.ContentSizeFitter","DAT.UI.FX.PulseEffect","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.InputActionAsset","UnityEngine.InputSystem.InputActionReference","GameManager","ColorPalette","GuestPath","SpawnManager","ParkingSlotManager","CarLineManager","BarrierController","UnityEngine.AudioClip","PlayerInteraction","GuestSpawnPos","VFXManager","DAT.Managers.AudioManager","UnityEngine.AudioSource","DAT.Core.ResponsiveManager","ParkingSlotController","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","DAT.UI.FX.RotationEffect","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","DAT.UI.FX.FadeEffect","DAT.Core.Optimization.MeshCombiner","DAT.Core.Optimization.ColliderSimplifier.EdgeColliderOptimizer","UnityEngine.PolygonCollider2D","UnityEngine.EdgeCollider2D","DAT.Core.Optimization.ColliderSimplifier.PolygonColliderOptimizer","DAT.Core.Motion.UIImageSpriteAnimation","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Light","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.66f2";

Deserializers.productName = "iKame Technical Test Bus Away";

Deserializers.lunaInitializationTime = "08/07/2026 08:45:30";

Deserializers.lunaDaysRunning = "1.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "PAA02_MoveLimit";

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

Deserializers.buildID = "6862e0a3-c0ad-44da-ab5c-f5d639e9f398";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

