var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.JointSpring' )
  var i2831 = data
  i2830.spring = i2831[0]
  i2830.damper = i2831[1]
  i2830.targetPosition = i2831[2]
  return i2830
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2832 = root || request.c( 'UnityEngine.JointMotor' )
  var i2833 = data
  i2832.m_TargetVelocity = i2833[0]
  i2832.m_Force = i2833[1]
  i2832.m_FreeSpin = i2833[2]
  return i2832
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2834 = root || request.c( 'UnityEngine.JointLimits' )
  var i2835 = data
  i2834.m_Min = i2835[0]
  i2834.m_Max = i2835[1]
  i2834.m_Bounciness = i2835[2]
  i2834.m_BounceMinVelocity = i2835[3]
  i2834.m_ContactDistance = i2835[4]
  i2834.minBounce = i2835[5]
  i2834.maxBounce = i2835[6]
  return i2834
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2836 = root || request.c( 'UnityEngine.JointDrive' )
  var i2837 = data
  i2836.m_PositionSpring = i2837[0]
  i2836.m_PositionDamper = i2837[1]
  i2836.m_MaximumForce = i2837[2]
  i2836.m_UseAcceleration = i2837[3]
  return i2836
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2838 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2839 = data
  i2838.m_Spring = i2839[0]
  i2838.m_Damper = i2839[1]
  return i2838
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2840 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2841 = data
  i2840.m_Limit = i2841[0]
  i2840.m_Bounciness = i2841[1]
  i2840.m_ContactDistance = i2841[2]
  return i2840
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2842 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2843 = data
  i2842.m_ExtremumSlip = i2843[0]
  i2842.m_ExtremumValue = i2843[1]
  i2842.m_AsymptoteSlip = i2843[2]
  i2842.m_AsymptoteValue = i2843[3]
  i2842.m_Stiffness = i2843[4]
  return i2842
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2844 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2845 = data
  i2844.m_LowerAngle = i2845[0]
  i2844.m_UpperAngle = i2845[1]
  return i2844
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2847 = data
  i2846.m_MotorSpeed = i2847[0]
  i2846.m_MaximumMotorTorque = i2847[1]
  return i2846
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2848 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2849 = data
  i2848.m_DampingRatio = i2849[0]
  i2848.m_Frequency = i2849[1]
  i2848.m_Angle = i2849[2]
  return i2848
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2850 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2851 = data
  i2850.m_LowerTranslation = i2851[0]
  i2850.m_UpperTranslation = i2851[1]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2852 = root || new pc.UnityMaterial()
  var i2853 = data
  i2852.name = i2853[0]
  request.r(i2853[1], i2853[2], 0, i2852, 'shader')
  i2852.renderQueue = i2853[3]
  i2852.enableInstancing = !!i2853[4]
  var i2855 = i2853[5]
  var i2854 = []
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2855[i + 0]) );
  }
  i2852.floatParameters = i2854
  var i2857 = i2853[6]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2857[i + 0]) );
  }
  i2852.colorParameters = i2856
  var i2859 = i2853[7]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2859[i + 0]) );
  }
  i2852.vectorParameters = i2858
  var i2861 = i2853[8]
  var i2860 = []
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2861[i + 0]) );
  }
  i2852.textureParameters = i2860
  var i2863 = i2853[9]
  var i2862 = []
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2863[i + 0]) );
  }
  i2852.materialFlags = i2862
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2867 = data
  i2866.name = i2867[0]
  i2866.value = i2867[1]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2871 = data
  i2870.name = i2871[0]
  i2870.value = new pc.Color(i2871[1], i2871[2], i2871[3], i2871[4])
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2875 = data
  i2874.name = i2875[0]
  i2874.value = new pc.Vec4( i2875[1], i2875[2], i2875[3], i2875[4] )
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2879 = data
  i2878.name = i2879[0]
  request.r(i2879[1], i2879[2], 0, i2878, 'value')
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2883 = data
  i2882.name = i2883[0]
  i2882.enabled = !!i2883[1]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2885 = data
  i2884.name = i2885[0]
  i2884.width = i2885[1]
  i2884.height = i2885[2]
  i2884.mipmapCount = i2885[3]
  i2884.anisoLevel = i2885[4]
  i2884.filterMode = i2885[5]
  i2884.hdr = !!i2885[6]
  i2884.format = i2885[7]
  i2884.wrapMode = i2885[8]
  i2884.alphaIsTransparency = !!i2885[9]
  i2884.alphaSource = i2885[10]
  i2884.graphicsFormat = i2885[11]
  i2884.sRGBTexture = !!i2885[12]
  i2884.desiredColorSpace = i2885[13]
  i2884.wrapU = i2885[14]
  i2884.wrapV = i2885[15]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2887 = data
  i2886.name = i2887[0]
  i2886.halfPrecision = !!i2887[1]
  i2886.useSimplification = !!i2887[2]
  i2886.useUInt32IndexFormat = !!i2887[3]
  i2886.vertexCount = i2887[4]
  i2886.aabb = i2887[5]
  var i2889 = i2887[6]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( !!i2889[i + 0] );
  }
  i2886.streams = i2888
  i2886.vertices = i2887[7]
  var i2891 = i2887[8]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2891[i + 0]) );
  }
  i2886.subMeshes = i2890
  var i2893 = i2887[9]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 16) {
    i2892.push( new pc.Mat4().setData(i2893[i + 0], i2893[i + 1], i2893[i + 2], i2893[i + 3],  i2893[i + 4], i2893[i + 5], i2893[i + 6], i2893[i + 7],  i2893[i + 8], i2893[i + 9], i2893[i + 10], i2893[i + 11],  i2893[i + 12], i2893[i + 13], i2893[i + 14], i2893[i + 15]) );
  }
  i2886.bindposes = i2892
  var i2895 = i2887[10]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2895[i + 0]) );
  }
  i2886.blendShapes = i2894
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2901 = data
  i2900.triangles = i2901[0]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2907 = data
  i2906.name = i2907[0]
  var i2909 = i2907[1]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2909[i + 0]) );
  }
  i2906.frames = i2908
  return i2906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2911 = data
  i2910.position = new pc.Vec3( i2911[0], i2911[1], i2911[2] )
  i2910.scale = new pc.Vec3( i2911[3], i2911[4], i2911[5] )
  i2910.rotation = new pc.Quat(i2911[6], i2911[7], i2911[8], i2911[9])
  return i2910
}

Deserializers["CarController"] = function (request, data, root) {
  var i2912 = root || request.c( 'CarController' )
  var i2913 = data
  i2912.carType = i2913[0]
  i2912.carCapacity = i2913[1]
  i2912.carColor = i2913[2]
  i2912.isFirstLine = !!i2913[3]
  i2912.isParked = !!i2913[4]
  i2912.isMoving = !!i2913[5]
  i2912.moveSpeed = i2913[6]
  i2912.rotateSpeed = i2913[7]
  i2912.pathLookAhead = i2913[8]
  i2912.parkRotationY = i2913[9]
  i2912.parkApproachDistance = i2913[10]
  request.r(i2913[11], i2913[12], 0, i2912, 'carBodyMeshRenderer')
  request.r(i2913[13], i2913[14], 0, i2912, 'carHoodMeshRenderer')
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2915 = data
  i2914.center = new pc.Vec3( i2915[0], i2915[1], i2915[2] )
  i2914.size = new pc.Vec3( i2915[3], i2915[4], i2915[5] )
  i2914.enabled = !!i2915[6]
  i2914.isTrigger = !!i2915[7]
  request.r(i2915[8], i2915[9], 0, i2914, 'material')
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2917 = data
  request.r(i2917[0], i2917[1], 0, i2916, 'sharedMesh')
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2919 = data
  request.r(i2919[0], i2919[1], 0, i2918, 'additionalVertexStreams')
  i2918.enabled = !!i2919[2]
  request.r(i2919[3], i2919[4], 0, i2918, 'sharedMaterial')
  var i2921 = i2919[5]
  var i2920 = []
  for(var i = 0; i < i2921.length; i += 2) {
  request.r(i2921[i + 0], i2921[i + 1], 2, i2920, '')
  }
  i2918.sharedMaterials = i2920
  i2918.receiveShadows = !!i2919[6]
  i2918.shadowCastingMode = i2919[7]
  i2918.sortingLayerID = i2919[8]
  i2918.sortingOrder = i2919[9]
  i2918.lightmapIndex = i2919[10]
  i2918.lightmapSceneIndex = i2919[11]
  i2918.lightmapScaleOffset = new pc.Vec4( i2919[12], i2919[13], i2919[14], i2919[15] )
  i2918.lightProbeUsage = i2919[16]
  i2918.reflectionProbeUsage = i2919[17]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2925 = data
  i2924.name = i2925[0]
  i2924.tagId = i2925[1]
  i2924.enabled = !!i2925[2]
  i2924.isStatic = !!i2925[3]
  i2924.layer = i2925[4]
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2927 = data
  i2926.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2927[0], i2926.main)
  i2926.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2927[1], i2926.colorBySpeed)
  i2926.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2927[2], i2926.colorOverLifetime)
  i2926.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2927[3], i2926.emission)
  i2926.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2927[4], i2926.rotationBySpeed)
  i2926.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2927[5], i2926.rotationOverLifetime)
  i2926.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2927[6], i2926.shape)
  i2926.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2927[7], i2926.sizeBySpeed)
  i2926.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2927[8], i2926.sizeOverLifetime)
  i2926.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2927[9], i2926.textureSheetAnimation)
  i2926.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2927[10], i2926.velocityOverLifetime)
  i2926.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2927[11], i2926.noise)
  i2926.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2927[12], i2926.inheritVelocity)
  i2926.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2927[13], i2926.forceOverLifetime)
  i2926.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2927[14], i2926.limitVelocityOverLifetime)
  i2926.useAutoRandomSeed = !!i2927[15]
  i2926.randomSeed = i2927[16]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2928 = root || new pc.ParticleSystemMain()
  var i2929 = data
  i2928.duration = i2929[0]
  i2928.loop = !!i2929[1]
  i2928.prewarm = !!i2929[2]
  i2928.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[3], i2928.startDelay)
  i2928.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[4], i2928.startLifetime)
  i2928.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[5], i2928.startSpeed)
  i2928.startSize3D = !!i2929[6]
  i2928.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[7], i2928.startSizeX)
  i2928.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[8], i2928.startSizeY)
  i2928.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[9], i2928.startSizeZ)
  i2928.startRotation3D = !!i2929[10]
  i2928.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[11], i2928.startRotationX)
  i2928.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[12], i2928.startRotationY)
  i2928.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[13], i2928.startRotationZ)
  i2928.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2929[14], i2928.startColor)
  i2928.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[15], i2928.gravityModifier)
  i2928.simulationSpace = i2929[16]
  request.r(i2929[17], i2929[18], 0, i2928, 'customSimulationSpace')
  i2928.simulationSpeed = i2929[19]
  i2928.useUnscaledTime = !!i2929[20]
  i2928.scalingMode = i2929[21]
  i2928.playOnAwake = !!i2929[22]
  i2928.maxParticles = i2929[23]
  i2928.emitterVelocityMode = i2929[24]
  i2928.stopAction = i2929[25]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2930 = root || new pc.MinMaxCurve()
  var i2931 = data
  i2930.mode = i2931[0]
  i2930.curveMin = new pc.AnimationCurve( { keys_flow: i2931[1] } )
  i2930.curveMax = new pc.AnimationCurve( { keys_flow: i2931[2] } )
  i2930.curveMultiplier = i2931[3]
  i2930.constantMin = i2931[4]
  i2930.constantMax = i2931[5]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2932 = root || new pc.MinMaxGradient()
  var i2933 = data
  i2932.mode = i2933[0]
  i2932.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2933[1], i2932.gradientMin)
  i2932.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2933[2], i2932.gradientMax)
  i2932.colorMin = new pc.Color(i2933[3], i2933[4], i2933[5], i2933[6])
  i2932.colorMax = new pc.Color(i2933[7], i2933[8], i2933[9], i2933[10])
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2935 = data
  i2934.mode = i2935[0]
  var i2937 = i2935[1]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2937[i + 0]) );
  }
  i2934.colorKeys = i2936
  var i2939 = i2935[2]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2939[i + 0]) );
  }
  i2934.alphaKeys = i2938
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2940 = root || new pc.ParticleSystemColorBySpeed()
  var i2941 = data
  i2940.enabled = !!i2941[0]
  i2940.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2941[1], i2940.color)
  i2940.range = new pc.Vec2( i2941[2], i2941[3] )
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2945 = data
  i2944.color = new pc.Color(i2945[0], i2945[1], i2945[2], i2945[3])
  i2944.time = i2945[4]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2949 = data
  i2948.alpha = i2949[0]
  i2948.time = i2949[1]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2950 = root || new pc.ParticleSystemColorOverLifetime()
  var i2951 = data
  i2950.enabled = !!i2951[0]
  i2950.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2951[1], i2950.color)
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2952 = root || new pc.ParticleSystemEmitter()
  var i2953 = data
  i2952.enabled = !!i2953[0]
  i2952.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[1], i2952.rateOverTime)
  i2952.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[2], i2952.rateOverDistance)
  var i2955 = i2953[3]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 1) {
    i2954.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2955[i + 0]) );
  }
  i2952.bursts = i2954
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2958 = root || new pc.ParticleSystemBurst()
  var i2959 = data
  i2958.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2959[0], i2958.count)
  i2958.cycleCount = i2959[1]
  i2958.minCount = i2959[2]
  i2958.maxCount = i2959[3]
  i2958.repeatInterval = i2959[4]
  i2958.time = i2959[5]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2960 = root || new pc.ParticleSystemRotationBySpeed()
  var i2961 = data
  i2960.enabled = !!i2961[0]
  i2960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2961[1], i2960.x)
  i2960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2961[2], i2960.y)
  i2960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2961[3], i2960.z)
  i2960.separateAxes = !!i2961[4]
  i2960.range = new pc.Vec2( i2961[5], i2961[6] )
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2962 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2963 = data
  i2962.enabled = !!i2963[0]
  i2962.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2963[1], i2962.x)
  i2962.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2963[2], i2962.y)
  i2962.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2963[3], i2962.z)
  i2962.separateAxes = !!i2963[4]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2964 = root || new pc.ParticleSystemShape()
  var i2965 = data
  i2964.enabled = !!i2965[0]
  i2964.shapeType = i2965[1]
  i2964.randomDirectionAmount = i2965[2]
  i2964.sphericalDirectionAmount = i2965[3]
  i2964.randomPositionAmount = i2965[4]
  i2964.alignToDirection = !!i2965[5]
  i2964.radius = i2965[6]
  i2964.radiusMode = i2965[7]
  i2964.radiusSpread = i2965[8]
  i2964.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2965[9], i2964.radiusSpeed)
  i2964.radiusThickness = i2965[10]
  i2964.angle = i2965[11]
  i2964.length = i2965[12]
  i2964.boxThickness = new pc.Vec3( i2965[13], i2965[14], i2965[15] )
  i2964.meshShapeType = i2965[16]
  request.r(i2965[17], i2965[18], 0, i2964, 'mesh')
  request.r(i2965[19], i2965[20], 0, i2964, 'meshRenderer')
  request.r(i2965[21], i2965[22], 0, i2964, 'skinnedMeshRenderer')
  i2964.useMeshMaterialIndex = !!i2965[23]
  i2964.meshMaterialIndex = i2965[24]
  i2964.useMeshColors = !!i2965[25]
  i2964.normalOffset = i2965[26]
  i2964.arc = i2965[27]
  i2964.arcMode = i2965[28]
  i2964.arcSpread = i2965[29]
  i2964.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2965[30], i2964.arcSpeed)
  i2964.donutRadius = i2965[31]
  i2964.position = new pc.Vec3( i2965[32], i2965[33], i2965[34] )
  i2964.rotation = new pc.Vec3( i2965[35], i2965[36], i2965[37] )
  i2964.scale = new pc.Vec3( i2965[38], i2965[39], i2965[40] )
  return i2964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2966 = root || new pc.ParticleSystemSizeBySpeed()
  var i2967 = data
  i2966.enabled = !!i2967[0]
  i2966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2967[1], i2966.x)
  i2966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2967[2], i2966.y)
  i2966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2967[3], i2966.z)
  i2966.separateAxes = !!i2967[4]
  i2966.range = new pc.Vec2( i2967[5], i2967[6] )
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2968 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2969 = data
  i2968.enabled = !!i2969[0]
  i2968.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2969[1], i2968.x)
  i2968.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2969[2], i2968.y)
  i2968.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2969[3], i2968.z)
  i2968.separateAxes = !!i2969[4]
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2970 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2971 = data
  i2970.enabled = !!i2971[0]
  i2970.mode = i2971[1]
  i2970.animation = i2971[2]
  i2970.numTilesX = i2971[3]
  i2970.numTilesY = i2971[4]
  i2970.useRandomRow = !!i2971[5]
  i2970.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2971[6], i2970.frameOverTime)
  i2970.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2971[7], i2970.startFrame)
  i2970.cycleCount = i2971[8]
  i2970.rowIndex = i2971[9]
  i2970.flipU = i2971[10]
  i2970.flipV = i2971[11]
  i2970.spriteCount = i2971[12]
  var i2973 = i2971[13]
  var i2972 = []
  for(var i = 0; i < i2973.length; i += 2) {
  request.r(i2973[i + 0], i2973[i + 1], 2, i2972, '')
  }
  i2970.sprites = i2972
  return i2970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2976 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2977 = data
  i2976.enabled = !!i2977[0]
  i2976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[1], i2976.x)
  i2976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[2], i2976.y)
  i2976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[3], i2976.z)
  i2976.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[4], i2976.radial)
  i2976.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[5], i2976.speedModifier)
  i2976.space = i2977[6]
  i2976.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[7], i2976.orbitalX)
  i2976.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[8], i2976.orbitalY)
  i2976.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[9], i2976.orbitalZ)
  i2976.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[10], i2976.orbitalOffsetX)
  i2976.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[11], i2976.orbitalOffsetY)
  i2976.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2977[12], i2976.orbitalOffsetZ)
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2978 = root || new pc.ParticleSystemNoise()
  var i2979 = data
  i2978.enabled = !!i2979[0]
  i2978.separateAxes = !!i2979[1]
  i2978.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[2], i2978.strengthX)
  i2978.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[3], i2978.strengthY)
  i2978.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[4], i2978.strengthZ)
  i2978.frequency = i2979[5]
  i2978.damping = !!i2979[6]
  i2978.octaveCount = i2979[7]
  i2978.octaveMultiplier = i2979[8]
  i2978.octaveScale = i2979[9]
  i2978.quality = i2979[10]
  i2978.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[11], i2978.scrollSpeed)
  i2978.scrollSpeedMultiplier = i2979[12]
  i2978.remapEnabled = !!i2979[13]
  i2978.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[14], i2978.remapX)
  i2978.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[15], i2978.remapY)
  i2978.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[16], i2978.remapZ)
  i2978.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[17], i2978.positionAmount)
  i2978.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[18], i2978.rotationAmount)
  i2978.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2979[19], i2978.sizeAmount)
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2980 = root || new pc.ParticleSystemInheritVelocity()
  var i2981 = data
  i2980.enabled = !!i2981[0]
  i2980.mode = i2981[1]
  i2980.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2981[2], i2980.curve)
  return i2980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2982 = root || new pc.ParticleSystemForceOverLifetime()
  var i2983 = data
  i2982.enabled = !!i2983[0]
  i2982.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[1], i2982.x)
  i2982.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[2], i2982.y)
  i2982.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2983[3], i2982.z)
  i2982.space = i2983[4]
  i2982.randomized = !!i2983[5]
  return i2982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2984 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2985 = data
  i2984.enabled = !!i2985[0]
  i2984.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2985[1], i2984.limit)
  i2984.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2985[2], i2984.limitX)
  i2984.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2985[3], i2984.limitY)
  i2984.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2985[4], i2984.limitZ)
  i2984.dampen = i2985[5]
  i2984.separateAxes = !!i2985[6]
  i2984.space = i2985[7]
  i2984.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2985[8], i2984.drag)
  i2984.multiplyDragByParticleSize = !!i2985[9]
  i2984.multiplyDragByParticleVelocity = !!i2985[10]
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2987 = data
  request.r(i2987[0], i2987[1], 0, i2986, 'mesh')
  i2986.meshCount = i2987[2]
  i2986.activeVertexStreamsCount = i2987[3]
  i2986.alignment = i2987[4]
  i2986.renderMode = i2987[5]
  i2986.sortMode = i2987[6]
  i2986.lengthScale = i2987[7]
  i2986.velocityScale = i2987[8]
  i2986.cameraVelocityScale = i2987[9]
  i2986.normalDirection = i2987[10]
  i2986.sortingFudge = i2987[11]
  i2986.minParticleSize = i2987[12]
  i2986.maxParticleSize = i2987[13]
  i2986.pivot = new pc.Vec3( i2987[14], i2987[15], i2987[16] )
  request.r(i2987[17], i2987[18], 0, i2986, 'trailMaterial')
  i2986.applyActiveColorSpace = !!i2987[19]
  i2986.enabled = !!i2987[20]
  request.r(i2987[21], i2987[22], 0, i2986, 'sharedMaterial')
  var i2989 = i2987[23]
  var i2988 = []
  for(var i = 0; i < i2989.length; i += 2) {
  request.r(i2989[i + 0], i2989[i + 1], 2, i2988, '')
  }
  i2986.sharedMaterials = i2988
  i2986.receiveShadows = !!i2987[24]
  i2986.shadowCastingMode = i2987[25]
  i2986.sortingLayerID = i2987[26]
  i2986.sortingOrder = i2987[27]
  i2986.lightmapIndex = i2987[28]
  i2986.lightmapSceneIndex = i2987[29]
  i2986.lightmapScaleOffset = new pc.Vec4( i2987[30], i2987[31], i2987[32], i2987[33] )
  i2986.lightProbeUsage = i2987[34]
  i2986.reflectionProbeUsage = i2987[35]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2991 = data
  i2990.color = new pc.Color(i2991[0], i2991[1], i2991[2], i2991[3])
  request.r(i2991[4], i2991[5], 0, i2990, 'sprite')
  i2990.flipX = !!i2991[6]
  i2990.flipY = !!i2991[7]
  i2990.drawMode = i2991[8]
  i2990.size = new pc.Vec2( i2991[9], i2991[10] )
  i2990.tileMode = i2991[11]
  i2990.adaptiveModeThreshold = i2991[12]
  i2990.maskInteraction = i2991[13]
  i2990.spriteSortPoint = i2991[14]
  i2990.enabled = !!i2991[15]
  request.r(i2991[16], i2991[17], 0, i2990, 'sharedMaterial')
  var i2993 = i2991[18]
  var i2992 = []
  for(var i = 0; i < i2993.length; i += 2) {
  request.r(i2993[i + 0], i2993[i + 1], 2, i2992, '')
  }
  i2990.sharedMaterials = i2992
  i2990.receiveShadows = !!i2991[19]
  i2990.shadowCastingMode = i2991[20]
  i2990.sortingLayerID = i2991[21]
  i2990.sortingOrder = i2991[22]
  i2990.lightmapIndex = i2991[23]
  i2990.lightmapSceneIndex = i2991[24]
  i2990.lightmapScaleOffset = new pc.Vec4( i2991[25], i2991[26], i2991[27], i2991[28] )
  i2990.lightProbeUsage = i2991[29]
  i2990.reflectionProbeUsage = i2991[30]
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2995 = data
  request.r(i2995[0], i2995[1], 0, i2994, 'animatorController')
  request.r(i2995[2], i2995[3], 0, i2994, 'avatar')
  i2994.updateMode = i2995[4]
  i2994.hasTransformHierarchy = !!i2995[5]
  i2994.applyRootMotion = !!i2995[6]
  var i2997 = i2995[7]
  var i2996 = []
  for(var i = 0; i < i2997.length; i += 2) {
  request.r(i2997[i + 0], i2997[i + 1], 2, i2996, '')
  }
  i2994.humanBones = i2996
  i2994.enabled = !!i2995[8]
  return i2994
}

Deserializers["GuestController"] = function (request, data, root) {
  var i3000 = root || request.c( 'GuestController' )
  var i3001 = data
  i3000.guestColor = i3001[0]
  request.r(i3001[1], i3001[2], 0, i3000, 'meshRendererBody')
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3003 = data
  request.r(i3003[0], i3003[1], 0, i3002, 'sharedMesh')
  var i3005 = i3003[2]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 2) {
  request.r(i3005[i + 0], i3005[i + 1], 2, i3004, '')
  }
  i3002.bones = i3004
  i3002.updateWhenOffscreen = !!i3003[3]
  i3002.localBounds = i3003[4]
  request.r(i3003[5], i3003[6], 0, i3002, 'rootBone')
  var i3007 = i3003[7]
  var i3006 = []
  for(var i = 0; i < i3007.length; i += 1) {
    i3006.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3007[i + 0]) );
  }
  i3002.blendShapesWeights = i3006
  i3002.enabled = !!i3003[8]
  request.r(i3003[9], i3003[10], 0, i3002, 'sharedMaterial')
  var i3009 = i3003[11]
  var i3008 = []
  for(var i = 0; i < i3009.length; i += 2) {
  request.r(i3009[i + 0], i3009[i + 1], 2, i3008, '')
  }
  i3002.sharedMaterials = i3008
  i3002.receiveShadows = !!i3003[12]
  i3002.shadowCastingMode = i3003[13]
  i3002.sortingLayerID = i3003[14]
  i3002.sortingOrder = i3003[15]
  i3002.lightmapIndex = i3003[16]
  i3002.lightmapSceneIndex = i3003[17]
  i3002.lightmapScaleOffset = new pc.Vec4( i3003[18], i3003[19], i3003[20], i3003[21] )
  i3002.lightProbeUsage = i3003[22]
  i3002.reflectionProbeUsage = i3003[23]
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3013 = data
  i3012.weight = i3013[0]
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3015 = data
  i3014.name = i3015[0]
  i3014.atlasId = i3015[1]
  i3014.mipmapCount = i3015[2]
  i3014.hdr = !!i3015[3]
  i3014.size = i3015[4]
  i3014.anisoLevel = i3015[5]
  i3014.filterMode = i3015[6]
  var i3017 = i3015[7]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 4) {
    i3016.push( UnityEngine.Rect.MinMaxRect(i3017[i + 0], i3017[i + 1], i3017[i + 2], i3017[i + 3]) );
  }
  i3014.rects = i3016
  i3014.wrapU = i3015[8]
  i3014.wrapV = i3015[9]
  return i3014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3021 = data
  i3020.name = i3021[0]
  i3020.index = i3021[1]
  i3020.startup = !!i3021[2]
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3023 = data
  i3022.aspect = i3023[0]
  i3022.orthographic = !!i3023[1]
  i3022.orthographicSize = i3023[2]
  i3022.backgroundColor = new pc.Color(i3023[3], i3023[4], i3023[5], i3023[6])
  i3022.nearClipPlane = i3023[7]
  i3022.farClipPlane = i3023[8]
  i3022.fieldOfView = i3023[9]
  i3022.depth = i3023[10]
  i3022.clearFlags = i3023[11]
  i3022.cullingMask = i3023[12]
  i3022.rect = i3023[13]
  request.r(i3023[14], i3023[15], 0, i3022, 'targetTexture')
  i3022.usePhysicalProperties = !!i3023[16]
  i3022.focalLength = i3023[17]
  i3022.sensorSize = new pc.Vec2( i3023[18], i3023[19] )
  i3022.lensShift = new pc.Vec2( i3023[20], i3023[21] )
  i3022.gateFit = i3023[22]
  i3022.commandBufferCount = i3023[23]
  i3022.cameraType = i3023[24]
  i3022.enabled = !!i3023[25]
  return i3022
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i3024 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i3025 = data
  i3024.m_RenderShadows = !!i3025[0]
  i3024.m_RequiresDepthTextureOption = i3025[1]
  i3024.m_RequiresOpaqueTextureOption = i3025[2]
  i3024.m_CameraType = i3025[3]
  var i3027 = i3025[4]
  var i3026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i3027.length; i += 2) {
  request.r(i3027[i + 0], i3027[i + 1], 1, i3026, '')
  }
  i3024.m_Cameras = i3026
  i3024.m_RendererIndex = i3025[5]
  i3024.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3025[6] )
  request.r(i3025[7], i3025[8], 0, i3024, 'm_VolumeTrigger')
  i3024.m_VolumeFrameworkUpdateModeOption = i3025[9]
  i3024.m_RenderPostProcessing = !!i3025[10]
  i3024.m_Antialiasing = i3025[11]
  i3024.m_AntialiasingQuality = i3025[12]
  i3024.m_StopNaN = !!i3025[13]
  i3024.m_Dithering = !!i3025[14]
  i3024.m_ClearDepth = !!i3025[15]
  i3024.m_AllowXRRendering = !!i3025[16]
  i3024.m_AllowHDROutput = !!i3025[17]
  i3024.m_UseScreenCoordOverride = !!i3025[18]
  i3024.m_ScreenSizeOverride = new pc.Vec4( i3025[19], i3025[20], i3025[21], i3025[22] )
  i3024.m_ScreenCoordScaleBias = new pc.Vec4( i3025[23], i3025[24], i3025[25], i3025[26] )
  i3024.m_RequiresDepthTexture = !!i3025[27]
  i3024.m_RequiresColorTexture = !!i3025[28]
  i3024.m_Version = i3025[29]
  i3024.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i3025[30], i3024.m_TaaSettings)
  return i3024
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i3030 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i3031 = data
  i3030.m_Quality = i3031[0]
  i3030.m_FrameInfluence = i3031[1]
  i3030.m_JitterScale = i3031[2]
  i3030.m_MipBias = i3031[3]
  i3030.m_VarianceClampScale = i3031[4]
  i3030.m_ContrastAdaptiveSharpening = i3031[5]
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3033 = data
  i3032.type = i3033[0]
  i3032.color = new pc.Color(i3033[1], i3033[2], i3033[3], i3033[4])
  i3032.cullingMask = i3033[5]
  i3032.intensity = i3033[6]
  i3032.range = i3033[7]
  i3032.spotAngle = i3033[8]
  i3032.shadows = i3033[9]
  i3032.shadowNormalBias = i3033[10]
  i3032.shadowBias = i3033[11]
  i3032.shadowStrength = i3033[12]
  i3032.shadowResolution = i3033[13]
  i3032.lightmapBakeType = i3033[14]
  i3032.renderMode = i3033[15]
  request.r(i3033[16], i3033[17], 0, i3032, 'cookie')
  i3032.cookieSize = i3033[18]
  i3032.shadowNearPlane = i3033[19]
  i3032.occlusionMaskChannel = i3033[20]
  i3032.isBaked = !!i3033[21]
  i3032.mixedLightingMode = i3033[22]
  i3032.enabled = !!i3033[23]
  return i3032
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i3034 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i3035 = data
  i3034.m_Version = i3035[0]
  i3034.m_UsePipelineSettings = !!i3035[1]
  i3034.m_AdditionalLightsShadowResolutionTier = i3035[2]
  i3034.m_LightLayerMask = i3035[3]
  i3034.m_RenderingLayers = i3035[4]
  i3034.m_CustomShadowLayers = !!i3035[5]
  i3034.m_ShadowLayerMask = i3035[6]
  i3034.m_ShadowRenderingLayers = i3035[7]
  i3034.m_LightCookieSize = new pc.Vec2( i3035[8], i3035[9] )
  i3034.m_LightCookieOffset = new pc.Vec2( i3035[10], i3035[11] )
  i3034.m_SoftShadowQuality = i3035[12]
  return i3034
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i3036 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i3037 = data
  i3036.priority = i3037[0]
  i3036.blendDistance = i3037[1]
  i3036.weight = i3037[2]
  request.r(i3037[3], i3037[4], 0, i3036, 'sharedProfile')
  i3036.m_IsGlobal = !!i3037[5]
  return i3036
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3038 = root || request.c( 'GameManager' )
  var i3039 = data
  request.r(i3039[0], i3039[1], 0, i3038, 'colorPalette')
  request.r(i3039[2], i3039[3], 0, i3038, 'guestPath')
  request.r(i3039[4], i3039[5], 0, i3038, 'spawnManager')
  request.r(i3039[6], i3039[7], 0, i3038, 'parkingSlotManager')
  request.r(i3039[8], i3039[9], 0, i3038, 'carLineManager')
  i3038.persistAcrossScenes = !!i3039[10]
  return i3038
}

Deserializers["PlayerInteraction"] = function (request, data, root) {
  var i3040 = root || request.c( 'PlayerInteraction' )
  var i3041 = data
  request.r(i3041[0], i3041[1], 0, i3040, 'raycastCamera')
  i3040.rayDistance = i3041[2]
  return i3040
}

Deserializers["SpawnManager"] = function (request, data, root) {
  var i3042 = root || request.c( 'SpawnManager' )
  var i3043 = data
  request.r(i3043[0], i3043[1], 0, i3042, 'car4Prefab')
  request.r(i3043[2], i3043[3], 0, i3042, 'car6Prefab')
  request.r(i3043[4], i3043[5], 0, i3042, 'car10Prefab')
  i3042.columnCount = i3043[6]
  i3042.firstLineZ = i3043[7]
  i3042.columnSpacing = i3043[8]
  i3042.spawnY = i3043[9]
  request.r(i3043[10], i3043[11], 0, i3042, 'carParent')
  i3042.safeDistanceCar4 = i3043[12]
  i3042.safeDistanceCar6 = i3043[13]
  i3042.safeDistanceCar10 = i3043[14]
  var i3045 = i3043[15]
  var i3044 = []
  for(var i = 0; i < i3045.length; i += 1) {
    i3044.push( request.d('CarSpawnData', i3045[i + 0]) );
  }
  i3042.column0 = i3044
  var i3047 = i3043[16]
  var i3046 = []
  for(var i = 0; i < i3047.length; i += 1) {
    i3046.push( request.d('CarSpawnData', i3047[i + 0]) );
  }
  i3042.column1 = i3046
  var i3049 = i3043[17]
  var i3048 = []
  for(var i = 0; i < i3049.length; i += 1) {
    i3048.push( request.d('CarSpawnData', i3049[i + 0]) );
  }
  i3042.column2 = i3048
  var i3051 = i3043[18]
  var i3050 = []
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.push( request.d('CarSpawnData', i3051[i + 0]) );
  }
  i3042.column3 = i3050
  var i3053 = i3043[19]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( request.d('CarSpawnData', i3053[i + 0]) );
  }
  i3042.column4 = i3052
  request.r(i3043[20], i3043[21], 0, i3042, 'guestPrefab')
  request.r(i3043[22], i3043[23], 0, i3042, 'guestParent')
  i3042.guestSpawnPosCount = i3043[24]
  i3042.guestSpacing = i3043[25]
  i3042.guestCurveRadius = i3043[26]
  var i3055 = i3043[27]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 2) {
  request.r(i3055[i + 0], i3055[i + 1], 2, i3054, '')
  }
  i3042.guestSpawnPositions = i3054
  var i3057 = i3043[28]
  var i3056 = []
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.push( request.d('GuestColorSpawnData', i3057[i + 0]) );
  }
  i3042.guestColors0 = i3056
  var i3059 = i3043[29]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.push( request.d('GuestColorSpawnData', i3059[i + 0]) );
  }
  i3042.guestColors1 = i3058
  var i3061 = i3043[30]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 1) {
    i3060.push( request.d('GuestColorSpawnData', i3061[i + 0]) );
  }
  i3042.guestColors2 = i3060
  var i3063 = i3043[31]
  var i3062 = []
  for(var i = 0; i < i3063.length; i += 1) {
    i3062.push( request.d('GuestColorSpawnData', i3063[i + 0]) );
  }
  i3042.guestColors3 = i3062
  return i3042
}

Deserializers["CarSpawnData"] = function (request, data, root) {
  var i3066 = root || request.c( 'CarSpawnData' )
  var i3067 = data
  i3066.carType = i3067[0]
  i3066.carColor = i3067[1]
  return i3066
}

Deserializers["GuestColorSpawnData"] = function (request, data, root) {
  var i3072 = root || request.c( 'GuestColorSpawnData' )
  var i3073 = data
  i3072.color = i3073[0]
  i3072.count = i3073[1]
  return i3072
}

Deserializers["CarLineManager"] = function (request, data, root) {
  var i3074 = root || request.c( 'CarLineManager' )
  var i3075 = data
  return i3074
}

Deserializers["GuestPath"] = function (request, data, root) {
  var i3076 = root || request.c( 'GuestPath' )
  var i3077 = data
  var i3079 = i3077[0]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 2) {
  request.r(i3079[i + 0], i3079[i + 1], 2, i3078, '')
  }
  i3076.waypoints = i3078
  return i3076
}

Deserializers["ParkingSlotManager"] = function (request, data, root) {
  var i3080 = root || request.c( 'ParkingSlotManager' )
  var i3081 = data
  var i3083 = i3081[0]
  var i3082 = []
  for(var i = 0; i < i3083.length; i += 2) {
  request.r(i3083[i + 0], i3083[i + 1], 2, i3082, '')
  }
  i3080.parkingSlots = i3082
  var i3085 = i3081[1]
  var i3084 = []
  for(var i = 0; i < i3085.length; i += 2) {
  request.r(i3085[i + 0], i3085[i + 1], 2, i3084, '')
  }
  i3080.parkingPath = i3084
  return i3080
}

Deserializers["ParkingSlotController"] = function (request, data, root) {
  var i3088 = root || request.c( 'ParkingSlotController' )
  var i3089 = data
  i3088.isParked = !!i3089[0]
  return i3088
}

Deserializers["GuestSpawnPos"] = function (request, data, root) {
  var i3090 = root || request.c( 'GuestSpawnPos' )
  var i3091 = data
  i3090.queueType = i3091[0]
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3093 = data
  i3092.ambientIntensity = i3093[0]
  i3092.reflectionIntensity = i3093[1]
  i3092.ambientMode = i3093[2]
  i3092.ambientLight = new pc.Color(i3093[3], i3093[4], i3093[5], i3093[6])
  i3092.ambientSkyColor = new pc.Color(i3093[7], i3093[8], i3093[9], i3093[10])
  i3092.ambientGroundColor = new pc.Color(i3093[11], i3093[12], i3093[13], i3093[14])
  i3092.ambientEquatorColor = new pc.Color(i3093[15], i3093[16], i3093[17], i3093[18])
  i3092.fogColor = new pc.Color(i3093[19], i3093[20], i3093[21], i3093[22])
  i3092.fogEndDistance = i3093[23]
  i3092.fogStartDistance = i3093[24]
  i3092.fogDensity = i3093[25]
  i3092.fog = !!i3093[26]
  request.r(i3093[27], i3093[28], 0, i3092, 'skybox')
  i3092.fogMode = i3093[29]
  var i3095 = i3093[30]
  var i3094 = []
  for(var i = 0; i < i3095.length; i += 1) {
    i3094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3095[i + 0]) );
  }
  i3092.lightmaps = i3094
  i3092.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3093[31], i3092.lightProbes)
  i3092.lightmapsMode = i3093[32]
  i3092.mixedBakeMode = i3093[33]
  i3092.environmentLightingMode = i3093[34]
  i3092.ambientProbe = new pc.SphericalHarmonicsL2(i3093[35])
  request.r(i3093[36], i3093[37], 0, i3092, 'customReflection')
  request.r(i3093[38], i3093[39], 0, i3092, 'defaultReflection')
  i3092.defaultReflectionMode = i3093[40]
  i3092.defaultReflectionResolution = i3093[41]
  i3092.sunLightObjectId = i3093[42]
  i3092.pixelLightCount = i3093[43]
  i3092.defaultReflectionHDR = !!i3093[44]
  i3092.hasLightDataAsset = !!i3093[45]
  i3092.hasManualGenerate = !!i3093[46]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3099 = data
  request.r(i3099[0], i3099[1], 0, i3098, 'lightmapColor')
  request.r(i3099[2], i3099[3], 0, i3098, 'lightmapDirection')
  request.r(i3099[4], i3099[5], 0, i3098, 'shadowMask')
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3100 = root || new UnityEngine.LightProbes()
  var i3101 = data
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i3108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i3109 = data
  i3108.AdditionalLightsRenderingMode = i3109[0]
  i3108.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i3109[1], i3108.LightRenderingMode)
  i3108.MainLightRenderingModeValue = i3109[2]
  i3108.SupportsMainLightShadows = !!i3109[3]
  i3108.MixedLightingSupported = !!i3109[4]
  i3108.MainLightShadowmapResolutionValue = i3109[5]
  i3108.SupportsSoftShadows = !!i3109[6]
  i3108.SoftShadowQualityValue = i3109[7]
  i3108.ShadowDistance = i3109[8]
  i3108.ShadowCascadeCount = i3109[9]
  i3108.Cascade2Split = i3109[10]
  i3108.Cascade3Split = new pc.Vec2( i3109[11], i3109[12] )
  i3108.Cascade4Split = new pc.Vec3( i3109[13], i3109[14], i3109[15] )
  i3108.CascadeBorder = i3109[16]
  i3108.ShadowDepthBias = i3109[17]
  i3108.ShadowNormalBias = i3109[18]
  i3108.RequireDepthTexture = !!i3109[19]
  i3108.RequireOpaqueTexture = !!i3109[20]
  i3108.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i3109[21], i3108.scriptableRendererData)
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i3111 = data
  i3110.Disabled = i3111[0]
  i3110.PerVertex = i3111[1]
  i3110.PerPixel = i3111[2]
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i3113 = data
  i3112.opaqueLayerMask = i3113[0]
  i3112.transparentLayerMask = i3113[1]
  var i3115 = i3113[2]
  var i3114 = []
  for(var i = 0; i < i3115.length; i += 1) {
    i3114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i3115[i + 0]) );
  }
  i3112.RenderObjectsFeatures = i3114
  i3112.name = i3113[3]
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i3118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i3119 = data
  i3118.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i3119[0], i3118.settings)
  i3118.name = i3119[1]
  i3118.typeName = i3119[2]
  return i3118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3121 = data
  var i3123 = i3121[0]
  var i3122 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3123.length; i += 1) {
    i3122.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3123[i + 0]));
  }
  i3120.ShaderCompilationErrors = i3122
  i3120.name = i3121[1]
  i3120.guid = i3121[2]
  var i3125 = i3121[3]
  var i3124 = []
  for(var i = 0; i < i3125.length; i += 1) {
    i3124.push( i3125[i + 0] );
  }
  i3120.shaderDefinedKeywords = i3124
  var i3127 = i3121[4]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3127[i + 0]) );
  }
  i3120.passes = i3126
  var i3129 = i3121[5]
  var i3128 = []
  for(var i = 0; i < i3129.length; i += 1) {
    i3128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3129[i + 0]) );
  }
  i3120.usePasses = i3128
  var i3131 = i3121[6]
  var i3130 = []
  for(var i = 0; i < i3131.length; i += 1) {
    i3130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3131[i + 0]) );
  }
  i3120.defaultParameterValues = i3130
  request.r(i3121[7], i3121[8], 0, i3120, 'unityFallbackShader')
  i3120.readDepth = !!i3121[9]
  i3120.hasDepthOnlyPass = !!i3121[10]
  i3120.isCreatedByShaderGraph = !!i3121[11]
  i3120.disableBatching = !!i3121[12]
  i3120.compiled = !!i3121[13]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3135 = data
  i3134.shaderName = i3135[0]
  i3134.errorMessage = i3135[1]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3140 = root || new pc.UnityShaderPass()
  var i3141 = data
  i3140.id = i3141[0]
  i3140.subShaderIndex = i3141[1]
  i3140.name = i3141[2]
  i3140.passType = i3141[3]
  i3140.grabPassTextureName = i3141[4]
  i3140.usePass = !!i3141[5]
  i3140.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[6], i3140.zTest)
  i3140.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[7], i3140.zWrite)
  i3140.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[8], i3140.culling)
  i3140.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3141[9], i3140.blending)
  i3140.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3141[10], i3140.alphaBlending)
  i3140.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[11], i3140.colorWriteMask)
  i3140.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[12], i3140.offsetUnits)
  i3140.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[13], i3140.offsetFactor)
  i3140.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[14], i3140.stencilRef)
  i3140.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[15], i3140.stencilReadMask)
  i3140.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3141[16], i3140.stencilWriteMask)
  i3140.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3141[17], i3140.stencilOp)
  i3140.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3141[18], i3140.stencilOpFront)
  i3140.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3141[19], i3140.stencilOpBack)
  var i3143 = i3141[20]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3143[i + 0]) );
  }
  i3140.tags = i3142
  var i3145 = i3141[21]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.push( i3145[i + 0] );
  }
  i3140.passDefinedKeywords = i3144
  var i3147 = i3141[22]
  var i3146 = []
  for(var i = 0; i < i3147.length; i += 1) {
    i3146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3147[i + 0]) );
  }
  i3140.passDefinedKeywordGroups = i3146
  var i3149 = i3141[23]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3149[i + 0]) );
  }
  i3140.variants = i3148
  var i3151 = i3141[24]
  var i3150 = []
  for(var i = 0; i < i3151.length; i += 1) {
    i3150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3151[i + 0]) );
  }
  i3140.excludedVariants = i3150
  i3140.hasDepthReader = !!i3141[25]
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3153 = data
  i3152.val = i3153[0]
  i3152.name = i3153[1]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3155 = data
  i3154.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3155[0], i3154.src)
  i3154.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3155[1], i3154.dst)
  i3154.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3155[2], i3154.op)
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3157 = data
  i3156.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3157[0], i3156.pass)
  i3156.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3157[1], i3156.fail)
  i3156.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3157[2], i3156.zFail)
  i3156.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3157[3], i3156.comp)
  return i3156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3161 = data
  i3160.name = i3161[0]
  i3160.value = i3161[1]
  return i3160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3165 = data
  var i3167 = i3165[0]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 1) {
    i3166.push( i3167[i + 0] );
  }
  i3164.keywords = i3166
  i3164.hasDiscard = !!i3165[1]
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3171 = data
  i3170.passId = i3171[0]
  i3170.subShaderIndex = i3171[1]
  var i3173 = i3171[2]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( i3173[i + 0] );
  }
  i3170.keywords = i3172
  i3170.vertexProgram = i3171[3]
  i3170.fragmentProgram = i3171[4]
  i3170.exportedForWebGl2 = !!i3171[5]
  i3170.readDepth = !!i3171[6]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3177 = data
  request.r(i3177[0], i3177[1], 0, i3176, 'shader')
  i3176.pass = i3177[2]
  return i3176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3181 = data
  i3180.name = i3181[0]
  i3180.type = i3181[1]
  i3180.value = new pc.Vec4( i3181[2], i3181[3], i3181[4], i3181[5] )
  i3180.textureValue = i3181[6]
  i3180.shaderPropertyFlag = i3181[7]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3183 = data
  i3182.name = i3183[0]
  request.r(i3183[1], i3183[2], 0, i3182, 'texture')
  i3182.aabb = i3183[3]
  i3182.vertices = i3183[4]
  i3182.triangles = i3183[5]
  i3182.textureRect = UnityEngine.Rect.MinMaxRect(i3183[6], i3183[7], i3183[8], i3183[9])
  i3182.packedRect = UnityEngine.Rect.MinMaxRect(i3183[10], i3183[11], i3183[12], i3183[13])
  i3182.border = new pc.Vec4( i3183[14], i3183[15], i3183[16], i3183[17] )
  i3182.transparency = i3183[18]
  i3182.bounds = i3183[19]
  i3182.pixelsPerUnit = i3183[20]
  i3182.textureWidth = i3183[21]
  i3182.textureHeight = i3183[22]
  i3182.nativeSize = new pc.Vec2( i3183[23], i3183[24] )
  i3182.pivot = new pc.Vec2( i3183[25], i3183[26] )
  i3182.textureRectOffset = new pc.Vec2( i3183[27], i3183[28] )
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3185 = data
  i3184.name = i3185[0]
  i3184.wrapMode = i3185[1]
  i3184.isLooping = !!i3185[2]
  i3184.length = i3185[3]
  var i3187 = i3185[4]
  var i3186 = []
  for(var i = 0; i < i3187.length; i += 1) {
    i3186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3187[i + 0]) );
  }
  i3184.curves = i3186
  var i3189 = i3185[5]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3189[i + 0]) );
  }
  i3184.events = i3188
  i3184.halfPrecision = !!i3185[6]
  i3184._frameRate = i3185[7]
  i3184.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3185[8], i3184.localBounds)
  i3184.hasMuscleCurves = !!i3185[9]
  var i3191 = i3185[10]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.push( i3191[i + 0] );
  }
  i3184.clipMuscleConstant = i3190
  i3184.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3185[11], i3184.clipBindingConstant)
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3195 = data
  i3194.path = i3195[0]
  i3194.hash = i3195[1]
  i3194.componentType = i3195[2]
  i3194.property = i3195[3]
  i3194.keys = i3195[4]
  var i3197 = i3195[5]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3197[i + 0]) );
  }
  i3194.objectReferenceKeys = i3196
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3201 = data
  i3200.time = i3201[0]
  request.r(i3201[1], i3201[2], 0, i3200, 'value')
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3205 = data
  i3204.functionName = i3205[0]
  i3204.floatParameter = i3205[1]
  i3204.intParameter = i3205[2]
  i3204.stringParameter = i3205[3]
  request.r(i3205[4], i3205[5], 0, i3204, 'objectReferenceParameter')
  i3204.time = i3205[6]
  return i3204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3207 = data
  i3206.center = new pc.Vec3( i3207[0], i3207[1], i3207[2] )
  i3206.extends = new pc.Vec3( i3207[3], i3207[4], i3207[5] )
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3211 = data
  var i3213 = i3211[0]
  var i3212 = []
  for(var i = 0; i < i3213.length; i += 1) {
    i3212.push( i3213[i + 0] );
  }
  i3210.genericBindings = i3212
  var i3215 = i3211[1]
  var i3214 = []
  for(var i = 0; i < i3215.length; i += 1) {
    i3214.push( i3215[i + 0] );
  }
  i3210.pptrCurveMapping = i3214
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3217 = data
  i3216.name = i3217[0]
  var i3219 = i3217[1]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 1) {
    i3218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3219[i + 0]) );
  }
  i3216.layers = i3218
  var i3221 = i3217[2]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3221[i + 0]) );
  }
  i3216.parameters = i3220
  i3216.animationClips = i3217[3]
  i3216.avatarUnsupported = i3217[4]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3225 = data
  i3224.name = i3225[0]
  i3224.defaultWeight = i3225[1]
  i3224.blendingMode = i3225[2]
  i3224.avatarMask = i3225[3]
  i3224.syncedLayerIndex = i3225[4]
  i3224.syncedLayerAffectsTiming = !!i3225[5]
  i3224.syncedLayers = i3225[6]
  i3224.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3225[7], i3224.stateMachine)
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3227 = data
  i3226.id = i3227[0]
  i3226.name = i3227[1]
  i3226.path = i3227[2]
  var i3229 = i3227[3]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 1) {
    i3228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3229[i + 0]) );
  }
  i3226.states = i3228
  var i3231 = i3227[4]
  var i3230 = []
  for(var i = 0; i < i3231.length; i += 1) {
    i3230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3231[i + 0]) );
  }
  i3226.machines = i3230
  var i3233 = i3227[5]
  var i3232 = []
  for(var i = 0; i < i3233.length; i += 1) {
    i3232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3233[i + 0]) );
  }
  i3226.entryStateTransitions = i3232
  var i3235 = i3227[6]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 1) {
    i3234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3235[i + 0]) );
  }
  i3226.exitStateTransitions = i3234
  var i3237 = i3227[7]
  var i3236 = []
  for(var i = 0; i < i3237.length; i += 1) {
    i3236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3237[i + 0]) );
  }
  i3226.anyStateTransitions = i3236
  i3226.defaultStateId = i3227[8]
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3241 = data
  i3240.id = i3241[0]
  i3240.name = i3241[1]
  i3240.cycleOffset = i3241[2]
  i3240.cycleOffsetParameter = i3241[3]
  i3240.cycleOffsetParameterActive = !!i3241[4]
  i3240.mirror = !!i3241[5]
  i3240.mirrorParameter = i3241[6]
  i3240.mirrorParameterActive = !!i3241[7]
  i3240.motionId = i3241[8]
  i3240.nameHash = i3241[9]
  i3240.fullPathHash = i3241[10]
  i3240.speed = i3241[11]
  i3240.speedParameter = i3241[12]
  i3240.speedParameterActive = !!i3241[13]
  i3240.tag = i3241[14]
  i3240.tagHash = i3241[15]
  i3240.writeDefaultValues = !!i3241[16]
  var i3243 = i3241[17]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 2) {
  request.r(i3243[i + 0], i3243[i + 1], 2, i3242, '')
  }
  i3240.behaviours = i3242
  var i3245 = i3241[18]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3245[i + 0]) );
  }
  i3240.transitions = i3244
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3251 = data
  i3250.fullPath = i3251[0]
  i3250.canTransitionToSelf = !!i3251[1]
  i3250.duration = i3251[2]
  i3250.exitTime = i3251[3]
  i3250.hasExitTime = !!i3251[4]
  i3250.hasFixedDuration = !!i3251[5]
  i3250.interruptionSource = i3251[6]
  i3250.offset = i3251[7]
  i3250.orderedInterruption = !!i3251[8]
  i3250.destinationStateId = i3251[9]
  i3250.isExit = !!i3251[10]
  i3250.mute = !!i3251[11]
  i3250.solo = !!i3251[12]
  var i3253 = i3251[13]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3253[i + 0]) );
  }
  i3250.conditions = i3252
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3259 = data
  i3258.destinationStateId = i3259[0]
  i3258.isExit = !!i3259[1]
  i3258.mute = !!i3259[2]
  i3258.solo = !!i3259[3]
  var i3261 = i3259[4]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3261[i + 0]) );
  }
  i3258.conditions = i3260
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3265 = data
  i3264.defaultBool = !!i3265[0]
  i3264.defaultFloat = i3265[1]
  i3264.defaultInt = i3265[2]
  i3264.name = i3265[3]
  i3264.nameHash = i3265[4]
  i3264.type = i3265[5]
  return i3264
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i3266 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i3267 = data
  var i3269 = i3267[0]
  var i3268 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i3269.length; i += 2) {
  request.r(i3269[i + 0], i3269[i + 1], 1, i3268, '')
  }
  i3266.components = i3268
  return i3266
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i3272 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i3273 = data
  i3272.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i3273[0], i3272.mode)
  i3272.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i3273[1], i3272.neutralHDRRangeReductionMode)
  i3272.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i3273[2], i3272.acesPreset)
  i3272.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3273[3], i3272.hueShiftAmount)
  i3272.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i3273[4], i3272.detectPaperWhite)
  i3272.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3273[5], i3272.paperWhite)
  i3272.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i3273[6], i3272.detectBrightnessLimits)
  i3272.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3273[7], i3272.minNits)
  i3272.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3273[8], i3272.maxNits)
  i3272.active = !!i3273[9]
  return i3272
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i3274 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i3275 = data
  i3274.m_Value = i3275[0]
  i3274.m_OverrideState = !!i3275[1]
  return i3274
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i3276 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i3277 = data
  i3276.m_Value = i3277[0]
  i3276.m_OverrideState = !!i3277[1]
  return i3276
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i3278 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i3279 = data
  i3278.m_Value = i3279[0]
  i3278.m_OverrideState = !!i3279[1]
  return i3278
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i3280 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i3281 = data
  i3280.m_Value = i3281[0]
  i3280.m_OverrideState = !!i3281[1]
  return i3280
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i3282 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i3283 = data
  i3282.m_Value = !!i3283[0]
  i3282.m_OverrideState = !!i3283[1]
  return i3282
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i3284 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i3285 = data
  i3284.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i3285[0], i3284.skipIterations)
  i3284.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i3285[1], i3284.threshold)
  i3284.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i3285[2], i3284.intensity)
  i3284.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3285[3], i3284.scatter)
  i3284.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i3285[4], i3284.clamp)
  i3284.tint = request.d('UnityEngine.Rendering.ColorParameter', i3285[5], i3284.tint)
  i3284.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i3285[6], i3284.highQualityFiltering)
  i3284.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i3285[7], i3284.downscale)
  i3284.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i3285[8], i3284.maxIterations)
  i3284.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i3285[9], i3284.dirtTexture)
  i3284.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i3285[10], i3284.dirtIntensity)
  i3284.active = !!i3285[11]
  return i3284
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i3286 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i3287 = data
  i3286.m_Value = i3287[0]
  i3286.m_OverrideState = !!i3287[1]
  return i3286
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i3288 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i3289 = data
  i3288.m_Value = i3289[0]
  i3288.m_OverrideState = !!i3289[1]
  return i3288
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i3290 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i3291 = data
  i3290.m_Value = new pc.Color(i3291[0], i3291[1], i3291[2], i3291[3])
  i3290.m_OverrideState = !!i3291[4]
  return i3290
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i3292 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i3293 = data
  i3292.m_Value = i3293[0]
  i3292.m_OverrideState = !!i3293[1]
  return i3292
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i3294 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i3295 = data
  i3294.dimension = i3295[0]
  request.r(i3295[1], i3295[2], 0, i3294, 'm_Value')
  i3294.m_OverrideState = !!i3295[3]
  return i3294
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i3296 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i3297 = data
  i3296.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i3297[0], i3296.mode)
  i3296.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i3297[1], i3296.quality)
  i3296.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3297[2], i3296.intensity)
  i3296.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3297[3], i3296.clamp)
  i3296.active = !!i3297[4]
  return i3296
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i3298 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i3299 = data
  i3298.m_Value = i3299[0]
  i3298.m_OverrideState = !!i3299[1]
  return i3298
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i3300 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i3301 = data
  i3300.m_Value = i3301[0]
  i3300.m_OverrideState = !!i3301[1]
  return i3300
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i3302 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i3303 = data
  i3302.color = request.d('UnityEngine.Rendering.ColorParameter', i3303[0], i3302.color)
  i3302.center = request.d('UnityEngine.Rendering.Vector2Parameter', i3303[1], i3302.center)
  i3302.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3303[2], i3302.intensity)
  i3302.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i3303[3], i3302.smoothness)
  i3302.rounded = request.d('UnityEngine.Rendering.BoolParameter', i3303[4], i3302.rounded)
  i3302.active = !!i3303[5]
  return i3302
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i3304 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i3305 = data
  i3304.m_Value = new pc.Vec2( i3305[0], i3305[1] )
  i3304.m_OverrideState = !!i3305[2]
  return i3304
}

Deserializers["ColorPalette"] = function (request, data, root) {
  var i3306 = root || request.c( 'ColorPalette' )
  var i3307 = data
  var i3309 = i3307[0]
  var i3308 = []
  for(var i = 0; i < i3309.length; i += 1) {
    i3308.push( request.d('ColorPalette+ColorEntry', i3309[i + 0]) );
  }
  i3306.entries = i3308
  return i3306
}

Deserializers["ColorPalette+ColorEntry"] = function (request, data, root) {
  var i3312 = root || request.c( 'ColorPalette+ColorEntry' )
  var i3313 = data
  i3312.color = i3313[0]
  request.r(i3313[1], i3313[2], 0, i3312, 'carMaterial')
  request.r(i3313[3], i3313[4], 0, i3312, 'carOutlineMaterial')
  request.r(i3313[5], i3313[6], 0, i3312, 'humanMaterial')
  return i3312
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3314 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3315 = data
  i3314.useSafeMode = !!i3315[0]
  i3314.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3315[1], i3314.safeModeOptions)
  i3314.timeScale = i3315[2]
  i3314.unscaledTimeScale = i3315[3]
  i3314.useSmoothDeltaTime = !!i3315[4]
  i3314.maxSmoothUnscaledTime = i3315[5]
  i3314.rewindCallbackMode = i3315[6]
  i3314.showUnityEditorReport = !!i3315[7]
  i3314.logBehaviour = i3315[8]
  i3314.drawGizmos = !!i3315[9]
  i3314.defaultRecyclable = !!i3315[10]
  i3314.defaultAutoPlay = i3315[11]
  i3314.defaultUpdateType = i3315[12]
  i3314.defaultTimeScaleIndependent = !!i3315[13]
  i3314.defaultEaseType = i3315[14]
  i3314.defaultEaseOvershootOrAmplitude = i3315[15]
  i3314.defaultEasePeriod = i3315[16]
  i3314.defaultAutoKill = !!i3315[17]
  i3314.defaultLoopType = i3315[18]
  i3314.debugMode = !!i3315[19]
  i3314.debugStoreTargetId = !!i3315[20]
  i3314.showPreviewPanel = !!i3315[21]
  i3314.storeSettingsLocation = i3315[22]
  i3314.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3315[23], i3314.modules)
  i3314.createASMDEF = !!i3315[24]
  i3314.showPlayingTweens = !!i3315[25]
  i3314.showPausedTweens = !!i3315[26]
  return i3314
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3316 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3317 = data
  i3316.logBehaviour = i3317[0]
  i3316.nestedTweenFailureBehaviour = i3317[1]
  return i3316
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3318 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3319 = data
  i3318.showPanel = !!i3319[0]
  i3318.audioEnabled = !!i3319[1]
  i3318.physicsEnabled = !!i3319[2]
  i3318.physics2DEnabled = !!i3319[3]
  i3318.spriteEnabled = !!i3319[4]
  i3318.uiEnabled = !!i3319[5]
  i3318.textMeshProEnabled = !!i3319[6]
  i3318.tk2DEnabled = !!i3319[7]
  i3318.deAudioEnabled = !!i3319[8]
  i3318.deUnityExtendedEnabled = !!i3319[9]
  i3318.epoOutlineEnabled = !!i3319[10]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3321 = data
  var i3323 = i3321[0]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3323[i + 0]) );
  }
  i3320.files = i3322
  i3320.componentToPrefabIds = i3321[1]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3327 = data
  i3326.path = i3327[0]
  request.r(i3327[1], i3327[2], 0, i3326, 'unityObject')
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3329 = data
  var i3331 = i3329[0]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 1) {
    i3330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3331[i + 0]) );
  }
  i3328.scriptsExecutionOrder = i3330
  var i3333 = i3329[1]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3333[i + 0]) );
  }
  i3328.sortingLayers = i3332
  var i3335 = i3329[2]
  var i3334 = []
  for(var i = 0; i < i3335.length; i += 1) {
    i3334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3335[i + 0]) );
  }
  i3328.cullingLayers = i3334
  i3328.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3329[3], i3328.timeSettings)
  i3328.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3329[4], i3328.physicsSettings)
  i3328.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3329[5], i3328.physics2DSettings)
  i3328.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3329[6], i3328.qualitySettings)
  i3328.enableRealtimeShadows = !!i3329[7]
  i3328.enableAutoInstancing = !!i3329[8]
  i3328.enableStaticBatching = !!i3329[9]
  i3328.enableDynamicBatching = !!i3329[10]
  i3328.usePreservativeDynamicBatching = !!i3329[11]
  i3328.lightmapEncodingQuality = i3329[12]
  i3328.desiredColorSpace = i3329[13]
  var i3337 = i3329[14]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( i3337[i + 0] );
  }
  i3328.allTags = i3336
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3341 = data
  i3340.name = i3341[0]
  i3340.value = i3341[1]
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3345 = data
  i3344.id = i3345[0]
  i3344.name = i3345[1]
  i3344.value = i3345[2]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3349 = data
  i3348.id = i3349[0]
  i3348.name = i3349[1]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3351 = data
  i3350.fixedDeltaTime = i3351[0]
  i3350.maximumDeltaTime = i3351[1]
  i3350.timeScale = i3351[2]
  i3350.maximumParticleTimestep = i3351[3]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3353 = data
  i3352.gravity = new pc.Vec3( i3353[0], i3353[1], i3353[2] )
  i3352.defaultSolverIterations = i3353[3]
  i3352.bounceThreshold = i3353[4]
  i3352.autoSyncTransforms = !!i3353[5]
  i3352.autoSimulation = !!i3353[6]
  var i3355 = i3353[7]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
    i3354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3355[i + 0]) );
  }
  i3352.collisionMatrix = i3354
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3359 = data
  i3358.enabled = !!i3359[0]
  i3358.layerId = i3359[1]
  i3358.otherLayerId = i3359[2]
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3361 = data
  request.r(i3361[0], i3361[1], 0, i3360, 'material')
  i3360.gravity = new pc.Vec2( i3361[2], i3361[3] )
  i3360.positionIterations = i3361[4]
  i3360.velocityIterations = i3361[5]
  i3360.velocityThreshold = i3361[6]
  i3360.maxLinearCorrection = i3361[7]
  i3360.maxAngularCorrection = i3361[8]
  i3360.maxTranslationSpeed = i3361[9]
  i3360.maxRotationSpeed = i3361[10]
  i3360.baumgarteScale = i3361[11]
  i3360.baumgarteTOIScale = i3361[12]
  i3360.timeToSleep = i3361[13]
  i3360.linearSleepTolerance = i3361[14]
  i3360.angularSleepTolerance = i3361[15]
  i3360.defaultContactOffset = i3361[16]
  i3360.autoSimulation = !!i3361[17]
  i3360.queriesHitTriggers = !!i3361[18]
  i3360.queriesStartInColliders = !!i3361[19]
  i3360.callbacksOnDisable = !!i3361[20]
  i3360.reuseCollisionCallbacks = !!i3361[21]
  i3360.autoSyncTransforms = !!i3361[22]
  var i3363 = i3361[23]
  var i3362 = []
  for(var i = 0; i < i3363.length; i += 1) {
    i3362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3363[i + 0]) );
  }
  i3360.collisionMatrix = i3362
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3367 = data
  i3366.enabled = !!i3367[0]
  i3366.layerId = i3367[1]
  i3366.otherLayerId = i3367[2]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3369 = data
  var i3371 = i3369[0]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3371[i + 0]) );
  }
  i3368.qualityLevels = i3370
  var i3373 = i3369[1]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( i3373[i + 0] );
  }
  i3368.names = i3372
  i3368.shadows = i3369[2]
  i3368.anisotropicFiltering = i3369[3]
  i3368.antiAliasing = i3369[4]
  i3368.lodBias = i3369[5]
  i3368.shadowCascades = i3369[6]
  i3368.shadowDistance = i3369[7]
  i3368.shadowmaskMode = i3369[8]
  i3368.shadowProjection = i3369[9]
  i3368.shadowResolution = i3369[10]
  i3368.softParticles = !!i3369[11]
  i3368.softVegetation = !!i3369[12]
  i3368.activeColorSpace = i3369[13]
  i3368.desiredColorSpace = i3369[14]
  i3368.masterTextureLimit = i3369[15]
  i3368.maxQueuedFrames = i3369[16]
  i3368.particleRaycastBudget = i3369[17]
  i3368.pixelLightCount = i3369[18]
  i3368.realtimeReflectionProbes = !!i3369[19]
  i3368.shadowCascade2Split = i3369[20]
  i3368.shadowCascade4Split = new pc.Vec3( i3369[21], i3369[22], i3369[23] )
  i3368.streamingMipmapsActive = !!i3369[24]
  i3368.vSyncCount = i3369[25]
  i3368.asyncUploadBufferSize = i3369[26]
  i3368.asyncUploadTimeSlice = i3369[27]
  i3368.billboardsFaceCameraPosition = !!i3369[28]
  i3368.shadowNearPlaneOffset = i3369[29]
  i3368.streamingMipmapsMemoryBudget = i3369[30]
  i3368.maximumLODLevel = i3369[31]
  i3368.streamingMipmapsAddAllCameras = !!i3369[32]
  i3368.streamingMipmapsMaxLevelReduction = i3369[33]
  i3368.streamingMipmapsRenderersPerFrame = i3369[34]
  i3368.resolutionScalingFixedDPIFactor = i3369[35]
  i3368.streamingMipmapsMaxFileIORequests = i3369[36]
  i3368.currentQualityLevel = i3369[37]
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3379 = data
  i3378.weight = i3379[0]
  i3378.vertices = i3379[1]
  i3378.normals = i3379[2]
  i3378.tangents = i3379[3]
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i3381 = data
  i3380.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3381[0], i3380.Event)
  i3380.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i3381[1], i3380.filterSettings)
  i3380.overrideMaterialId = i3381[2]
  i3380.overrideMaterialPassIndex = i3381[3]
  i3380.overrideShaderId = i3381[4]
  i3380.overrideShaderPassIndex = i3381[5]
  i3380.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3381[6], i3380.overrideMode)
  i3380.overrideDepthState = !!i3381[7]
  i3380.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3381[8], i3380.depthCompareFunction)
  i3380.enableWrite = !!i3381[9]
  i3380.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i3381[10], i3380.stencilSettings)
  i3380.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i3381[11], i3380.cameraSettings)
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3385 = data
  i3384.mode = i3385[0]
  i3384.parameter = i3385[1]
  i3384.threshold = i3385[2]
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i3387 = data
  i3386.Value = i3387[0]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i3389 = data
  i3388.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3389[0], i3388.RenderQueueType)
  i3388.LayerMask = i3389[1]
  var i3391 = i3389[2]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.push( i3391[i + 0] );
  }
  i3388.PassNames = i3390
  return i3388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i3392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i3393 = data
  i3392.overrideStencilState = !!i3393[0]
  i3392.stencilReference = i3393[1]
  i3392.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3393[2], i3392.stencilCompareFunctionValue)
  i3392.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3393[3], i3392.passOperationValue)
  i3392.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3393[4], i3392.failOperationValue)
  i3392.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i3393[5], i3392.zFailOperationValue)
  return i3392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i3394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i3395 = data
  i3394.overrideCamera = !!i3395[0]
  i3394.restoreCamera = !!i3395[1]
  i3394.offset = new pc.Vec4( i3395[2], i3395[3], i3395[4], i3395[5] )
  i3394.cameraFieldOfView = i3395[6]
  return i3394
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[17],"49":[18],"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[58],"66":[58],"67":[58],"68":[58],"69":[58],"70":[58],"71":[18],"72":[5],"73":[74],"75":[74],"76":[77],"78":[79],"80":[7,5],"81":[82,83],"84":[82],"85":[79],"86":[87],"88":[76],"89":[77],"90":[18],"20":[18],"22":[21],"91":[77],"92":[5,77],"93":[77,94],"95":[77],"96":[94,77],"97":[5],"98":[94,77],"99":[77],"100":[101],"102":[101],"103":[101],"104":[77],"105":[77],"106":[76],"79":[94,77],"107":[77],"108":[76],"109":[77],"110":[77],"111":[77],"112":[77],"113":[77],"114":[77],"115":[77],"116":[77],"117":[77],"118":[94,77],"119":[77],"120":[77],"121":[77],"122":[77],"123":[94,77],"124":[77],"125":[87],"126":[87],"127":[87],"128":[87],"129":[18],"130":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","CarController","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.SpriteRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","GuestController","UnityEngine.SkinnedMeshRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","GameManager","ColorPalette","GuestPath","SpawnManager","ParkingSlotManager","CarLineManager","PlayerInteraction","UnityEngine.GameObject","GuestSpawnPos","ParkingSlotController","UnityEngine.Cubemap","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","DAT.UI.FX.FadeEffect","UnityEngine.UI.Image","DAT.Core.Optimization.MeshCombiner","DAT.Core.Optimization.ColliderSimplifier.EdgeColliderOptimizer","UnityEngine.PolygonCollider2D","UnityEngine.EdgeCollider2D","DAT.Core.Optimization.ColliderSimplifier.PolygonColliderOptimizer","DAT.Core.Motion.UIImageSpriteAnimation","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.66f2";

Deserializers.productName = "iKame Technical Test Bus Away";

Deserializers.lunaInitializationTime = "08/07/2026 08:45:30";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4116";

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

Deserializers.buildID = "5f157d4e-b931-4566-a77e-cb293c62f99d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","AI","Navigation","NavMeshModifierVolume","ClearNavMeshModifiers"],["Unity","AI","Navigation","NavMeshLink","ClearTrackedList"],["Unity","AI","Navigation","NavMeshSurface","ClearNavMeshSurfaces"],["Unity","AI","Navigation","NavMeshModifier","ClearNavMeshModifiers"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

