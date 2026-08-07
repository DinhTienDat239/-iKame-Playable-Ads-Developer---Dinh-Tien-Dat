if ( TRACE ) { TRACE( JSON.parse( '["CarController#init","CarController#Awake","CarController#Update","CarController#CheckAheadCollision","CarController#Init","CarController#SetHoodActive","CarController#ScaleSeatsToZero","CarController#TryPickupFromSpawnPos","CarController#PickupNextGuest","CarController#OnGuestJumpComplete","CarController#OnPickupDelayComplete","CarController#EndPickup","CarController#GetSeatTransform","CarController#SetActiveMoveSpeed","CarController#OnSpeedTweenUpdate","CarController#OnSpeedTweenComplete","CarController#KillSpeedTween","CarController#ApplyTweenSpeed","CarController#GoInLine","CarController#GoForGuest","CarController#GoFromParking","CarController#ReleaseParkingSlot","CarController#MoveInQueue","CarController#OnQueueMoveComplete","CarController#RunGoInLineStep","CarController#OnReachParkingTurnPoint","CarController#OnGoInLineGuestPathComplete","CarController#OnFromParkingGuestPathComplete","CarController#TryAssignParkingSlotAfterGuestPath","CarController#HandleParkingFail","CarController#IsFullCapacity","CarController#RunFullCapacityExit","CarController#MoveFullCapacityExit","CarController#CheckFullExitSpeedBoost","CarController#PlayCarBodyBoostTilt","CarController#PlayCarBodyParkBrakeTilt","CarController#OnBodyPitchUpdate","CarController#UpdateCarBodyTurnSway","CarController#ApplyCarBodyLocalRotation","CarController#KillCarBodyTiltTween","CarController#GetCarBodyTransform","CarController#HasReachedFullExitBoostPoint","CarController#OnCarExitFull","CarController#AdvanceGoInLineStep","CarController#RunFromParkingStep","CarController#AdvanceFromParkingStep","CarController#OnParkedComplete","CarController#MoveIntoParkingSlot","CarController#MoveToPointReverse","CarController#OnMoveReverseComplete","CarController#OnGuestPathFinishedAlone","CarController#PlayGuestPath","CarController#MoveAlongPoints","CarController#MoveToPoint","CarController#SmoothLookAtCurrentTarget","CarController#GetGuestEntryPoint","CarController#GetParkForward","CarController#GetParkApproachPoint","CarController#TryIntersectLinesXZ","CarController#GetPointOnSegmentByX","CarController#BuildRouteFromCurrent","CarController#KillMoveTween","CarController#OnDisable","CarLineManager#ResetLines","CarLineManager#ClearLines","CarLineManager#RegisterCar","CarLineManager#NotifyCarDeparted","CarLineManager#AdvanceColumn","CarLineManager#FindColumnIndex","ColorPalette#GetCarMaterial","ColorPalette#GetCarOutlineMaterial","ColorPalette#GetHumanMaterial","ColorPalette.ColorEntry#getDefaultValue","ColorPalette.ColorEntry#ctor","ColorPalette.ColorEntry#getHashCode","ColorPalette.ColorEntry#equals","ColorPalette.ColorEntry#$clone","DAT.Core.AspectCameraValues#getDefaultValue","DAT.Core.AspectCameraValues#$ctor1","DAT.Core.AspectCameraValues#ctor","DAT.Core.AspectCameraValues#getHashCode","DAT.Core.AspectCameraValues#equals","DAT.Core.AspectCameraValues#$clone","DAT.Core.DesignPatterns.Singleton$1#HasInstance#get","DAT.Core.DesignPatterns.Singleton$1#Instance#get","DAT.Core.DesignPatterns.Singleton$1#init","DAT.Core.DesignPatterns.Singleton$1#init","DAT.Core.DesignPatterns.Singleton$1#Awake","DAT.Core.DesignPatterns.Singleton$1#OnApplicationQuit","DAT.Core.DesignPatterns.Singleton$1#OnDestroy","DAT.Core.Optimization.SCU.SCUManager.Entry#getDefaultValue","DAT.Core.Optimization.SCU.SCUManager.Entry#ctor","DAT.Core.Optimization.SCU.SCUManager.Entry#getHashCode","DAT.Core.Optimization.SCU.SCUManager.Entry#equals","DAT.Core.Optimization.SCU.SCUManager.Entry#$clone","DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#getDefaultValue","DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#IsValid#get","DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#$ctor1","DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#ctor","DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#Dispose","DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#getHashCode","DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#equals","DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#$clone","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","GuestColorSpawnData#init","GuestController#init","GuestController#Init","GuestController#JumpToSeat","GuestController#OnJumpToSeatComplete","GuestController#SetSit","GuestController#MoveToQueueSlot","GuestController#OnDisable","GuestPath#GetWaypointCount","GuestPath#HasWaypoints","GuestPath#GetFirstPosition","GuestPath#GetPositions","GuestSpawnPos#init","GuestSpawnPos#HasCarTriggered","GuestSpawnPos#MarkCarTriggered","GuestSpawnPos#ResetCarTrigger","GuestSpawnPos#RegisterGuest","GuestSpawnPos#GetFrontGuest","GuestSpawnPos#HasGuests","GuestSpawnPos#RemoveGuest","GuestSpawnPos#HasMatchingGuest","GuestSpawnPos#AdvanceQueue","GuestSpawnPos#UpdateGuestLeftDisplay","GuestSpawnPos#OnTriggerEnter","ParkingSlotManager#TrySendCar","ParkingSlotManager#GetFreeSlot","ParkingSlotManager#HasFreeSlot","PlayerInteraction#init","PlayerInteraction#Awake","PlayerInteraction#Update","SpawnManager#init","SpawnManager#GetFirstLineZ","SpawnManager#GetSafeDistanceForType","SpawnManager#SpawnCars","SpawnManager#ClearCars","SpawnManager#SpawnGuests","SpawnManager#ClearGuests","SpawnManager#ResetGuestTriggersForCar","SpawnManager#AreAllGuestSpawnPosEmpty","SpawnManager#GetColumn","SpawnManager#GetCarPrefab","SpawnManager#GetCapacity","SpawnManager#GetSafeDistance","SpawnManager#GetGuestQueueLocalOffset","SpawnManager#GetGuestQueueRotation","SpawnManager#GetGuestColors","SpawnManager#GetGuestLocalOffset","SpawnManager#GetGuestRotation","DAT.Core.Optimization.SCU.SCUManager#inherits","DAT.Core.Optimization.SCU.SCUManager#init","DAT.Core.Optimization.SCU.SCUManager#Awake","DAT.Core.Optimization.SCU.SCUManager#Update","DAT.Core.Optimization.SCU.SCUManager#LateUpdate","DAT.Core.Optimization.SCU.SCUManager#FixedUpdate","DAT.Core.Optimization.SCU.SCUManager#Register","DAT.Core.Optimization.SCU.SCUManager#Register$1","DAT.Core.Optimization.SCU.SCUManager#Register$2","DAT.Core.Optimization.SCU.SCUManager#Register$3","DAT.Core.Optimization.SCU.SCUManager#Register$4","DAT.Core.Optimization.SCU.SCUManager#Unregister","DAT.Core.Optimization.SCU.SCUManager#RegisterInternal","DAT.Core.Optimization.SCU.SCUManager#Tick","DAT.Core.Optimization.SCU.SCUManager#FlushPending","DAT.Core.Optimization.SCU.SCUManager#AddNow","DAT.Core.Optimization.SCU.SCUManager#RemoveNow","DAT.Core.Optimization.SCU.SCUManager#GetList","DAT.Core.Optimization.SCU.SCUManager#AllocId","DAT.Core.ResponsiveManager#inherits","DAT.Core.ResponsiveManager#init","DAT.Core.ResponsiveManager#GetCompactAspect","DAT.Core.ResponsiveManager#LerpCameraValues","DAT.Core.ResponsiveManager#CurrentOrientation#get","DAT.Core.ResponsiveManager#init","DAT.Core.ResponsiveManager#Start","DAT.Core.ResponsiveManager#Awake","DAT.Core.ResponsiveManager#LateUpdate","DAT.Core.ResponsiveManager#EvaluateOrientation","DAT.Core.ResponsiveManager#DetermineOrientation","DAT.Core.ResponsiveManager#ToggleObjectsByOrientation","DAT.Core.ResponsiveManager#UpdateCanvasScaler","DAT.Core.ResponsiveManager#UpdateCamerasByAspect","DAT.Core.ResponsiveManager#SampleCameraValues","DAT.Core.ResponsiveManager#ForceEvaluate","DAT.Core.SEPManager#inherits","DAT.Core.SEPManager#Awake","DAT.Core.SEPManager#Start","DAT.Core.TutorialManager#inherits","DAT.Core.TutorialManager#init","DAT.Core.TutorialManager#Start","DAT.Core.TutorialManager#ShowTutorial","DAT.Core.TutorialManager#HideTutorial","DAT.Core.TutorialManager#HighlightObject","DAT.Core.TutorialManager#UnhighlightObject","DAT.Core.TutorialManager#HighlightNextObject","DAT.Core.TutorialManager#HighlightPreviousObject","DAT.Core.TutorialManager#RunHighlightIntensity","DAT.Core.TutorialManager#HighlightIntensityCoroutine","DAT.Managers.AudioManager#inherits","DAT.Managers.AudioManager#init","DAT.Managers.AudioManager#init","DAT.Managers.AudioManager#Awake","DAT.Managers.AudioManager#LoadVolumes","DAT.Managers.AudioManager#ApplyAllVolumes","DAT.Managers.AudioManager#PlayMusic","DAT.Managers.AudioManager#StopMusic","DAT.Managers.AudioManager#PauseMusic","DAT.Managers.AudioManager#ResumeMusic","DAT.Managers.AudioManager#PlaySFX","DAT.Managers.AudioManager#StopSFX","DAT.Managers.AudioManager#StopAllSFX","DAT.Managers.AudioManager#FindFreeSfxChannel","DAT.Managers.AudioManager#SetMasterVolume","DAT.Managers.AudioManager#SetMusicVolume","DAT.Managers.AudioManager#SetSfxVolume","DAT.Managers.AudioManager#SetMuteMaster","DAT.Managers.AudioManager#SetMuteMusic","DAT.Managers.AudioManager#SetMuteSfx","GameManager#inherits","GameManager#init","GameManager#Start","GameManager#Init","GameManager#CanStartMoving","GameManager#RegisterMovingCar","GameManager#UnregisterMovingCar","GameManager#CheckWinOnFullCapacity","GameManager#SetLose","GameManager#AddCarDone"]' ) ); }
/**
 * @version 1.0.9716.3685
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CarController start.*/
    Bridge.define("CarController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            carType: 0,
            carCapacity: 0,
            carColor: 0,
            isFirstLine: false,
            isParked: false,
            moveSpeed: 0,
            guestPickupSpeed: 0,
            speedTransitionDuration: 0,
            rotateSpeed: 0,
            pathLookAhead: 0,
            parkRotationY: 0,
            parkApproachDistance: 0,
            exitOffsetX: 0,
            fullExitSpeedMultiplier: 0,
            boostBodyTiltX: 0,
            boostBodyTiltDuration: 0,
            parkBrakeTiltX: 0,
            parkBrakeTiltInDuration: 0,
            parkBrakeTiltOutDuration: 0,
            turnSwayMaxZ: 0,
            turnSwayFactor: 0,
            turnSwayReturnSpeed: 0,
            collisionCheckDistance: 0,
            hoodCloseDuration: 0,
            hoodClosedStartScale: null,
            hoodCloseDropOffset: 0,
            seatTransforms: null,
            carBodyMeshRenderer: null,
            carHoodMeshRenderer: null,
            carBody: null,
            isMoving: false,
            currentPassengerCount: 0,
            moveTween: null,
            speedTween: null,
            speedTweenStart: 0,
            speedTweenTarget: 0,
            assignedSlot: null,
            parkingPath: null,
            goInLineStep: 0,
            fromParkingStep: 0,
            currentMoveTarget: null,
            activeMoveSpeed: 0,
            isPickingUp: false,
            isOnGuestPathRoute: false,
            pendingPickupSpawnPos: null,
            _isBlockedByAhead: false,
            _blockedTargetSpeed: 0,
            _isReversing: false,
            _pendingReverseCallback: null,
            isOutOfCarLine: false,
            hoodRestLocalPos: null,
            hoodRestLocalScale: null,
            hoodRestCached: false,
            hoodTween: null,
            isHoodClosed: false,
            fullExitSpeedBoostApplied: false,
            carBodyTiltTween: null,
            carBodyRestLocalEuler: null,
            carBodyRestCached: false,
            bodyPitchX: 0,
            bodySwayZ: 0,
            previousTurnYaw: 0,
            turnYawInitialized: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CarController#init", this ); }

                this.hoodClosedStartScale = new UnityEngine.Vector3();
                this.currentMoveTarget = new UnityEngine.Vector3();
                this.hoodRestLocalPos = new UnityEngine.Vector3();
                this.hoodRestLocalScale = new UnityEngine.Vector3();
                this.carBodyRestLocalEuler = new UnityEngine.Vector3();
                this.moveSpeed = 8.0;
                this.guestPickupSpeed = 2.0;
                this.speedTransitionDuration = 0.4;
                this.rotateSpeed = 12.0;
                this.pathLookAhead = 0.08;
                this.parkRotationY = -150.0;
                this.parkApproachDistance = 2.0;
                this.exitOffsetX = -10.0;
                this.fullExitSpeedMultiplier = 1.5;
                this.boostBodyTiltX = -7.0;
                this.boostBodyTiltDuration = 0.15;
                this.parkBrakeTiltX = 10.0;
                this.parkBrakeTiltInDuration = 0.12;
                this.parkBrakeTiltOutDuration = 0.28;
                this.turnSwayMaxZ = 7.0;
                this.turnSwayFactor = 0.045;
                this.turnSwayReturnSpeed = 10.0;
                this.collisionCheckDistance = 3.0;
                this.hoodCloseDuration = 0.25;
                this.hoodClosedStartScale = new pc.Vec3( 0.05, 0.05, 0.05 );
                this.hoodCloseDropOffset = 0.4;
                this.isOutOfCarLine = false;
            }
        },
        methods: {
            /*CarController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "CarController#Awake", this ); }

                this.GetCarBodyTransform();
            },
            /*CarController.Awake end.*/

            /*CarController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CarController#Update", this ); }

                this.UpdateCarBodyTurnSway();

                if (this.isMoving && this.isOutOfCarLine) {
                    this.CheckAheadCollision();
                }
            },
            /*CarController.Update end.*/

            /*CarController.CheckAheadCollision start.*/
            CheckAheadCollision: function () {
if ( TRACE ) { TRACE( "CarController#CheckAheadCollision", this ); }

                var dir = this.transform.forward.$clone();
                dir.y = 0.0;
                if (this._isReversing) {
                    dir = dir.$clone().scale( -1 );
                }
                if (dir.lengthSq() < 0.0001) {
                    return;
                }

                dir.normalize();

                var backwardOffset = 0.8;
                var rayOrigin = this.transform.position.$clone().sub( dir.$clone().clone().scale( backwardOffset ) );
                var totalRayDistance = this.collisionCheckDistance + backwardOffset;

                var hitInfo = { v : new UnityEngine.RaycastHit() };
                var isHit = UnityEngine.Physics.Raycast$3(rayOrigin, dir, hitInfo, totalRayDistance, UnityEngine.Physics.DefaultRaycastLayers, UnityEngine.QueryTriggerInteraction.Collide);


                if (isHit) {
                    var ahead = hitInfo.v.collider.GetComponentInParent(CarController);
                    if (UnityEngine.MonoBehaviour.op_Inequality(ahead, null) && UnityEngine.MonoBehaviour.op_Inequality(ahead, this) && !ahead.isParked && !ahead._isReversing) {
                        var targetSpeed;
                        if (ahead.isPickingUp) {
                            targetSpeed = this.guestPickupSpeed;
                        } else {
                            targetSpeed = 0.0;
                        }

                        // Chỉ apply khi lần đầu bị chặn, hoặc target speed thay đổi
                        if (!this._isBlockedByAhead || !UnityEngine.Mathf.Approximately(this._blockedTargetSpeed, targetSpeed)) {
                            this._isBlockedByAhead = true;
                            this._blockedTargetSpeed = targetSpeed;
                            this.SetActiveMoveSpeed(targetSpeed);
                        }
                        return;
                    }
                }

                if (this._isBlockedByAhead) {
                    this._isBlockedByAhead = false;
                    this._blockedTargetSpeed = 0.0;
                    this.SetActiveMoveSpeed(this.moveSpeed);
                }
            },
            /*CarController.CheckAheadCollision end.*/

            /*CarController.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "CarController#Init", this ); }

                var colorPalette = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.colorPalette;
                var carMat = colorPalette.GetCarMaterial(this.carColor);
                var outlineMat = colorPalette.GetCarOutlineMaterial(this.carColor);

                var bodyMaterials = System.Array.init(2, null, UnityEngine.Material);
                bodyMaterials[0] = carMat;
                bodyMaterials[1] = outlineMat;
                this.carBodyMeshRenderer.sharedMaterials = bodyMaterials;

                this.carHoodMeshRenderer.sharedMaterial = carMat;
                if (UnityEngine.Component.op_Inequality(this.carHoodMeshRenderer, null)) {
                    this.hoodRestLocalPos = this.carHoodMeshRenderer.transform.localPosition.$clone();
                    this.hoodRestLocalScale = this.carHoodMeshRenderer.transform.localScale.$clone();
                    this.hoodRestCached = true;
                    this.carHoodMeshRenderer.gameObject.SetActive(true);
                }
                this.isHoodClosed = true;
                this.currentPassengerCount = 0;
                this.activeMoveSpeed = this.moveSpeed;
            },
            /*CarController.Init end.*/

            /*CarController.SetHoodActive start.*/
            SetHoodActive: function (active) {
if ( TRACE ) { TRACE( "CarController#SetHoodActive", this ); }

                if (UnityEngine.Component.op_Equality(this.carHoodMeshRenderer, null)) {
                    return;
                }

                if (this.hoodTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.hoodTween);
                    this.hoodTween = null;
                }

                if (!active) {
                    this.isHoodClosed = false;
                    this.carHoodMeshRenderer.gameObject.SetActive(false);
                    return;
                }

                if (this.isHoodClosed) {
                    return;
                }

                if (!this.hoodRestCached) {
                    this.hoodRestLocalPos = this.carHoodMeshRenderer.transform.localPosition.$clone();
                    this.hoodRestLocalScale = this.carHoodMeshRenderer.transform.localScale.$clone();
                    this.hoodRestCached = true;
                }

                var hood = this.carHoodMeshRenderer.transform;
                hood.gameObject.SetActive(true);

                var startPos = this.hoodRestLocalPos.$clone();
                startPos.y = this.hoodRestLocalPos.y + this.hoodCloseDropOffset;
                hood.localPosition = startPos.$clone();
                hood.localScale = this.hoodClosedStartScale.$clone();

                var sequence = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOLocalMove(hood, this.hoodRestLocalPos.$clone(), this.hoodCloseDuration), DG.Tweening.Ease.OutQuad));
                DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(hood, this.hoodRestLocalScale.$clone(), this.hoodCloseDuration), DG.Tweening.Ease.OutBack));
                this.hoodTween = sequence;
                this.isHoodClosed = true;

                this.ScaleSeatsToZero();
            },
            /*CarController.SetHoodActive end.*/

            /*CarController.ScaleSeatsToZero start.*/
            ScaleSeatsToZero: function () {
if ( TRACE ) { TRACE( "CarController#ScaleSeatsToZero", this ); }

                if (this.seatTransforms == null) {
                    return;
                }

                var duration = this.hoodCloseDuration * 1.5;
                for (var i = 0; i < this.seatTransforms.length; i = (i + 1) | 0) {
                    if (UnityEngine.Component.op_Equality(this.seatTransforms[i], null)) {
                        continue;
                    }

                    DG.Tweening.ShortcutExtensions.DOKill(this.seatTransforms[i]);
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.seatTransforms[i], pc.Vec3.ZERO.clone(), duration), DG.Tweening.Ease.InQuad);
                }
            },
            /*CarController.ScaleSeatsToZero end.*/

            /*CarController.TryPickupFromSpawnPos start.*/
            TryPickupFromSpawnPos: function (spawnPos) {
if ( TRACE ) { TRACE( "CarController#TryPickupFromSpawnPos", this ); }

                if (!this.isOnGuestPathRoute || !this.isMoving) {
                    return;
                }

                if (this.isPickingUp) {
                    return;
                }

                if (this.currentPassengerCount >= this.carCapacity) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(spawnPos, null) || !spawnPos.HasMatchingGuest(this.carColor)) {
                    return;
                }

                this.isPickingUp = true;
                this.pendingPickupSpawnPos = spawnPos;
                this.SetActiveMoveSpeed(this.guestPickupSpeed);
                this.PickupNextGuest();
            },
            /*CarController.TryPickupFromSpawnPos end.*/

            /*CarController.PickupNextGuest start.*/
            PickupNextGuest: function () {
if ( TRACE ) { TRACE( "CarController#PickupNextGuest", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.pendingPickupSpawnPos, null)) {
                    this.EndPickup();
                    return;
                }

                if (this.currentPassengerCount >= this.carCapacity) {
                    this.EndPickup();
                    return;
                }

                var guest = this.pendingPickupSpawnPos.GetFrontGuest();
                if (UnityEngine.MonoBehaviour.op_Equality(guest, null) || guest.guestColor !== this.carColor) {
                    this.EndPickup();
                    return;
                }

                var seat = this.GetSeatTransform(this.currentPassengerCount);
                if (UnityEngine.Component.op_Equality(seat, null)) {
                    this.EndPickup();
                    return;
                }

                this.pendingPickupSpawnPos.RemoveGuest(guest);
                this.currentPassengerCount = (this.currentPassengerCount + 1) | 0;

                guest.JumpToSeat(seat, Bridge.fn.cacheBind(this, this.OnGuestJumpComplete));
            },
            /*CarController.PickupNextGuest end.*/

            /*CarController.OnGuestJumpComplete start.*/
            OnGuestJumpComplete: function () {
if ( TRACE ) { TRACE( "CarController#OnGuestJumpComplete", this ); }

                var delay = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.guestPickupInterval;
                DG.Tweening.DOVirtual.DelayedCall(delay, Bridge.fn.cacheBind(this, this.OnPickupDelayComplete));
            },
            /*CarController.OnGuestJumpComplete end.*/

            /*CarController.OnPickupDelayComplete start.*/
            OnPickupDelayComplete: function () {
if ( TRACE ) { TRACE( "CarController#OnPickupDelayComplete", this ); }

                this.PickupNextGuest();
            },
            /*CarController.OnPickupDelayComplete end.*/

            /*CarController.EndPickup start.*/
            EndPickup: function () {
if ( TRACE ) { TRACE( "CarController#EndPickup", this ); }

                this.isPickingUp = false;
                this.pendingPickupSpawnPos = null;
                this.SetActiveMoveSpeed(this.moveSpeed);

                if (this.IsFullCapacity()) {
                    this.SetHoodActive(true);
                }
            },
            /*CarController.EndPickup end.*/

            /*CarController.GetSeatTransform start.*/
            GetSeatTransform: function (seatIndex) {
if ( TRACE ) { TRACE( "CarController#GetSeatTransform", this ); }

                if (this.seatTransforms == null || seatIndex < 0 || seatIndex >= this.seatTransforms.length) {
                    return null;
                }

                return this.seatTransforms[seatIndex];
            },
            /*CarController.GetSeatTransform end.*/

            /*CarController.SetActiveMoveSpeed start.*/
            SetActiveMoveSpeed: function (speed) {
if ( TRACE ) { TRACE( "CarController#SetActiveMoveSpeed", this ); }

                if (UnityEngine.Mathf.Approximately(this.activeMoveSpeed, speed)) {
                    return;
                }

                this.KillSpeedTween();
                this.speedTweenStart = this.activeMoveSpeed;
                this.speedTweenTarget = speed;

                if (this.speedTransitionDuration <= 0.0) {
                    this.activeMoveSpeed = speed;
                    this.ApplyTweenSpeed();
                    return;
                }

                this.speedTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(0.0, 1.0, this.speedTransitionDuration, Bridge.fn.cacheBind(this, this.OnSpeedTweenUpdate)), DG.Tweening.Ease.InOutSine), Bridge.fn.cacheBind(this, this.OnSpeedTweenComplete));
            },
            /*CarController.SetActiveMoveSpeed end.*/

            /*CarController.OnSpeedTweenUpdate start.*/
            OnSpeedTweenUpdate: function (t) {
if ( TRACE ) { TRACE( "CarController#OnSpeedTweenUpdate", this ); }

                this.activeMoveSpeed = pc.math.lerp(this.speedTweenStart, this.speedTweenTarget, t);
                this.ApplyTweenSpeed();
            },
            /*CarController.OnSpeedTweenUpdate end.*/

            /*CarController.OnSpeedTweenComplete start.*/
            OnSpeedTweenComplete: function () {
if ( TRACE ) { TRACE( "CarController#OnSpeedTweenComplete", this ); }

                this.activeMoveSpeed = this.speedTweenTarget;
                this.ApplyTweenSpeed();
                this.speedTween = null;
            },
            /*CarController.OnSpeedTweenComplete end.*/

            /*CarController.KillSpeedTween start.*/
            KillSpeedTween: function () {
if ( TRACE ) { TRACE( "CarController#KillSpeedTween", this ); }

                if (this.speedTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.speedTween);
                    this.speedTween = null;
                }
            },
            /*CarController.KillSpeedTween end.*/

            /*CarController.ApplyTweenSpeed start.*/
            ApplyTweenSpeed: function () {
if ( TRACE ) { TRACE( "CarController#ApplyTweenSpeed", this ); }

                if (this.moveTween != null && DG.Tweening.TweenExtensions.IsActive(this.moveTween)) {
                    this.moveTween.timeScale = this.activeMoveSpeed / this.moveSpeed;
                }
            },
            /*CarController.ApplyTweenSpeed end.*/

            /*CarController.GoInLine start.*/
            GoInLine: function (slot, path) {
if ( TRACE ) { TRACE( "CarController#GoInLine", this ); }

                if (this.isMoving) {
                    return;
                }

                if (path == null || path.length < 3) {
                    return;
                }

                this.isOutOfCarLine = true;
                this.assignedSlot = slot;
                if (UnityEngine.MonoBehaviour.op_Inequality(slot, null)) {
                    slot.isParked = true;
                }

                this.parkingPath = path;
                this.goInLineStep = 0;
                this.isMoving = true;
                this.RunGoInLineStep();
            },
            /*CarController.GoInLine end.*/

            /*CarController.GoForGuest start.*/
            GoForGuest: function () {
if ( TRACE ) { TRACE( "CarController#GoForGuest", this ); }

                if (this.isMoving) {
                    return;
                }

                this.isMoving = true;
                this.PlayGuestPath(Bridge.fn.cacheBind(this, this.OnGuestPathFinishedAlone));
            },
            /*CarController.GoForGuest end.*/

            /*CarController.GoFromParking start.*/
            GoFromParking: function (path) {
if ( TRACE ) { TRACE( "CarController#GoFromParking", this ); }

                if (this.isMoving) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.assignedSlot, null)) {
                    return;
                }

                if (path == null || path.length < 3) {
                    return;
                }

                this.parkingPath = path;
                this.fromParkingStep = 0;
                this.isMoving = true;
                this.RunFromParkingStep();
            },
            /*CarController.GoFromParking end.*/

            /*CarController.ReleaseParkingSlot start.*/
            ReleaseParkingSlot: function () {
if ( TRACE ) { TRACE( "CarController#ReleaseParkingSlot", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.assignedSlot, null)) {
                    this.assignedSlot.isParked = false;
                }

                this.isParked = false;
            },
            /*CarController.ReleaseParkingSlot end.*/

            /*CarController.MoveInQueue start.*/
            MoveInQueue: function (target) {
if ( TRACE ) { TRACE( "CarController#MoveInQueue", this ); }

                this.isMoving = true;
                this.KillMoveTween();
                this.activeMoveSpeed = this.moveSpeed;

                this.moveTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, target.$clone(), this.activeMoveSpeed)), DG.Tweening.Ease.Linear), Bridge.fn.cacheBind(this, this.OnQueueMoveComplete));
            },
            /*CarController.MoveInQueue end.*/

            /*CarController.OnQueueMoveComplete start.*/
            OnQueueMoveComplete: function () {
if ( TRACE ) { TRACE( "CarController#OnQueueMoveComplete", this ); }

                this.isMoving = false;
            },
            /*CarController.OnQueueMoveComplete end.*/

            /*CarController.RunGoInLineStep start.*/
            RunGoInLineStep: function () {
if ( TRACE ) { TRACE( "CarController#RunGoInLineStep", this ); }

                // 0: thang Z toi Z cua path[0] (skip neu Z da cao hon) -> tat hood khi den cho re
                if (this.goInLineStep === 0) {
                    var targetZ = this.parkingPath[0].position.z;
                    if (this.transform.position.z >= targetZ) {
                        this.OnReachParkingTurnPoint();
                        return;
                    }

                    var alignPos = this.transform.position.$clone();
                    alignPos.z = targetZ;
                    this.MoveToPoint(alignPos, Bridge.fn.cacheBind(this, this.OnReachParkingTurnPoint));
                    return;
                }

                // 1: path[0] -> path[1] -> diem X = GuestPath[0].x (khong can toi path[2])
                if (this.goInLineStep === 1) {
                    var guestEntry = this.GetGuestEntryPoint();
                    var route = System.Array.init(4, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    route[0] = this.transform.position.$clone();
                    route[1] = this.parkingPath[0].position.$clone();
                    route[2] = this.parkingPath[1].position.$clone();
                    route[3] = guestEntry.$clone();
                    this.MoveAlongPoints(route, Bridge.fn.cacheBind(this, this.AdvanceGoInLineStep));
                    return;
                }

                // 2: GoForGuest 1 luot
                if (this.goInLineStep === 2) {
                    this.PlayGuestPath(Bridge.fn.cacheBind(this, this.OnGoInLineGuestPathComplete));
                    return;
                }

                // 3: thang theo Z xuong toi Z cua path[1]
                if (this.goInLineStep === 3) {
                    var downPos = this.transform.position.$clone();
                    downPos.z = this.parkingPath[1].position.z;

                    if (Math.abs(this.transform.position.z - downPos.z) <= 0.01) {
                        this.AdvanceGoInLineStep();
                        return;
                    }

                    this.MoveToPoint(downPos, Bridge.fn.cacheBind(this, this.AdvanceGoInLineStep));
                    return;
                }

                // 4: toi diem tiep can tren truc goc park (giao voi lane path[1]->path[2])
                if (this.goInLineStep === 4) {
                    var approachPoint = this.GetParkApproachPoint();
                    this.MoveToPoint(approachPoint, Bridge.fn.cacheBind(this, this.AdvanceGoInLineStep));
                    return;
                }

                // 5: di thang theo huong parkRotationY vao slot
                if (this.goInLineStep === 5) {
                    this.MoveIntoParkingSlot(Bridge.fn.cacheBind(this, this.OnParkedComplete));
                    return;
                }
            },
            /*CarController.RunGoInLineStep end.*/

            /*CarController.OnReachParkingTurnPoint start.*/
            OnReachParkingTurnPoint: function () {
if ( TRACE ) { TRACE( "CarController#OnReachParkingTurnPoint", this ); }

                this.SetHoodActive(false);
                this.AdvanceGoInLineStep();
            },
            /*CarController.OnReachParkingTurnPoint end.*/

            /*CarController.OnGoInLineGuestPathComplete start.*/
            OnGoInLineGuestPathComplete: function () {
if ( TRACE ) { TRACE( "CarController#OnGoInLineGuestPathComplete", this ); }

                this.isOnGuestPathRoute = false;
                this.EndPickup();

                if (this.IsFullCapacity()) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance, null)) {
                        DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.CheckWinOnFullCapacity();
                    }

                    this.RunFullCapacityExit();
                    return;
                }

                if (!this.TryAssignParkingSlotAfterGuestPath()) {
                    return;
                }

                this.AdvanceGoInLineStep();
            },
            /*CarController.OnGoInLineGuestPathComplete end.*/

            /*CarController.OnFromParkingGuestPathComplete start.*/
            OnFromParkingGuestPathComplete: function () {
if ( TRACE ) { TRACE( "CarController#OnFromParkingGuestPathComplete", this ); }

                this.isOnGuestPathRoute = false;
                this.EndPickup();

                if (this.IsFullCapacity()) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance, null)) {
                        DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.CheckWinOnFullCapacity();
                    }

                    this.RunFullCapacityExit();
                    return;
                }

                if (!this.TryAssignParkingSlotAfterGuestPath()) {
                    return;
                }

                this.AdvanceFromParkingStep();
            },
            /*CarController.OnFromParkingGuestPathComplete end.*/

            /*CarController.TryAssignParkingSlotAfterGuestPath start.*/
            TryAssignParkingSlotAfterGuestPath: function () {
if ( TRACE ) { TRACE( "CarController#TryAssignParkingSlotAfterGuestPath", this ); }

                var parkingSlotManager = null;
                var gameManager = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance;
                if (UnityEngine.MonoBehaviour.op_Inequality(gameManager, null)) {
                    parkingSlotManager = gameManager.parkingSlotManager;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(parkingSlotManager, null)) {
                    this.HandleParkingFail();
                    return false;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.assignedSlot, null) && !this.assignedSlot.isParked) {
                    this.assignedSlot.isParked = true;
                    return true;
                }

                var freeSlot = parkingSlotManager.GetFreeSlot();
                if (UnityEngine.MonoBehaviour.op_Equality(freeSlot, null)) {
                    this.HandleParkingFail();
                    return false;
                }

                this.assignedSlot = freeSlot;
                freeSlot.isParked = true;
                return true;
            },
            /*CarController.TryAssignParkingSlotAfterGuestPath end.*/

            /*CarController.HandleParkingFail start.*/
            HandleParkingFail: function () {
if ( TRACE ) { TRACE( "CarController#HandleParkingFail", this ); }

                this.KillMoveTween();
                this.KillSpeedTween();
                this.isMoving = false;

                if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance, null)) {
                    DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.SetLose();
                    DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.UnregisterMovingCar();
                }
            },
            /*CarController.HandleParkingFail end.*/

            /*CarController.IsFullCapacity start.*/
            IsFullCapacity: function () {
if ( TRACE ) { TRACE( "CarController#IsFullCapacity", this ); }

                return this.currentPassengerCount >= this.carCapacity;
            },
            /*CarController.IsFullCapacity end.*/

            /*CarController.RunFullCapacityExit start.*/
            RunFullCapacityExit: function () {
if ( TRACE ) { TRACE( "CarController#RunFullCapacityExit", this ); }

                if (this.parkingPath == null || this.parkingPath.length < 3 || UnityEngine.Component.op_Equality(this.parkingPath[2], null)) {
                    this.OnCarExitFull();
                    return;
                }

                var point3 = this.parkingPath[2].position.$clone();
                var exitPoint = point3.$clone();
                exitPoint.x = exitPoint.x + this.exitOffsetX;

                var route = System.Array.init(3, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                route[0] = this.transform.position.$clone();
                route[1] = point3.$clone();
                route[2] = exitPoint.$clone();
                this.MoveFullCapacityExit(route, Bridge.fn.cacheBind(this, this.OnCarExitFull));
            },
            /*CarController.RunFullCapacityExit end.*/

            /*CarController.MoveFullCapacityExit start.*/
            MoveFullCapacityExit: function (route, onComplete) {
if ( TRACE ) { TRACE( "CarController#MoveFullCapacityExit", this ); }

                if (route == null || route.length < 2) {
                    if (!Bridge.staticEquals(onComplete, null)) {
                        onComplete();
                    }
                    return;
                }

                this.fullExitSpeedBoostApplied = false;
                this.KillMoveTween();
                this.activeMoveSpeed = this.moveSpeed;
                this.moveTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetLookAt$1(DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.ShortcutExtensions.DOPath$1(this.transform, route, this.activeMoveSpeed, DG.Tweening.PathType.CatmullRom, DG.Tweening.PathMode.Full3D, 20)), DG.Tweening.Ease.Linear), this.pathLookAhead), Bridge.fn.cacheBind(this, this.CheckFullExitSpeedBoost)), onComplete);
                this.ApplyTweenSpeed();
            },
            /*CarController.MoveFullCapacityExit end.*/

            /*CarController.CheckFullExitSpeedBoost start.*/
            CheckFullExitSpeedBoost: function () {
if ( TRACE ) { TRACE( "CarController#CheckFullExitSpeedBoost", this ); }

                if (this.fullExitSpeedBoostApplied) {
                    return;
                }

                if (!this.HasReachedFullExitBoostPoint()) {
                    return;
                }

                this.fullExitSpeedBoostApplied = true;
                this.SetActiveMoveSpeed(this.moveSpeed * this.fullExitSpeedMultiplier);
                this.PlayCarBodyBoostTilt();
            },
            /*CarController.CheckFullExitSpeedBoost end.*/

            /*CarController.PlayCarBodyBoostTilt start.*/
            PlayCarBodyBoostTilt: function () {
if ( TRACE ) { TRACE( "CarController#PlayCarBodyBoostTilt", this ); }

                if (UnityEngine.Component.op_Equality(this.GetCarBodyTransform(), null)) {
                    return;
                }

                this.KillCarBodyTiltTween();
                this.carBodyTiltTween = DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(this.bodyPitchX, this.boostBodyTiltX, this.boostBodyTiltDuration, Bridge.fn.cacheBind(this, this.OnBodyPitchUpdate)), DG.Tweening.Ease.OutQuad);
            },
            /*CarController.PlayCarBodyBoostTilt end.*/

            /*CarController.PlayCarBodyParkBrakeTilt start.*/
            PlayCarBodyParkBrakeTilt: function () {
if ( TRACE ) { TRACE( "CarController#PlayCarBodyParkBrakeTilt", this ); }

                if (UnityEngine.Component.op_Equality(this.GetCarBodyTransform(), null)) {
                    return;
                }

                this.KillCarBodyTiltTween();
                this.bodyPitchX = 0.0;

                var brakeSequence = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Append(brakeSequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(0.0, this.parkBrakeTiltX, this.parkBrakeTiltInDuration, Bridge.fn.cacheBind(this, this.OnBodyPitchUpdate)), DG.Tweening.Ease.OutQuad));
                DG.Tweening.TweenSettingsExtensions.Append(brakeSequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.DOVirtual.Float(this.parkBrakeTiltX, 0.0, this.parkBrakeTiltOutDuration, Bridge.fn.cacheBind(this, this.OnBodyPitchUpdate)), DG.Tweening.Ease.OutBack));
                this.carBodyTiltTween = brakeSequence;
            },
            /*CarController.PlayCarBodyParkBrakeTilt end.*/

            /*CarController.OnBodyPitchUpdate start.*/
            OnBodyPitchUpdate: function (pitchX) {
if ( TRACE ) { TRACE( "CarController#OnBodyPitchUpdate", this ); }

                this.bodyPitchX = pitchX;
                this.ApplyCarBodyLocalRotation();
            },
            /*CarController.OnBodyPitchUpdate end.*/

            /*CarController.UpdateCarBodyTurnSway start.*/
            UpdateCarBodyTurnSway: function () {
if ( TRACE ) { TRACE( "CarController#UpdateCarBodyTurnSway", this ); }

                if (UnityEngine.Component.op_Equality(this.GetCarBodyTransform(), null)) {
                    return;
                }

                if (this.moveTween != null && DG.Tweening.TweenExtensions.IsActive(this.moveTween)) {
                    var yaw = this.transform.eulerAngles.y;
                    if (this.turnYawInitialized) {
                        var deltaYaw = UnityEngine.Mathf.DeltaAngle(this.previousTurnYaw, yaw);
                        var turnRate = deltaYaw / UnityEngine.Time.deltaTime;
                        var targetSway = -turnRate * this.turnSwayFactor;
                        if (targetSway > this.turnSwayMaxZ) {
                            targetSway = this.turnSwayMaxZ;
                        } else if (targetSway < -this.turnSwayMaxZ) {
                            targetSway = -this.turnSwayMaxZ;
                        }

                        this.bodySwayZ = pc.math.lerp(this.bodySwayZ, targetSway, UnityEngine.Time.deltaTime * this.turnSwayReturnSpeed);
                    }

                    this.previousTurnYaw = yaw;
                    this.turnYawInitialized = true;
                } else {
                    this.turnYawInitialized = false;
                    this.bodySwayZ = pc.math.lerp(this.bodySwayZ, 0.0, UnityEngine.Time.deltaTime * this.turnSwayReturnSpeed);
                }

                this.ApplyCarBodyLocalRotation();
            },
            /*CarController.UpdateCarBodyTurnSway end.*/

            /*CarController.ApplyCarBodyLocalRotation start.*/
            ApplyCarBodyLocalRotation: function () {
if ( TRACE ) { TRACE( "CarController#ApplyCarBodyLocalRotation", this ); }

                var body = this.GetCarBodyTransform();
                if (UnityEngine.Component.op_Equality(body, null)) {
                    return;
                }

                var euler = this.carBodyRestLocalEuler.$clone();
                euler.x = euler.x + this.bodyPitchX;
                euler.z = euler.z + this.bodySwayZ;
                body.localEulerAngles = euler.$clone();
            },
            /*CarController.ApplyCarBodyLocalRotation end.*/

            /*CarController.KillCarBodyTiltTween start.*/
            KillCarBodyTiltTween: function () {
if ( TRACE ) { TRACE( "CarController#KillCarBodyTiltTween", this ); }

                if (this.carBodyTiltTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.carBodyTiltTween);
                    this.carBodyTiltTween = null;
                }
            },
            /*CarController.KillCarBodyTiltTween end.*/

            /*CarController.GetCarBodyTransform start.*/
            GetCarBodyTransform: function () {
if ( TRACE ) { TRACE( "CarController#GetCarBodyTransform", this ); }

                var body = null;
                if (UnityEngine.GameObject.op_Inequality(this.carBody, null)) {
                    body = this.carBody.transform;
                } else if (UnityEngine.Component.op_Inequality(this.carBodyMeshRenderer, null)) {
                    body = this.carBodyMeshRenderer.transform;
                }

                if (UnityEngine.Component.op_Inequality(body, null) && !this.carBodyRestCached) {
                    this.carBodyRestLocalEuler = body.localEulerAngles.$clone();
                    this.carBodyRestCached = true;
                }

                return body;
            },
            /*CarController.GetCarBodyTransform end.*/

            /*CarController.HasReachedFullExitBoostPoint start.*/
            HasReachedFullExitBoostPoint: function () {
if ( TRACE ) { TRACE( "CarController#HasReachedFullExitBoostPoint", this ); }

                if (this.parkingPath == null || this.parkingPath.length < 3) {
                    return false;
                }

                if (UnityEngine.Component.op_Equality(this.parkingPath[1], null) || UnityEngine.Component.op_Equality(this.parkingPath[2], null)) {
                    return false;
                }

                var point2 = this.parkingPath[1].position.$clone();
                var point3 = this.parkingPath[2].position.$clone();
                var segment = point3.$clone().sub( point2 );
                segment.y = 0.0;

                var segmentSqr = segment.lengthSq();
                if (segmentSqr < 0.0001) {
                    return false;
                }

                var toCar = this.transform.position.$clone().sub( point2 );
                toCar.y = 0.0;
                var t = toCar.dot( segment ) / segmentSqr;
                return t >= 0.333;
            },
            /*CarController.HasReachedFullExitBoostPoint end.*/

            /*CarController.OnCarExitFull start.*/
            OnCarExitFull: function () {
if ( TRACE ) { TRACE( "CarController#OnCarExitFull", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.assignedSlot, null)) {
                    this.assignedSlot.isParked = false;
                    this.assignedSlot = null;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance, null)) {
                    DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.UnregisterMovingCar();
                    DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.AddCarDone();
                }

                this.isMoving = false;
                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
            },
            /*CarController.OnCarExitFull end.*/

            /*CarController.AdvanceGoInLineStep start.*/
            AdvanceGoInLineStep: function () {
if ( TRACE ) { TRACE( "CarController#AdvanceGoInLineStep", this ); }

                this.goInLineStep = (this.goInLineStep + 1) | 0;
                this.RunGoInLineStep();
            },
            /*CarController.AdvanceGoInLineStep end.*/

            /*CarController.RunFromParkingStep start.*/
            RunFromParkingStep: function () {
if ( TRACE ) { TRACE( "CarController#RunFromParkingStep", this ); }

                // 0: lui ra path (toi approach point), giu goc park
                if (this.fromParkingStep === 0) {
                    this.MoveToPointReverse(this.GetParkApproachPoint(), Bridge.fn.cacheBind(this, this.AdvanceFromParkingStep));
                    return;
                }

                // 1: toi diem X = GuestPath[0] de vao GoForGuest
                if (this.fromParkingStep === 1) {
                    this.MoveToPoint(this.GetGuestEntryPoint(), Bridge.fn.cacheBind(this, this.AdvanceFromParkingStep));
                    return;
                }

                // 2: GoForGuest 1 luot
                if (this.fromParkingStep === 2) {
                    this.PlayGuestPath(Bridge.fn.cacheBind(this, this.OnFromParkingGuestPathComplete));
                    return;
                }

                // 3: thang Z xuong toi Z path[1]
                if (this.fromParkingStep === 3) {
                    var downPos = this.transform.position.$clone();
                    downPos.z = this.parkingPath[1].position.z;

                    if (Math.abs(this.transform.position.z - downPos.z) <= 0.01) {
                        this.AdvanceFromParkingStep();
                        return;
                    }

                    this.MoveToPoint(downPos, Bridge.fn.cacheBind(this, this.AdvanceFromParkingStep));
                    return;
                }

                // 4: toi approach point
                if (this.fromParkingStep === 4) {
                    this.MoveToPoint(this.GetParkApproachPoint(), Bridge.fn.cacheBind(this, this.AdvanceFromParkingStep));
                    return;
                }

                // 5: vao lai slot
                if (this.fromParkingStep === 5) {
                    this.MoveIntoParkingSlot(Bridge.fn.cacheBind(this, this.OnParkedComplete));
                    return;
                }
            },
            /*CarController.RunFromParkingStep end.*/

            /*CarController.AdvanceFromParkingStep start.*/
            AdvanceFromParkingStep: function () {
if ( TRACE ) { TRACE( "CarController#AdvanceFromParkingStep", this ); }

                this.fromParkingStep = (this.fromParkingStep + 1) | 0;
                this.RunFromParkingStep();
            },
            /*CarController.AdvanceFromParkingStep end.*/

            /*CarController.OnParkedComplete start.*/
            OnParkedComplete: function () {
if ( TRACE ) { TRACE( "CarController#OnParkedComplete", this ); }

                this.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, this.parkRotationY, 0.0 );
                this.isParked = true;
                this.isMoving = false;
                this.isFirstLine = false;
                this.PlayCarBodyParkBrakeTilt();

                if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance, null)) {
                    DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.UnregisterMovingCar();

                    if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.spawnManager, null)) {
                        DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.spawnManager.ResetGuestTriggersForCar(this);
                    }
                }
            },
            /*CarController.OnParkedComplete end.*/

            /*CarController.MoveIntoParkingSlot start.*/
            MoveIntoParkingSlot: function (onComplete) {
if ( TRACE ) { TRACE( "CarController#MoveIntoParkingSlot", this ); }

                // Huong di chuyen trung voi goc park -> xe tu xoay theo duong di, end snap dung goc
                this.MoveToPoint(this.assignedSlot.transform.position, onComplete);
            },
            /*CarController.MoveIntoParkingSlot end.*/

            /*CarController.MoveToPointReverse start.*/
            MoveToPointReverse: function (target, onComplete) {
if ( TRACE ) { TRACE( "CarController#MoveToPointReverse", this ); }

                this.KillMoveTween();
                this.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, this.parkRotationY, 0.0 );
                this._isReversing = true;
                this._pendingReverseCallback = onComplete;

                this.moveTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, target.$clone(), this.activeMoveSpeed)), DG.Tweening.Ease.Linear), Bridge.fn.cacheBind(this, this.OnMoveReverseComplete));
                this.ApplyTweenSpeed();
            },
            /*CarController.MoveToPointReverse end.*/

            /*CarController.OnMoveReverseComplete start.*/
            OnMoveReverseComplete: function () {
if ( TRACE ) { TRACE( "CarController#OnMoveReverseComplete", this ); }

                this._isReversing = false;
                var cb = this._pendingReverseCallback;
                this._pendingReverseCallback = null;
                if (!Bridge.staticEquals(cb, null)) {
                    cb();
                }
            },
            /*CarController.OnMoveReverseComplete end.*/

            /*CarController.OnGuestPathFinishedAlone start.*/
            OnGuestPathFinishedAlone: function () {
if ( TRACE ) { TRACE( "CarController#OnGuestPathFinishedAlone", this ); }

                this.isMoving = false;
            },
            /*CarController.OnGuestPathFinishedAlone end.*/

            /*CarController.PlayGuestPath start.*/
            PlayGuestPath: function (onComplete) {
if ( TRACE ) { TRACE( "CarController#PlayGuestPath", this ); }

                var path = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.guestPath;
                if (UnityEngine.MonoBehaviour.op_Equality(path, null) || !path.HasWaypoints()) {
                    this.isOnGuestPathRoute = false;
                    if (!Bridge.staticEquals(onComplete, null)) {
                        onComplete();
                    }
                    return;
                }

                this.isOnGuestPathRoute = true;
                var waypoints = path.GetPositions();
                var route = this.BuildRouteFromCurrent(waypoints);
                this.MoveAlongPoints(route, onComplete);
            },
            /*CarController.PlayGuestPath end.*/

            /*CarController.MoveAlongPoints start.*/
            MoveAlongPoints: function (route, onComplete) {
if ( TRACE ) { TRACE( "CarController#MoveAlongPoints", this ); }

                if (route == null || route.length < 2) {
                    if (!Bridge.staticEquals(onComplete, null)) {
                        onComplete();
                    }
                    return;
                }

                this.KillMoveTween();
                this.activeMoveSpeed = this.moveSpeed;
                this.moveTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetLookAt$1(DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.ShortcutExtensions.DOPath$1(this.transform, route, this.activeMoveSpeed, DG.Tweening.PathType.CatmullRom, DG.Tweening.PathMode.Full3D, 20)), DG.Tweening.Ease.Linear), this.pathLookAhead), onComplete);
                this.ApplyTweenSpeed();
            },
            /*CarController.MoveAlongPoints end.*/

            /*CarController.MoveToPoint start.*/
            MoveToPoint: function (target, onComplete) {
if ( TRACE ) { TRACE( "CarController#MoveToPoint", this ); }

                this.currentMoveTarget = target.$clone();
                this.KillMoveTween();

                this.moveTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetSpeedBased(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, target.$clone(), this.activeMoveSpeed)), DG.Tweening.Ease.Linear), Bridge.fn.cacheBind(this, this.SmoothLookAtCurrentTarget)), onComplete);
                this.ApplyTweenSpeed();
            },
            /*CarController.MoveToPoint end.*/

            /*CarController.SmoothLookAtCurrentTarget start.*/
            SmoothLookAtCurrentTarget: function () {
if ( TRACE ) { TRACE( "CarController#SmoothLookAtCurrentTarget", this ); }

                var dir = this.currentMoveTarget.$clone().sub( this.transform.position );
                dir.y = 0.0;
                if (dir.lengthSq() < 0.0001) {
                    return;
                }

                var targetRotation = new pc.Quat().lookRotation( dir.clone().normalize(), pc.Vec3.UP.clone() );
                this.transform.rotation = new pc.Quat().slerpUnclamped( this.transform.rotation, targetRotation, pc.math.clamp( UnityEngine.Time.deltaTime * this.rotateSpeed, 0, 1 ) );
            },
            /*CarController.SmoothLookAtCurrentTarget end.*/

            /*CarController.GetGuestEntryPoint start.*/
            GetGuestEntryPoint: function () {
if ( TRACE ) { TRACE( "CarController#GetGuestEntryPoint", this ); }

                var guestPath = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.guestPath;
                var guestX = 0.0;
                if (UnityEngine.MonoBehaviour.op_Inequality(guestPath, null) && guestPath.HasWaypoints()) {
                    guestX = guestPath.GetFirstPosition().x;
                }

                return this.GetPointOnSegmentByX(this.parkingPath[1].position, this.parkingPath[2].position, guestX);
            },
            /*CarController.GetGuestEntryPoint end.*/

            /*CarController.GetParkForward start.*/
            GetParkForward: function () {
if ( TRACE ) { TRACE( "CarController#GetParkForward", this ); }

                var forward = new pc.Quat().setFromEulerAngles_Unity( 0.0, this.parkRotationY, 0.0 ).transformVector( new pc.Vec3( 0, 0, 1 ) );
                forward.y = 0.0;
                if (forward.lengthSq() < 0.0001) {
                    return new pc.Vec3( 0, 0, 1 );
                }

                return forward.clone().normalize().$clone();
            },
            /*CarController.GetParkForward end.*/

            /*CarController.GetParkApproachPoint start.*/
            GetParkApproachPoint: function () {
if ( TRACE ) { TRACE( "CarController#GetParkApproachPoint", this ); }

                var slotPos = this.assignedSlot.transform.position.$clone();
                var parkDir = this.GetParkForward();
                var laneA = this.parkingPath[1].position.$clone();
                var laneB = this.parkingPath[2].position.$clone();

                var laneHit = { v : new UnityEngine.Vector3() };
                var hasHit = this.TryIntersectLinesXZ(laneA, laneB, slotPos, parkDir, laneHit);
                if (hasHit) {
                    var toHit = laneHit.v.$clone().sub( slotPos );
                    toHit.y = 0.0;
                    var along = toHit.dot( parkDir );

                    // Can diem phia SAU slot (doi dien huong park) de di vao theo dung goc xoay
                    if (along < -0.01) {
                        laneHit.v.y = slotPos.y;
                        return laneHit.v.$clone();
                    }

                    var dist = Math.abs(along);
                    if (dist < 0.5) {
                        dist = this.parkApproachDistance;
                    }

                    var behind = slotPos.$clone().sub( parkDir.$clone().clone().scale( dist ) );
                    behind.y = slotPos.y;
                    return behind.$clone();
                }

                var fallback = slotPos.$clone().sub( parkDir.$clone().clone().scale( this.parkApproachDistance ) );
                fallback.y = slotPos.y;
                return fallback.$clone();
            },
            /*CarController.GetParkApproachPoint end.*/

            /*CarController.TryIntersectLinesXZ start.*/
            TryIntersectLinesXZ: function (laneA, laneB, axisOrigin, axisDir, hit) {
if ( TRACE ) { TRACE( "CarController#TryIntersectLinesXZ", this ); }

                var ax = laneA.x;
                var az = laneA.z;
                var bx = laneB.x - laneA.x;
                var bz = laneB.z - laneA.z;
                var ox = axisOrigin.x;
                var oz = axisOrigin.z;
                var dx = axisDir.x;
                var dz = axisDir.z;

                var denom = bx * dz - bz * dx;
                if (Math.abs(denom) < 0.0001) {
                    hit.v = pc.Vec3.ZERO.clone();
                    return false;
                }

                var t = ((ox - ax) * dz - (oz - az) * dx) / denom;
                if (t < 0.0) {
                    t = 0.0;
                }

                if (t > 1.0) {
                    t = 1.0;
                }

                hit.v = new pc.Vec3( ax + bx * t, axisOrigin.y, az + bz * t );
                return true;
            },
            /*CarController.TryIntersectLinesXZ end.*/

            /*CarController.GetPointOnSegmentByX start.*/
            GetPointOnSegmentByX: function (from, to, x) {
if ( TRACE ) { TRACE( "CarController#GetPointOnSegmentByX", this ); }

                var dx = to.x - from.x;
                var t = 0.0;
                if (Math.abs(dx) > 0.0001) {
                    t = (x - from.x) / dx;
                    if (t < 0.0) {
                        t = 0.0;
                    }

                    if (t > 1.0) {
                        t = 1.0;
                    }
                }

                return new pc.Vec3().lerp( from, to, t );
            },
            /*CarController.GetPointOnSegmentByX end.*/

            /*CarController.BuildRouteFromCurrent start.*/
            BuildRouteFromCurrent: function (waypoints) {
if ( TRACE ) { TRACE( "CarController#BuildRouteFromCurrent", this ); }

                var route = System.Array.init(((waypoints.length + 1) | 0), function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                route[0] = this.transform.position.$clone();
                for (var i = 0; i < waypoints.length; i = (i + 1) | 0) {
                    route[((i + 1) | 0)] = waypoints[i].$clone();
                }

                return route;
            },
            /*CarController.BuildRouteFromCurrent end.*/

            /*CarController.KillMoveTween start.*/
            KillMoveTween: function () {
if ( TRACE ) { TRACE( "CarController#KillMoveTween", this ); }

                if (this.moveTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.moveTween);
                    this.moveTween = null;
                }

                this.KillSpeedTween();
            },
            /*CarController.KillMoveTween end.*/

            /*CarController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "CarController#OnDisable", this ); }

                this.KillMoveTween();
                if (this.hoodTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.hoodTween);
                    this.hoodTween = null;
                }
                this.KillCarBodyTiltTween();
                this.bodyPitchX = 0.0;
                this.bodySwayZ = 0.0;
                this.isMoving = false;
                this._isBlockedByAhead = false;
                this._isReversing = false;
                this._pendingReverseCallback = null;
            },
            /*CarController.OnDisable end.*/


        }
    });
    /*CarController end.*/

    /*CarLineManager start.*/
    Bridge.define("CarLineManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            columns: null
        },
        methods: {
            /*CarLineManager.ResetLines start.*/
            ResetLines: function (columnCount) {
if ( TRACE ) { TRACE( "CarLineManager#ResetLines", this ); }

                this.columns = System.Array.init(columnCount, null, System.Collections.Generic.List$1(CarController));
                for (var i = 0; i < columnCount; i = (i + 1) | 0) {
                    this.columns[i] = new (System.Collections.Generic.List$1(CarController)).ctor();
                }
            },
            /*CarLineManager.ResetLines end.*/

            /*CarLineManager.ClearLines start.*/
            ClearLines: function () {
if ( TRACE ) { TRACE( "CarLineManager#ClearLines", this ); }

                if (this.columns == null) {
                    return;
                }

                for (var i = 0; i < this.columns.length; i = (i + 1) | 0) {
                    if (this.columns[i] != null) {
                        this.columns[i].clear();
                    }
                }
            },
            /*CarLineManager.ClearLines end.*/

            /*CarLineManager.RegisterCar start.*/
            RegisterCar: function (columnIndex, car) {
if ( TRACE ) { TRACE( "CarLineManager#RegisterCar", this ); }

                if (this.columns == null || UnityEngine.MonoBehaviour.op_Equality(car, null)) {
                    return;
                }

                if (columnIndex < 0 || columnIndex >= this.columns.length) {
                    return;
                }

                this.columns[columnIndex].add(car);
            },
            /*CarLineManager.RegisterCar end.*/

            /*CarLineManager.NotifyCarDeparted start.*/
            NotifyCarDeparted: function (car) {
if ( TRACE ) { TRACE( "CarLineManager#NotifyCarDeparted", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(car, null) || this.columns == null) {
                    return;
                }

                var columnIndex = this.FindColumnIndex(car);
                if (columnIndex < 0) {
                    return;
                }

                this.columns[columnIndex].remove(car);
                car.isFirstLine = false;
                this.AdvanceColumn(columnIndex);
            },
            /*CarLineManager.NotifyCarDeparted end.*/

            /*CarLineManager.AdvanceColumn start.*/
            AdvanceColumn: function (columnIndex) {
if ( TRACE ) { TRACE( "CarLineManager#AdvanceColumn", this ); }

                var column = this.columns[columnIndex];
                if (column == null || column.Count === 0) {
                    return;
                }

                var spawnManager = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.spawnManager;
                if (UnityEngine.MonoBehaviour.op_Equality(spawnManager, null)) {
                    return;
                }

                var posX = column.getItem(0).transform.position.x;
                var posY = column.getItem(0).transform.position.y;
                var posZ = spawnManager.GetFirstLineZ();

                for (var i = 0; i < column.Count; i = (i + 1) | 0) {
                    var car = column.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Equality(car, null)) {
                        continue;
                    }

                    car.isFirstLine = i === 0;

                    var target = new pc.Vec3( posX, posY, posZ );
                    car.MoveInQueue(target);

                    if (i < ((column.Count - 1) | 0)) {
                        var nextCar = column.getItem(((i + 1) | 0));
                        if (UnityEngine.MonoBehaviour.op_Inequality(nextCar, null)) {
                            var gap = spawnManager.GetSafeDistanceForType(car.carType) + spawnManager.GetSafeDistanceForType(nextCar.carType);
                            posZ = posZ - gap;
                        }
                    }
                }
            },
            /*CarLineManager.AdvanceColumn end.*/

            /*CarLineManager.FindColumnIndex start.*/
            FindColumnIndex: function (car) {
if ( TRACE ) { TRACE( "CarLineManager#FindColumnIndex", this ); }

                for (var i = 0; i < this.columns.length; i = (i + 1) | 0) {
                    var column = this.columns[i];
                    if (column == null) {
                        continue;
                    }

                    for (var j = 0; j < column.Count; j = (j + 1) | 0) {
                        if (UnityEngine.MonoBehaviour.op_Equality(column.getItem(j), car)) {
                            return i;
                        }
                    }
                }

                return -1;
            },
            /*CarLineManager.FindColumnIndex end.*/


        }
    });
    /*CarLineManager end.*/

    /*CarSpawnData start.*/
    Bridge.define("CarSpawnData", {
        fields: {
            carType: 0,
            carColor: 0
        }
    });
    /*CarSpawnData end.*/

    /*ColorPalette start.*/
    Bridge.define("ColorPalette", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            entries: null
        },
        methods: {
            /*ColorPalette.GetCarMaterial start.*/
            GetCarMaterial: function (color) {
if ( TRACE ) { TRACE( "ColorPalette#GetCarMaterial", this ); }

                for (var i = 0; i < this.entries.length; i = (i + 1) | 0) {
                    if (this.entries[i].color === color) {
                        return this.entries[i].carMaterial;
                    }
                }

                return null;
            },
            /*ColorPalette.GetCarMaterial end.*/

            /*ColorPalette.GetCarOutlineMaterial start.*/
            GetCarOutlineMaterial: function (color) {
if ( TRACE ) { TRACE( "ColorPalette#GetCarOutlineMaterial", this ); }

                for (var i = 0; i < this.entries.length; i = (i + 1) | 0) {
                    if (this.entries[i].color === color) {
                        return this.entries[i].carOutlineMaterial;
                    }
                }

                return null;
            },
            /*ColorPalette.GetCarOutlineMaterial end.*/

            /*ColorPalette.GetHumanMaterial start.*/
            GetHumanMaterial: function (color) {
if ( TRACE ) { TRACE( "ColorPalette#GetHumanMaterial", this ); }

                for (var i = 0; i < this.entries.length; i = (i + 1) | 0) {
                    if (this.entries[i].color === color) {
                        return this.entries[i].humanMaterial;
                    }
                }

                return null;
            },
            /*ColorPalette.GetHumanMaterial end.*/


        }
    });
    /*ColorPalette end.*/

    /*ColorPalette+ColorEntry start.*/
    Bridge.define("ColorPalette.ColorEntry", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "ColorPalette.ColorEntry#getDefaultValue", this ); }
 return new ColorPalette.ColorEntry(); }
            }
        },
        fields: {
            color: 0,
            carMaterial: null,
            carOutlineMaterial: null,
            humanMaterial: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "ColorPalette.ColorEntry#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "ColorPalette.ColorEntry#getHashCode", this ); }

                var h = Bridge.addHash([3822792231, this.color, this.carMaterial, this.carOutlineMaterial, this.humanMaterial]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "ColorPalette.ColorEntry#equals", this ); }

                if (!Bridge.is(o, ColorPalette.ColorEntry)) {
                    return false;
                }
                return Bridge.equals(this.color, o.color) && Bridge.equals(this.carMaterial, o.carMaterial) && Bridge.equals(this.carOutlineMaterial, o.carOutlineMaterial) && Bridge.equals(this.humanMaterial, o.humanMaterial);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "ColorPalette.ColorEntry#$clone", this ); }

                var s = to || new ColorPalette.ColorEntry();
                s.color = this.color;
                s.carMaterial = this.carMaterial;
                s.carOutlineMaterial = this.carOutlineMaterial;
                s.humanMaterial = this.humanMaterial;
                return s;
            }
        }
    });
    /*ColorPalette+ColorEntry end.*/

    /*DAT.Core.AspectCameraValues start.*/
    Bridge.define("DAT.Core.AspectCameraValues", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "DAT.Core.AspectCameraValues#getDefaultValue", this ); }
 return new DAT.Core.AspectCameraValues(); }
            }
        },
        fields: {
            fieldOfView: 0,
            orthographicSize: 0
        },
        ctors: {
            $ctor1: function (fieldOfView, orthographicSize) {
if ( TRACE ) { TRACE( "DAT.Core.AspectCameraValues#$ctor1", this ); }

                this.$initialize();
                this.fieldOfView = fieldOfView;
                this.orthographicSize = orthographicSize;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "DAT.Core.AspectCameraValues#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "DAT.Core.AspectCameraValues#getHashCode", this ); }

                var h = Bridge.addHash([6938632652, this.fieldOfView, this.orthographicSize]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "DAT.Core.AspectCameraValues#equals", this ); }

                if (!Bridge.is(o, DAT.Core.AspectCameraValues)) {
                    return false;
                }
                return Bridge.equals(this.fieldOfView, o.fieldOfView) && Bridge.equals(this.orthographicSize, o.orthographicSize);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "DAT.Core.AspectCameraValues#$clone", this ); }

                var s = to || new DAT.Core.AspectCameraValues();
                s.fieldOfView = this.fieldOfView;
                s.orthographicSize = this.orthographicSize;
                return s;
            }
        }
    });
    /*DAT.Core.AspectCameraValues end.*/

    /*DAT.Core.DesignPatterns.Singleton$1 start.*/
    /** @namespace DAT.Core.DesignPatterns */

    /**
     * Minimal, fast, safe MonoBehaviour singleton.
     Optional persistence across scenes via inspector toggle.
     *
     * @abstract
     * @public
     * @class DAT.Core.DesignPatterns.Singleton$1
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("DAT.Core.DesignPatterns.Singleton$1", function (T) { return {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                _instance: Bridge.getDefaultValue(T),
                _isShuttingDown: false
            },
            props: {
                /**
                 * True if an instance exists (without creating one).
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof DAT.Core.DesignPatterns.Singleton$1
                 * @function HasInstance
                 * @type boolean
                 */
                HasInstance: {
                    get: function () {
if ( TRACE ) { TRACE( "DAT.Core.DesignPatterns.Singleton$1#HasInstance#get", this ); }

                        return Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance) != null;
                    }
                },
                /**
                 * Global instance. Creates one if missing (unless application is quitting).
                 *
                 * @static
                 * @public
                 * @readonly
                 * @memberof DAT.Core.DesignPatterns.Singleton$1
                 * @function Instance
                 * @type T
                 */
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "DAT.Core.DesignPatterns.Singleton$1#Instance#get", this ); }

                        if (DAT.Core.DesignPatterns.Singleton$1(T)._isShuttingDown) {
                            return null;
                        }
                        if (Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance) != null) {
                            return Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance);
                        }

                        DAT.Core.DesignPatterns.Singleton$1(T)._instance = Bridge.rValue(UnityEngine.Object.FindObjectOfType(T));
                        if (Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance) != null) {
                            return Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance);
                        }

                        var go = new UnityEngine.GameObject.$ctor2(Bridge.Reflection.getTypeName(T));
                        DAT.Core.DesignPatterns.Singleton$1(T)._instance = Bridge.rValue(go.AddComponent(T));
                        return Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance);
                    }
                }
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "DAT.Core.DesignPatterns.Singleton$1#init", this ); }

                    this._instance = Bridge.getDefaultValue(T);
                }
            }
        },
        fields: {
            persistAcrossScenes: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DAT.Core.DesignPatterns.Singleton$1#init", this ); }

                this.persistAcrossScenes = true;
            }
        },
        methods: {
            /*DAT.Core.DesignPatterns.Singleton$1.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DAT.Core.DesignPatterns.Singleton$1#Awake", this ); }

                if (Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance) == null) {
                    DAT.Core.DesignPatterns.Singleton$1(T)._instance = Bridge.as(this, T);
                    if (this.persistAcrossScenes) {
                        UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                    }
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance), this)) {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*DAT.Core.DesignPatterns.Singleton$1.Awake end.*/

            /*DAT.Core.DesignPatterns.Singleton$1.OnApplicationQuit start.*/
            OnApplicationQuit: function () {
if ( TRACE ) { TRACE( "DAT.Core.DesignPatterns.Singleton$1#OnApplicationQuit", this ); }

                DAT.Core.DesignPatterns.Singleton$1(T)._isShuttingDown = true;
            },
            /*DAT.Core.DesignPatterns.Singleton$1.OnApplicationQuit end.*/

            /*DAT.Core.DesignPatterns.Singleton$1.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "DAT.Core.DesignPatterns.Singleton$1#OnDestroy", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(Bridge.rValue(DAT.Core.DesignPatterns.Singleton$1(T)._instance), this)) {
                    DAT.Core.DesignPatterns.Singleton$1(T)._instance = null;
                }
            },
            /*DAT.Core.DesignPatterns.Singleton$1.OnDestroy end.*/


        }
    }; });
    /*DAT.Core.DesignPatterns.Singleton$1 end.*/

    /*DAT.Core.Optimization.SCU.SCUManager+Entry start.*/
    Bridge.define("DAT.Core.Optimization.SCU.SCUManager.Entry", {
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.Entry#getDefaultValue", this ); }
 return new DAT.Core.Optimization.SCU.SCUManager.Entry(); }
            }
        },
        fields: {
            id: 0,
            type: 0,
            tick: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.Entry#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.Entry#getHashCode", this ); }

                var h = Bridge.addHash([1920233150, this.id, this.type, this.tick]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.Entry#equals", this ); }

                if (!Bridge.is(o, DAT.Core.Optimization.SCU.SCUManager.Entry)) {
                    return false;
                }
                return Bridge.equals(this.id, o.id) && Bridge.equals(this.type, o.type) && Bridge.equals(this.tick, o.tick);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.Entry#$clone", this ); }

                var s = to || new DAT.Core.Optimization.SCU.SCUManager.Entry();
                s.id = this.id;
                s.type = this.type;
                s.tick = this.tick;
                return s;
            }
        }
    });
    /*DAT.Core.Optimization.SCU.SCUManager+Entry end.*/

    /*DAT.Core.Optimization.SCU.SCUManager+SCUSubscription start.*/
    Bridge.define("DAT.Core.Optimization.SCU.SCUManager.SCUSubscription", {
        inherits: [System.IDisposable],
        $kind: 1004,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#getDefaultValue", this ); }
 return new DAT.Core.Optimization.SCU.SCUManager.SCUSubscription(); }
            }
        },
        fields: {
            Id: 0
        },
        props: {
            IsValid: {
                get: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#IsValid#get", this ); }

                    return this.Id !== 0;
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            $ctor1: function (id) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#$ctor1", this ); }

                this.$initialize();
                this.Id = id;
            },
            ctor: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*DAT.Core.Optimization.SCU.SCUManager+SCUSubscription.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#Dispose", this ); }

                if (this.IsValid && DAT.Core.DesignPatterns.Singleton$1(DAT.Core.Optimization.SCU.SCUManager).HasInstance) {
                    DAT.Core.DesignPatterns.Singleton$1(DAT.Core.Optimization.SCU.SCUManager).Instance.Unregister(this);
                }
            },
            /*DAT.Core.Optimization.SCU.SCUManager+SCUSubscription.Dispose end.*/

            getHashCode: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#getHashCode", this ); }

                var h = Bridge.addHash([5027364515, this.Id]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#equals", this ); }

                if (!Bridge.is(o, DAT.Core.Optimization.SCU.SCUManager.SCUSubscription)) {
                    return false;
                }
                return Bridge.equals(this.Id, o.Id);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager.SCUSubscription#$clone", this ); }

                var s = to || new DAT.Core.Optimization.SCU.SCUManager.SCUSubscription();
                s.Id = this.Id;
                return s;
            }
        }
    });
    /*DAT.Core.Optimization.SCU.SCUManager+SCUSubscription end.*/

    /*DAT.Core.Optimization.SCU.SCUManager+SCUUpdateType start.*/
    Bridge.define("DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType", {
        $kind: 1006,
        statics: {
            fields: {
                Update: 0,
                LateUpdate: 1,
                FixedUpdate: 2
            }
        },
        $utype: System.Byte
    });
    /*DAT.Core.Optimization.SCU.SCUManager+SCUUpdateType end.*/

    /*DAT.Core.Orientation start.*/
    Bridge.define("DAT.Core.Orientation", {
        $kind: 6,
        statics: {
            fields: {
                Portrait: 0,
                Landscape: 1
            }
        }
    });
    /*DAT.Core.Orientation end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Enums start.*/
    Bridge.define("Enums");
    /*Enums end.*/

    /*Enums+CarType start.*/
    Bridge.define("Enums.CarType", {
        $kind: 1006,
        statics: {
            fields: {
                Car4: 0,
                Car6: 1,
                Car10: 2
            }
        }
    });
    /*Enums+CarType end.*/

    /*Enums+GameColor start.*/
    Bridge.define("Enums.GameColor", {
        $kind: 1006,
        statics: {
            fields: {
                Red: 0,
                Blue: 1,
                Green: 2,
                Yellow: 3,
                Purple: 4,
                Orange: 5,
                Pink: 6
            }
        }
    });
    /*Enums+GameColor end.*/

    /*Enums+GuestQueueType start.*/
    Bridge.define("Enums.GuestQueueType", {
        $kind: 1006,
        statics: {
            fields: {
                StraightUp: 0,
                CurveLeft: 1,
                CurveRight: 2,
                StraightLeft: 3,
                StraightRight: 4
            }
        }
    });
    /*Enums+GuestQueueType end.*/

    /*GuestColorSpawnData start.*/
    Bridge.define("GuestColorSpawnData", {
        fields: {
            color: 0,
            count: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GuestColorSpawnData#init", this ); }

                this.count = 1;
            }
        }
    });
    /*GuestColorSpawnData end.*/

    /*GuestController start.*/
    Bridge.define("GuestController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            guestColor: 0,
            jumpPower: 0,
            jumpDuration: 0,
            queueMoveDuration: 0,
            meshRendererBody: null,
            animator: null,
            isOnCar: false,
            jumpTween: null,
            pendingSeat: null,
            jumpCompleteCallback: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GuestController#init", this ); }

                this.jumpPower = 0.8;
                this.jumpDuration = 0.1;
                this.queueMoveDuration = 0.15;
            }
        },
        methods: {
            /*GuestController.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "GuestController#Init", this ); }

                var mat = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.colorPalette.GetHumanMaterial(this.guestColor);
                this.meshRendererBody.sharedMaterial = mat;
            },
            /*GuestController.Init end.*/

            /*GuestController.JumpToSeat start.*/
            JumpToSeat: function (seat, onComplete) {
if ( TRACE ) { TRACE( "GuestController#JumpToSeat", this ); }

                if (UnityEngine.Component.op_Equality(seat, null)) {
                    if (!Bridge.staticEquals(onComplete, null)) {
                        onComplete();
                    }
                    return;
                }

                this.jumpCompleteCallback = onComplete;
                this.pendingSeat = seat;
                this.isOnCar = true;

                if (this.jumpTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.jumpTween);
                }

                this.jumpTween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.ShortcutExtensions.DOJump(this.transform, seat.position.$clone(), this.jumpPower, 1, this.jumpDuration), DG.Tweening.Ease.OutQuad), Bridge.fn.cacheBind(this, this.OnJumpToSeatComplete));
            },
            /*GuestController.JumpToSeat end.*/

            /*GuestController.OnJumpToSeatComplete start.*/
            OnJumpToSeatComplete: function () {
if ( TRACE ) { TRACE( "GuestController#OnJumpToSeatComplete", this ); }

                if (UnityEngine.Component.op_Inequality(this.pendingSeat, null)) {
                    this.transform.SetParent(this.pendingSeat);
                    this.transform.localPosition = pc.Vec3.ZERO.clone();
                    this.transform.localRotation = pc.Quat.IDENTITY.clone();
                    this.transform.localScale = new pc.Vec3( 1.4, 1.4, 1.4 );
                }

                this.SetSit(true);

                if (!Bridge.staticEquals(this.jumpCompleteCallback, null)) {
                    this.jumpCompleteCallback();
                    this.jumpCompleteCallback = null;
                }
            },
            /*GuestController.OnJumpToSeatComplete end.*/

            /*GuestController.SetSit start.*/
            SetSit: function (sit) {
if ( TRACE ) { TRACE( "GuestController#SetSit", this ); }

                if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                    this.animator.SetBool$1("Sit", sit);
                }
            },
            /*GuestController.SetSit end.*/

            /*GuestController.MoveToQueueSlot start.*/
            MoveToQueueSlot: function (worldPos, worldRotation) {
if ( TRACE ) { TRACE( "GuestController#MoveToQueueSlot", this ); }

                if (this.isOnCar) {
                    return;
                }

                if (this.jumpTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.jumpTween);
                }

                var sequence = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this.transform, worldPos.$clone(), this.queueMoveDuration), DG.Tweening.Ease.OutQuad));
                DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Quaternion,DG.Tweening.Plugins.Options.NoOptions), DG.Tweening.ShortcutExtensions.DORotateQuaternion(this.transform, worldRotation.$clone(), this.queueMoveDuration), DG.Tweening.Ease.OutQuad));
                this.jumpTween = sequence;
            },
            /*GuestController.MoveToQueueSlot end.*/

            /*GuestController.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "GuestController#OnDisable", this ); }

                if (this.jumpTween != null) {
                    DG.Tweening.TweenExtensions.Kill(this.jumpTween);
                }
            },
            /*GuestController.OnDisable end.*/


        }
    });
    /*GuestController end.*/

    /*GuestPath start.*/
    /**
     * Quy dao don khach cua map hien tai. Gan len empty cha, keo cac waypoint Transform vao mang.
     *
     * @public
     * @class GuestPath
     * @augments UnityEngine.MonoBehaviour
     */
    Bridge.define("GuestPath", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            waypoints: null
        },
        methods: {
            /*GuestPath.GetWaypointCount start.*/
            GetWaypointCount: function () {
if ( TRACE ) { TRACE( "GuestPath#GetWaypointCount", this ); }

                if (this.waypoints == null) {
                    return 0;
                }

                return this.waypoints.length;
            },
            /*GuestPath.GetWaypointCount end.*/

            /*GuestPath.HasWaypoints start.*/
            HasWaypoints: function () {
if ( TRACE ) { TRACE( "GuestPath#HasWaypoints", this ); }

                return this.GetWaypointCount() > 0;
            },
            /*GuestPath.HasWaypoints end.*/

            /*GuestPath.GetFirstPosition start.*/
            GetFirstPosition: function () {
if ( TRACE ) { TRACE( "GuestPath#GetFirstPosition", this ); }

                if (!this.HasWaypoints() || UnityEngine.Component.op_Equality(this.waypoints[0], null)) {
                    return pc.Vec3.ZERO.clone();
                }

                return this.waypoints[0].position.$clone();
            },
            /*GuestPath.GetFirstPosition end.*/

            /*GuestPath.GetPositions start.*/
            GetPositions: function () {
if ( TRACE ) { TRACE( "GuestPath#GetPositions", this ); }

                if (!this.HasWaypoints()) {
                    return System.Array.init(0, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                }

                var positions = System.Array.init(this.waypoints.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                for (var i = 0; i < this.waypoints.length; i = (i + 1) | 0) {
                    if (UnityEngine.Component.op_Inequality(this.waypoints[i], null)) {
                        positions[i] = this.waypoints[i].position.$clone();
                    } else {
                        positions[i] = pc.Vec3.ZERO.clone();
                    }
                }

                return positions;
            },
            /*GuestPath.GetPositions end.*/


        }
    });
    /*GuestPath end.*/

    /*GuestSpawnPos start.*/
    Bridge.define("GuestSpawnPos", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            guestLeftDisplayTxt: null,
            queueType: 0,
            guestQueue: null,
            triggeredCars: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GuestSpawnPos#init", this ); }

                this.queueType = Enums.GuestQueueType.StraightUp;
                this.guestQueue = new (System.Collections.Generic.List$1(GuestController)).ctor();
                this.triggeredCars = new (System.Collections.Generic.List$1(CarController)).ctor();
            }
        },
        methods: {
            /*GuestSpawnPos.HasCarTriggered start.*/
            HasCarTriggered: function (car) {
if ( TRACE ) { TRACE( "GuestSpawnPos#HasCarTriggered", this ); }

                for (var i = 0; i < this.triggeredCars.Count; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Equality(this.triggeredCars.getItem(i), car)) {
                        return true;
                    }
                }

                return false;
            },
            /*GuestSpawnPos.HasCarTriggered end.*/

            /*GuestSpawnPos.MarkCarTriggered start.*/
            MarkCarTriggered: function (car) {
if ( TRACE ) { TRACE( "GuestSpawnPos#MarkCarTriggered", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(car, null) || this.HasCarTriggered(car)) {
                    return;
                }

                this.triggeredCars.add(car);
            },
            /*GuestSpawnPos.MarkCarTriggered end.*/

            /*GuestSpawnPos.ResetCarTrigger start.*/
            ResetCarTrigger: function (car) {
if ( TRACE ) { TRACE( "GuestSpawnPos#ResetCarTrigger", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(car, null)) {
                    return;
                }

                this.triggeredCars.remove(car);
            },
            /*GuestSpawnPos.ResetCarTrigger end.*/

            /*GuestSpawnPos.RegisterGuest start.*/
            RegisterGuest: function (guest) {
if ( TRACE ) { TRACE( "GuestSpawnPos#RegisterGuest", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(guest, null)) {
                    return;
                }

                this.guestQueue.add(guest);
            },
            /*GuestSpawnPos.RegisterGuest end.*/

            /*GuestSpawnPos.GetFrontGuest start.*/
            GetFrontGuest: function () {
if ( TRACE ) { TRACE( "GuestSpawnPos#GetFrontGuest", this ); }

                if (this.guestQueue.Count === 0) {
                    return null;
                }

                return this.guestQueue.getItem(0);
            },
            /*GuestSpawnPos.GetFrontGuest end.*/

            /*GuestSpawnPos.HasGuests start.*/
            HasGuests: function () {
if ( TRACE ) { TRACE( "GuestSpawnPos#HasGuests", this ); }

                return this.guestQueue.Count > 0;
            },
            /*GuestSpawnPos.HasGuests end.*/

            /*GuestSpawnPos.RemoveGuest start.*/
            RemoveGuest: function (guest) {
if ( TRACE ) { TRACE( "GuestSpawnPos#RemoveGuest", this ); }

                this.guestQueue.remove(guest);
                this.AdvanceQueue();
                this.UpdateGuestLeftDisplay();
            },
            /*GuestSpawnPos.RemoveGuest end.*/

            /*GuestSpawnPos.HasMatchingGuest start.*/
            HasMatchingGuest: function (color) {
if ( TRACE ) { TRACE( "GuestSpawnPos#HasMatchingGuest", this ); }

                var front = this.GetFrontGuest();
                if (UnityEngine.MonoBehaviour.op_Equality(front, null)) {
                    return false;
                }

                return front.guestColor === color;
            },
            /*GuestSpawnPos.HasMatchingGuest end.*/

            /*GuestSpawnPos.AdvanceQueue start.*/
            AdvanceQueue: function () {
if ( TRACE ) { TRACE( "GuestSpawnPos#AdvanceQueue", this ); }

                var spawnManager = null;
                if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance, null)) {
                    spawnManager = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.spawnManager;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(spawnManager, null)) {
                    return;
                }

                for (var i = 0; i < this.guestQueue.Count; i = (i + 1) | 0) {
                    var guest = this.guestQueue.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Equality(guest, null) || guest.isOnCar) {
                        continue;
                    }

                    var localOffset = spawnManager.GetGuestQueueLocalOffset(this.queueType, i);
                    var worldPos = this.transform.TransformPoint$1(localOffset);
                    var rotation = spawnManager.GetGuestQueueRotation(this, this.queueType);
                    guest.MoveToQueueSlot(worldPos, rotation);
                }
            },
            /*GuestSpawnPos.AdvanceQueue end.*/

            /*GuestSpawnPos.UpdateGuestLeftDisplay start.*/
            UpdateGuestLeftDisplay: function () {
if ( TRACE ) { TRACE( "GuestSpawnPos#UpdateGuestLeftDisplay", this ); }

                this.guestLeftDisplayTxt.text = "" + this.guestQueue.Count;
            },
            /*GuestSpawnPos.UpdateGuestLeftDisplay end.*/

            /*GuestSpawnPos.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "GuestSpawnPos#OnTriggerEnter", this ); }

                var car = other.GetComponentInParent(CarController);
                if (UnityEngine.MonoBehaviour.op_Equality(car, null)) {
                    return;
                }

                if (this.HasCarTriggered(car)) {
                    return;
                }

                this.MarkCarTriggered(car);
                car.TryPickupFromSpawnPos(this);
            },
            /*GuestSpawnPos.OnTriggerEnter end.*/


        }
    });
    /*GuestSpawnPos end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ParkingSlotController start.*/
    Bridge.define("ParkingSlotController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isParked: false
        }
    });
    /*ParkingSlotController end.*/

    /*ParkingSlotManager start.*/
    Bridge.define("ParkingSlotManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            parkingSlots: null,
            parkingPath: null
        },
        methods: {
            /*ParkingSlotManager.TrySendCar start.*/
            TrySendCar: function (car) {
if ( TRACE ) { TRACE( "ParkingSlotManager#TrySendCar", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(car, null)) {
                    return false;
                }

                if (car.isMoving) {
                    return false;
                }

                if (this.parkingPath == null || this.parkingPath.length < 3) {
                    return false;
                }

                var gameManager = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance;
                if (UnityEngine.MonoBehaviour.op_Equality(gameManager, null) || !gameManager.CanStartMoving()) {
                    return false;
                }

                // Xe dang do o parking: giai phong slot -> GoForGuest -> tim slot trong sau
                if (car.isParked) {
                    car.ReleaseParkingSlot();
                    gameManager.RegisterMovingCar();
                    car.GoFromParking(this.parkingPath);
                    return true;
                }

                // Xe hang dau: khong can slot trong luc xuat phat
                if (!car.isFirstLine) {
                    return false;
                }

                gameManager.RegisterMovingCar();
                car.GoInLine(null, this.parkingPath);

                if (UnityEngine.MonoBehaviour.op_Inequality(gameManager.carLineManager, null)) {
                    gameManager.carLineManager.NotifyCarDeparted(car);
                }

                return true;
            },
            /*ParkingSlotManager.TrySendCar end.*/

            /*ParkingSlotManager.GetFreeSlot start.*/
            GetFreeSlot: function () {
if ( TRACE ) { TRACE( "ParkingSlotManager#GetFreeSlot", this ); }

                if (this.parkingSlots == null) {
                    return null;
                }

                for (var i = 0; i < this.parkingSlots.length; i = (i + 1) | 0) {
                    var slot = this.parkingSlots[i];
                    if (UnityEngine.MonoBehaviour.op_Inequality(slot, null) && !slot.isParked) {
                        return slot;
                    }
                }

                return null;
            },
            /*ParkingSlotManager.GetFreeSlot end.*/

            /*ParkingSlotManager.HasFreeSlot start.*/
            HasFreeSlot: function () {
if ( TRACE ) { TRACE( "ParkingSlotManager#HasFreeSlot", this ); }

                return UnityEngine.MonoBehaviour.op_Inequality(this.GetFreeSlot(), null);
            },
            /*ParkingSlotManager.HasFreeSlot end.*/


        }
    });
    /*ParkingSlotManager end.*/

    /*PlayerInteraction start.*/
    Bridge.define("PlayerInteraction", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            raycastCamera: null,
            rayDistance: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerInteraction#init", this ); }

                this.rayDistance = 200.0;
            }
        },
        methods: {
            /*PlayerInteraction.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayerInteraction#Awake", this ); }

                if (UnityEngine.Component.op_Equality(this.raycastCamera, null)) {
                    this.raycastCamera = UnityEngine.Camera.main;
                }
            },
            /*PlayerInteraction.Awake end.*/

            /*PlayerInteraction.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerInteraction#Update", this ); }

                if (!UnityEngine.Input.GetMouseButtonDown(0)) {
                    return;
                }

                if (UnityEngine.Component.op_Equality(this.raycastCamera, null)) {
                    return;
                }

                var ray = this.raycastCamera.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var hit = { v : new UnityEngine.RaycastHit() };

                if (!UnityEngine.Physics.Raycast$1(ray, hit, this.rayDistance, UnityEngine.Physics.DefaultRaycastLayers, UnityEngine.QueryTriggerInteraction.Collide)) {
                    return;
                }

                var car = hit.v.collider.GetComponentInParent(CarController);
                if (UnityEngine.MonoBehaviour.op_Equality(car, null)) {
                    return;
                }

                var parkingSlotManager = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.parkingSlotManager;
                if (UnityEngine.MonoBehaviour.op_Inequality(parkingSlotManager, null)) {
                    parkingSlotManager.TrySendCar(car);
                }
            },
            /*PlayerInteraction.Update end.*/


        }
    });
    /*PlayerInteraction end.*/

    /*SpawnManager start.*/
    Bridge.define("SpawnManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            car4Prefab: null,
            car6Prefab: null,
            car10Prefab: null,
            columnCount: 0,
            firstLineZ: 0,
            columnSpacing: 0,
            spawnY: 0,
            carParent: null,
            safeDistanceCar4: 0,
            safeDistanceCar6: 0,
            safeDistanceCar10: 0,
            column0: null,
            column1: null,
            column2: null,
            column3: null,
            column4: null,
            guestPrefab: null,
            guestParent: null,
            guestSpawnPosCount: 0,
            guestSpacing: 0,
            guestCurveRadius: 0,
            guestSpawnPositions: null,
            guestColors0: null,
            guestColors1: null,
            guestColors2: null,
            guestColors3: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpawnManager#init", this ); }

                this.columnCount = 3;
                this.columnSpacing = 2.0;
                this.safeDistanceCar4 = 2.0;
                this.safeDistanceCar6 = 2.5;
                this.safeDistanceCar10 = 3.5;
                this.guestSpawnPosCount = 1;
                this.guestSpacing = 0.6;
                this.guestCurveRadius = 2.0;
            }
        },
        methods: {
            /*SpawnManager.GetFirstLineZ start.*/
            GetFirstLineZ: function () {
if ( TRACE ) { TRACE( "SpawnManager#GetFirstLineZ", this ); }

                return this.firstLineZ;
            },
            /*SpawnManager.GetFirstLineZ end.*/

            /*SpawnManager.GetSafeDistanceForType start.*/
            GetSafeDistanceForType: function (carType) {
if ( TRACE ) { TRACE( "SpawnManager#GetSafeDistanceForType", this ); }

                return this.GetSafeDistance(carType);
            },
            /*SpawnManager.GetSafeDistanceForType end.*/

            /*SpawnManager.SpawnCars start.*/
            SpawnCars: function () {
if ( TRACE ) { TRACE( "SpawnManager#SpawnCars", this ); }

                this.ClearCars();

                var lineManager = null;
                if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance, null)) {
                    lineManager = DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.carLineManager;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(lineManager, null)) {
                    lineManager.ResetLines(this.columnCount);
                }

                var centerOffset = (((this.columnCount - 1) | 0)) * 0.5;

                for (var col = 0; col < this.columnCount; col = (col + 1) | 0) {
                    var columnData = this.GetColumn(col);
                    if (columnData == null || columnData.length === 0) {
                        continue;
                    }

                    var posX = (col - centerOffset) * this.columnSpacing;
                    var posZ = this.firstLineZ;

                    for (var row = 0; row < columnData.length; row = (row + 1) | 0) {
                        var data = columnData[row];
                        var prefab = this.GetCarPrefab(data.carType);
                        if (UnityEngine.GameObject.op_Equality(prefab, null)) {
                            continue;
                        }

                        var position = new pc.Vec3( posX, this.spawnY, posZ );
                        var parent = this.transform;
                        if (UnityEngine.Component.op_Inequality(this.carParent, null)) {
                            parent = this.carParent;
                        }

                        var carObject = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, prefab, position, prefab.transform.rotation, parent);

                        var car = carObject.GetComponent(CarController);
                        if (UnityEngine.MonoBehaviour.op_Inequality(car, null)) {
                            car.carType = data.carType;
                            car.carCapacity = this.GetCapacity(data.carType);
                            car.carColor = data.carColor;
                            car.isFirstLine = row === 0;
                            car.Init();

                            if (UnityEngine.MonoBehaviour.op_Inequality(lineManager, null)) {
                                lineManager.RegisterCar(col, car);
                            }
                        }

                        if (row < ((columnData.length - 1) | 0)) {
                            var nextData = columnData[((row + 1) | 0)];
                            var gap = this.GetSafeDistance(data.carType) + this.GetSafeDistance(nextData.carType);
                            posZ = posZ - gap;
                        }
                    }
                }
            },
            /*SpawnManager.SpawnCars end.*/

            /*SpawnManager.ClearCars start.*/
            ClearCars: function () {
if ( TRACE ) { TRACE( "SpawnManager#ClearCars", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance, null) && UnityEngine.MonoBehaviour.op_Inequality(DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.carLineManager, null)) {
                    DAT.Core.DesignPatterns.Singleton$1(GameManager).Instance.carLineManager.ClearLines();
                }

                if (UnityEngine.Component.op_Equality(this.carParent, null)) {
                    return;
                }

                for (var i = (this.carParent.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    UnityEngine.MonoBehaviour.Destroy(this.carParent.GetChild(i).gameObject);
                }
            },
            /*SpawnManager.ClearCars end.*/

            /*SpawnManager.SpawnGuests start.*/
            SpawnGuests: function () {
if ( TRACE ) { TRACE( "SpawnManager#SpawnGuests", this ); }

                this.ClearGuests();

                if (UnityEngine.GameObject.op_Equality(this.guestPrefab, null) || this.guestSpawnPositions == null) {
                    return;
                }

                var posCount = this.guestSpawnPosCount;
                if (posCount > this.guestSpawnPositions.length) {
                    posCount = this.guestSpawnPositions.length;
                }

                for (var posIndex = 0; posIndex < posCount; posIndex = (posIndex + 1) | 0) {
                    var spawnPos = this.guestSpawnPositions[posIndex];
                    if (UnityEngine.MonoBehaviour.op_Equality(spawnPos, null)) {
                        continue;
                    }

                    var colorOrders = this.GetGuestColors(posIndex);
                    if (colorOrders == null || colorOrders.length === 0) {
                        continue;
                    }

                    var guestIndex = 0;
                    for (var orderIndex = 0; orderIndex < colorOrders.length; orderIndex = (orderIndex + 1) | 0) {
                        var order = colorOrders[orderIndex];
                        var spawnCount = order.count;
                        if (spawnCount < 0) {
                            spawnCount = 0;
                        }

                        for (var n = 0; n < spawnCount; n = (n + 1) | 0) {
                            var localOffset = this.GetGuestLocalOffset(spawnPos.queueType, guestIndex);
                            var worldPos = spawnPos.transform.TransformPoint$1(localOffset);

                            var parent = this.transform;
                            if (UnityEngine.Component.op_Inequality(this.guestParent, null)) {
                                parent = this.guestParent;
                            }

                            var rotation = this.GetGuestRotation(spawnPos, spawnPos.queueType);
                            var guestObject = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.guestPrefab, worldPos, rotation, parent);

                            var guest = guestObject.GetComponent(GuestController);
                            if (UnityEngine.MonoBehaviour.op_Inequality(guest, null)) {
                                guest.guestColor = order.color;
                                guest.Init();
                                spawnPos.RegisterGuest(guest);
                            }

                            spawnPos.UpdateGuestLeftDisplay();
                            guestIndex = (guestIndex + 1) | 0;
                        }
                    }
                }
            },
            /*SpawnManager.SpawnGuests end.*/

            /*SpawnManager.ClearGuests start.*/
            ClearGuests: function () {
if ( TRACE ) { TRACE( "SpawnManager#ClearGuests", this ); }

                if (UnityEngine.Component.op_Equality(this.guestParent, null)) {
                    return;
                }

                for (var i = (this.guestParent.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    UnityEngine.MonoBehaviour.Destroy(this.guestParent.GetChild(i).gameObject);
                }
            },
            /*SpawnManager.ClearGuests end.*/

            /*SpawnManager.ResetGuestTriggersForCar start.*/
            ResetGuestTriggersForCar: function (car) {
if ( TRACE ) { TRACE( "SpawnManager#ResetGuestTriggersForCar", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(car, null) || this.guestSpawnPositions == null) {
                    return;
                }

                for (var i = 0; i < this.guestSpawnPositions.length; i = (i + 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.guestSpawnPositions[i], null)) {
                        this.guestSpawnPositions[i].ResetCarTrigger(car);
                    }
                }
            },
            /*SpawnManager.ResetGuestTriggersForCar end.*/

            /*SpawnManager.AreAllGuestSpawnPosEmpty start.*/
            AreAllGuestSpawnPosEmpty: function () {
if ( TRACE ) { TRACE( "SpawnManager#AreAllGuestSpawnPosEmpty", this ); }

                if (this.guestSpawnPositions == null) {
                    return true;
                }

                for (var i = 0; i < this.guestSpawnPositions.length; i = (i + 1) | 0) {
                    var spawnPos = this.guestSpawnPositions[i];
                    if (UnityEngine.MonoBehaviour.op_Inequality(spawnPos, null) && spawnPos.HasGuests()) {
                        return false;
                    }
                }

                return true;
            },
            /*SpawnManager.AreAllGuestSpawnPosEmpty end.*/

            /*SpawnManager.GetColumn start.*/
            GetColumn: function (columnIndex) {
if ( TRACE ) { TRACE( "SpawnManager#GetColumn", this ); }

                if (columnIndex === 0) {
                    return this.column0;
                }

                if (columnIndex === 1) {
                    return this.column1;
                }

                if (columnIndex === 2) {
                    return this.column2;
                }

                if (columnIndex === 3) {
                    return this.column3;
                }

                if (columnIndex === 4) {
                    return this.column4;
                }

                return null;
            },
            /*SpawnManager.GetColumn end.*/

            /*SpawnManager.GetCarPrefab start.*/
            GetCarPrefab: function (carType) {
if ( TRACE ) { TRACE( "SpawnManager#GetCarPrefab", this ); }

                if (carType === Enums.CarType.Car4) {
                    return this.car4Prefab;
                }

                if (carType === Enums.CarType.Car6) {
                    return this.car6Prefab;
                }

                if (carType === Enums.CarType.Car10) {
                    return this.car10Prefab;
                }

                return null;
            },
            /*SpawnManager.GetCarPrefab end.*/

            /*SpawnManager.GetCapacity start.*/
            GetCapacity: function (carType) {
if ( TRACE ) { TRACE( "SpawnManager#GetCapacity", this ); }

                if (carType === Enums.CarType.Car4) {
                    return 4;
                }

                if (carType === Enums.CarType.Car6) {
                    return 6;
                }

                if (carType === Enums.CarType.Car10) {
                    return 10;
                }

                return 0;
            },
            /*SpawnManager.GetCapacity end.*/

            /*SpawnManager.GetSafeDistance start.*/
            GetSafeDistance: function (carType) {
if ( TRACE ) { TRACE( "SpawnManager#GetSafeDistance", this ); }

                if (carType === Enums.CarType.Car4) {
                    return this.safeDistanceCar4;
                }

                if (carType === Enums.CarType.Car6) {
                    return this.safeDistanceCar6;
                }

                if (carType === Enums.CarType.Car10) {
                    return this.safeDistanceCar10;
                }

                return this.safeDistanceCar4;
            },
            /*SpawnManager.GetSafeDistance end.*/

            /*SpawnManager.GetGuestQueueLocalOffset start.*/
            GetGuestQueueLocalOffset: function (queueType, index) {
if ( TRACE ) { TRACE( "SpawnManager#GetGuestQueueLocalOffset", this ); }

                return this.GetGuestLocalOffset(queueType, index);
            },
            /*SpawnManager.GetGuestQueueLocalOffset end.*/

            /*SpawnManager.GetGuestQueueRotation start.*/
            GetGuestQueueRotation: function (spawnPos, queueType) {
if ( TRACE ) { TRACE( "SpawnManager#GetGuestQueueRotation", this ); }

                return this.GetGuestRotation(spawnPos, queueType);
            },
            /*SpawnManager.GetGuestQueueRotation end.*/

            /*SpawnManager.GetGuestColors start.*/
            GetGuestColors: function (posIndex) {
if ( TRACE ) { TRACE( "SpawnManager#GetGuestColors", this ); }

                if (posIndex === 0) {
                    return this.guestColors0;
                }

                if (posIndex === 1) {
                    return this.guestColors1;
                }

                if (posIndex === 2) {
                    return this.guestColors2;
                }

                if (posIndex === 3) {
                    return this.guestColors3;
                }

                return null;
            },
            /*SpawnManager.GetGuestColors end.*/

            /*SpawnManager.GetGuestLocalOffset start.*/
            GetGuestLocalOffset: function (queueType, index) {
if ( TRACE ) { TRACE( "SpawnManager#GetGuestLocalOffset", this ); }

                if (index <= 0) {
                    return pc.Vec3.ZERO.clone();
                }

                var distance = index * this.guestSpacing;

                if (queueType === Enums.GuestQueueType.StraightUp) {
                    return new pc.Vec3( 0.0, 0.0, distance );
                }

                if (queueType === Enums.GuestQueueType.StraightLeft) {
                    return new pc.Vec3( -distance, 0.0, 0.0 );
                }

                if (queueType === Enums.GuestQueueType.StraightRight) {
                    return new pc.Vec3( distance, 0.0, 0.0 );
                }

                // Curve: cung 90 do (len tren roi re) roi di thang sang trai/phai
                var arcLength = this.guestCurveRadius * (1.57079637);

                if (queueType === Enums.GuestQueueType.CurveLeft) {
                    if (distance <= arcLength) {
                        var angle = distance / this.guestCurveRadius;
                        var x = -this.guestCurveRadius + this.guestCurveRadius * Math.cos(angle);
                        var z = this.guestCurveRadius * Math.sin(angle);
                        return new pc.Vec3( x, 0.0, z );
                    }

                    var straight = distance - arcLength;
                    return new pc.Vec3( -this.guestCurveRadius - straight, 0.0, this.guestCurveRadius );
                }

                if (queueType === Enums.GuestQueueType.CurveRight) {
                    if (distance <= arcLength) {
                        var angle1 = distance / this.guestCurveRadius;
                        var x1 = this.guestCurveRadius - this.guestCurveRadius * Math.cos(angle1);
                        var z1 = this.guestCurveRadius * Math.sin(angle1);
                        return new pc.Vec3( x1, 0.0, z1 );
                    }

                    var straight1 = distance - arcLength;
                    return new pc.Vec3( this.guestCurveRadius + straight1, 0.0, this.guestCurveRadius );
                }

                return new pc.Vec3( 0.0, 0.0, distance );
            },
            /*SpawnManager.GetGuestLocalOffset end.*/

            /*SpawnManager.GetGuestRotation start.*/
            GetGuestRotation: function (spawnPos, queueType) {
if ( TRACE ) { TRACE( "SpawnManager#GetGuestRotation", this ); }

                var localLook = new pc.Vec3( 0.0, 0.0, -1.0 );

                if (queueType === Enums.GuestQueueType.StraightUp) {
                    // Huong xuong
                    localLook = new pc.Vec3( 0.0, 0.0, -1.0 );
                } else if (queueType === Enums.GuestQueueType.StraightLeft) {
                    // Huong sang phai
                    localLook = new pc.Vec3( 1.0, 0.0, 0.0 );
                } else if (queueType === Enums.GuestQueueType.StraightRight) {
                    // Huong sang trai
                    localLook = new pc.Vec3( -1.0, 0.0, 0.0 );
                } else if (queueType === Enums.GuestQueueType.CurveLeft) {
                    // Cheo xuong-phai
                    localLook = new pc.Vec3( 1.0, 0.0, -1.0 );
                } else if (queueType === Enums.GuestQueueType.CurveRight) {
                    // Cheo xuong-trai
                    localLook = new pc.Vec3( -1.0, 0.0, -1.0 );
                }

                var worldLook = spawnPos.transform.TransformDirection$1(localLook.$clone());
                worldLook.y = 0.0;
                if (worldLook.lengthSq() < 0.0001) {
                    return spawnPos.transform.rotation.$clone();
                }

                return new pc.Quat().lookRotation( worldLook.clone().normalize(), pc.Vec3.UP.clone() );
            },
            /*SpawnManager.GetGuestRotation end.*/


        }
    });
    /*SpawnManager end.*/

    /*DAT.Core.Optimization.SCU.SCUManager start.*/
    Bridge.define("DAT.Core.Optimization.SCU.SCUManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#inherits", this ); }
 return [DAT.Core.DesignPatterns.Singleton$1(DAT.Core.Optimization.SCU.SCUManager)]; },
        fields: {
            _update: null,
            _late: null,
            _fixed: null,
            _index: null,
            _pendingAdd: null,
            _pendingRemove: null,
            _isTicking: false,
            _aliveCount: 0,
            _nextId: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#init", this ); }

                this._update = new (System.Collections.Generic.List$1(DAT.Core.Optimization.SCU.SCUManager.Entry)).$ctor2(128);
                this._late = new (System.Collections.Generic.List$1(DAT.Core.Optimization.SCU.SCUManager.Entry)).$ctor2(128);
                this._fixed = new (System.Collections.Generic.List$1(DAT.Core.Optimization.SCU.SCUManager.Entry)).$ctor2(128);
                this._index = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Tuple$2(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType,System.Int32))).$ctor4(256);
                this._pendingAdd = new (System.Collections.Generic.List$1(DAT.Core.Optimization.SCU.SCUManager.Entry)).$ctor2(64);
                this._pendingRemove = new (System.Collections.Generic.List$1(System.Int32)).$ctor2(64);
                this._nextId = 1;
            }
        },
        methods: {
            /*DAT.Core.Optimization.SCU.SCUManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Awake", this ); }

                DAT.Core.DesignPatterns.Singleton$1(DAT.Core.Optimization.SCU.SCUManager).prototype.Awake.call(this);
                this.enabled = false;
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Awake end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Update", this ); }

                this.Tick(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType.Update);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Update end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#LateUpdate", this ); }

                this.Tick(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType.LateUpdate);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.LateUpdate end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#FixedUpdate", this ); }

                this.Tick(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType.FixedUpdate);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.FixedUpdate end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.Register start.*/
            Register: function (action, type) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Register", this ); }

                if (Bridge.staticEquals(action, null)) {
                    return Bridge.getDefaultValue(DAT.Core.Optimization.SCU.SCUManager.SCUSubscription);
                }
                return this.RegisterInternal(action, type);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Register end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.Register$1 start.*/
            Register$1: function (T1, action, a1, type) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Register$1", this ); }

                if (Bridge.staticEquals(action, null)) {
                    return Bridge.getDefaultValue(DAT.Core.Optimization.SCU.SCUManager.SCUSubscription);
                }
                return this.RegisterInternal(function () {
                    action(Bridge.rValue(a1));
                }, type);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Register$1 end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.Register$2 start.*/
            Register$2: function (T1, T2, action, a1, a2, type) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Register$2", this ); }

                if (Bridge.staticEquals(action, null)) {
                    return Bridge.getDefaultValue(DAT.Core.Optimization.SCU.SCUManager.SCUSubscription);
                }
                return this.RegisterInternal(function () {
                    action(Bridge.rValue(a1), Bridge.rValue(a2));
                }, type);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Register$2 end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.Register$3 start.*/
            Register$3: function (T1, T2, T3, action, a1, a2, a3, type) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Register$3", this ); }

                if (Bridge.staticEquals(action, null)) {
                    return Bridge.getDefaultValue(DAT.Core.Optimization.SCU.SCUManager.SCUSubscription);
                }
                return this.RegisterInternal(function () {
                    action(Bridge.rValue(a1), Bridge.rValue(a2), Bridge.rValue(a3));
                }, type);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Register$3 end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.Register$4 start.*/
            Register$4: function (T1, T2, T3, T4, action, a1, a2, a3, a4, type) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Register$4", this ); }

                if (Bridge.staticEquals(action, null)) {
                    return Bridge.getDefaultValue(DAT.Core.Optimization.SCU.SCUManager.SCUSubscription);
                }
                return this.RegisterInternal(function () {
                    action(Bridge.rValue(a1), Bridge.rValue(a2), Bridge.rValue(a3), Bridge.rValue(a4));
                }, type);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Register$4 end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.Unregister start.*/
            Unregister: function (sub) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Unregister", this ); }

                if (!sub.IsValid) {
                    return;
                }
                if (!this._index.containsKey(sub.Id)) {
                    return;
                }

                this._aliveCount = (this._aliveCount - 1) | 0;

                if (this._isTicking) {
                    this._pendingRemove.add(sub.Id);
                } else {
                    this.RemoveNow(sub.Id);
                }

                if (this._aliveCount <= 0) {
                    this.enabled = false;
                }
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Unregister end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.RegisterInternal start.*/
            RegisterInternal: function (tick, type) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#RegisterInternal", this ); }

                var id = this.AllocId();

                var entry = new DAT.Core.Optimization.SCU.SCUManager.Entry();
                entry.id = id;
                entry.type = type;
                entry.tick = tick;

                this._aliveCount = (this._aliveCount + 1) | 0;
                if (!this.enabled) {
                    this.enabled = true;
                }

                if (this._isTicking) {
                    this._pendingAdd.add(entry.$clone());
                } else {
                    this.AddNow(entry);
                }

                return new DAT.Core.Optimization.SCU.SCUManager.SCUSubscription.$ctor1(id);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.RegisterInternal end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.Tick start.*/
            Tick: function (type) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#Tick", this ); }

                if (this._aliveCount <= 0) {
                    this.enabled = false;
                    return;
                }

                this._isTicking = true;

                var list = this.GetList(type);
                for (var i = 0; i < list.Count; i = (i + 1) | 0) {
                    var e = list.getItem(i).$clone();
                    if (!this._index.containsKey(e.id)) {
                        continue;
                    }

                    try {
                        if (!Bridge.staticEquals(e.tick, null)) {
                            e.tick();
                        }
                    } catch (ex) {
                        ex = System.Exception.create(ex);
                        UnityEngine.Debug.LogException(ex);
                    }
                }

                this._isTicking = false;
                this.FlushPending();

                if (this._aliveCount <= 0) {
                    this.enabled = false;
                }
            },
            /*DAT.Core.Optimization.SCU.SCUManager.Tick end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.FlushPending start.*/
            FlushPending: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#FlushPending", this ); }

                for (var i = 0; i < this._pendingRemove.Count; i = (i + 1) | 0) {
                    this.RemoveNow(this._pendingRemove.getItem(i));
                }
                this._pendingRemove.clear();

                for (var i1 = 0; i1 < this._pendingAdd.Count; i1 = (i1 + 1) | 0) {
                    this.AddNow(this._pendingAdd.getItem(i1));
                }
                this._pendingAdd.clear();
            },
            /*DAT.Core.Optimization.SCU.SCUManager.FlushPending end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.AddNow start.*/
            AddNow: function (e) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#AddNow", this ); }

                var list = this.GetList(e.type);
                var index = list.Count;
                list.add(e.$clone());
                this._index.setItem(e.id, { Item1: e.type, Item2: index });
            },
            /*DAT.Core.Optimization.SCU.SCUManager.AddNow end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.RemoveNow start.*/
            RemoveNow: function (id) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#RemoveNow", this ); }

                var info = { };
                if (!this._index.tryGetValue(id, info)) {
                    return;
                }

                var list = this.GetList(info.v.Item1);
                var removeIndex = info.v.Item2;
                var lastIndex = (list.Count - 1) | 0;

                if (removeIndex !== lastIndex) {
                    var last = list.getItem(lastIndex).$clone();
                    list.setItem(removeIndex, last.$clone());
                    this._index.setItem(last.id, { Item1: info.v.Item1, Item2: removeIndex });
                }

                list.removeAt(lastIndex);
                this._index.remove(id);
            },
            /*DAT.Core.Optimization.SCU.SCUManager.RemoveNow end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.GetList start.*/
            GetList: function (type) {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#GetList", this ); }

                if (type === DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType.Update) {
                    return this._update;
                }
                if (type === DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType.LateUpdate) {
                    return this._late;
                }
                return this._fixed;
            },
            /*DAT.Core.Optimization.SCU.SCUManager.GetList end.*/

            /*DAT.Core.Optimization.SCU.SCUManager.AllocId start.*/
            AllocId: function () {
if ( TRACE ) { TRACE( "DAT.Core.Optimization.SCU.SCUManager#AllocId", this ); }

                var id = Bridge.identity(this._nextId, ((this._nextId = (this._nextId + 1) | 0)));
                if (this._nextId === 2147483647) {
                    this._nextId = 1;
                }
                if (id === 0) {
                    id = Bridge.identity(this._nextId, ((this._nextId = (this._nextId + 1) | 0)));
                }
                return id;
            },
            /*DAT.Core.Optimization.SCU.SCUManager.AllocId end.*/


        },
        overloads: {
            "Register(Action<T1>, T1, SCUUpdateType)": "Register$1",
            "Register(Action<T1, T2>, T1, T2, SCUUpdateType)": "Register$2",
            "Register(Action<T1, T2, T3>, T1, T2, T3, SCUUpdateType)": "Register$3",
            "Register(Action<T1, T2, T3, T4>, T1, T2, T3, T4, SCUUpdateType)": "Register$4"
        }
    });
    /*DAT.Core.Optimization.SCU.SCUManager end.*/

    /*DAT.Core.ResponsiveManager start.*/
    Bridge.define("DAT.Core.ResponsiveManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#inherits", this ); }
 return [DAT.Core.DesignPatterns.Singleton$1(DAT.Core.ResponsiveManager)]; },
        statics: {
            fields: {
                Aspect9x16: 0,
                Aspect9x18: 0,
                Aspect9x20: 0,
                Aspect9x21: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#init", this ); }

                    this.Aspect9x16 = 0.5625;
                    this.Aspect9x18 = 0.5;
                    this.Aspect9x20 = 0.45;
                    this.Aspect9x21 = 0.428571433;
                }
            },
            methods: {
                /*DAT.Core.ResponsiveManager.GetCompactAspect:static start.*/
                /**
                 * Tỉ lệ cạnh ngắn / cạnh dài — dùng chung cho Portrait và Landscape.
                 *
                 * @static
                 * @private
                 * @this DAT.Core.ResponsiveManager
                 * @memberof DAT.Core.ResponsiveManager
                 * @return  {number}
                 */
                GetCompactAspect: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#GetCompactAspect", this ); }

                    var w = UnityEngine.Screen.width;
                    var h = UnityEngine.Screen.height;
                    return w < h ? w / h : h / w;
                },
                /*DAT.Core.ResponsiveManager.GetCompactAspect:static end.*/

                /*DAT.Core.ResponsiveManager.LerpCameraValues:static start.*/
                LerpCameraValues: function (aspectA, valuesA, aspectB, valuesB, aspect, fieldOfView, orthographicSize) {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#LerpCameraValues", this ); }

                    var t = pc.math.inverseLerp(aspectA, aspectB, aspect);
                    fieldOfView.v = pc.math.lerp(valuesA.fieldOfView, valuesB.fieldOfView, t);
                    orthographicSize.v = pc.math.lerp(valuesA.orthographicSize, valuesB.orthographicSize, t);
                },
                /*DAT.Core.ResponsiveManager.LerpCameraValues:static end.*/


            }
        },
        fields: {
            currentOrientation: 0,
            OnPortrait: null,
            OnLandscape: null,
            OnOrientationChanged: null,
            portraitOnlyObjects: null,
            landscapeOnlyObjects: null,
            targetCanvasScaler: null,
            autoFindCanvasScaler: false,
            portraitResolution: null,
            landscapeResolution: null,
            adjustCamerasByAspect: false,
            targetCameras: null,
            values9x16: null,
            values9x18: null,
            values9x20: null,
            values9x21: null,
            useDeviceOrientation: false,
            aspectChangeThreshold: 0,
            lastAspectRatio: 0
        },
        props: {
            CurrentOrientation: {
                get: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#CurrentOrientation#get", this ); }

                    return this.currentOrientation;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#init", this ); }

                this.portraitResolution = new UnityEngine.Vector2();
                this.landscapeResolution = new UnityEngine.Vector2();
                this.values9x16 = new DAT.Core.AspectCameraValues();
                this.values9x18 = new DAT.Core.AspectCameraValues();
                this.values9x20 = new DAT.Core.AspectCameraValues();
                this.values9x21 = new DAT.Core.AspectCameraValues();
                this.currentOrientation = DAT.Core.Orientation.Portrait;
                this.portraitOnlyObjects = System.Array.init(0, null, UnityEngine.GameObject);
                this.landscapeOnlyObjects = System.Array.init(0, null, UnityEngine.GameObject);
                this.autoFindCanvasScaler = true;
                this.portraitResolution = new pc.Vec2( 1080, 1920 );
                this.landscapeResolution = new pc.Vec2( 1920, 1080 );
                this.adjustCamerasByAspect = false;
                this.targetCameras = System.Array.init(0, null, UnityEngine.Camera);
                this.values9x16 = new DAT.Core.AspectCameraValues.$ctor1(60.0, 5.0);
                this.values9x18 = new DAT.Core.AspectCameraValues.$ctor1(60.0, 5.0);
                this.values9x20 = new DAT.Core.AspectCameraValues.$ctor1(60.0, 5.0);
                this.values9x21 = new DAT.Core.AspectCameraValues.$ctor1(60.0, 5.0);
                this.useDeviceOrientation = false;
                this.aspectChangeThreshold = 0.01;
                this.lastAspectRatio = -1;
            }
        },
        methods: {
            /*DAT.Core.ResponsiveManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#Start", this ); }

                // Ensure singleton initialization happens early
                // (Awake() in base already sets persistence if enabled)
                if (UnityEngine.MonoBehaviour.op_Equality(this.targetCanvasScaler, null) && this.autoFindCanvasScaler) {
                    this.targetCanvasScaler = this.GetComponentInParent(UnityEngine.UI.CanvasScaler);
                }
                this.EvaluateOrientation(true);
            },
            /*DAT.Core.ResponsiveManager.Start end.*/

            /*DAT.Core.ResponsiveManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#Awake", this ); }

                DAT.Core.DesignPatterns.Singleton$1(DAT.Core.ResponsiveManager).prototype.Awake.call(this);
            },
            /*DAT.Core.ResponsiveManager.Awake end.*/

            /*DAT.Core.ResponsiveManager.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#LateUpdate", this ); }

                this.EvaluateOrientation();
            },
            /*DAT.Core.ResponsiveManager.LateUpdate end.*/

            /*DAT.Core.ResponsiveManager.EvaluateOrientation start.*/
            EvaluateOrientation: function (forceInvoke) {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#EvaluateOrientation", this ); }

                if (forceInvoke === void 0) { forceInvoke = false; }
                var aspect = UnityEngine.Screen.width / UnityEngine.Screen.height;

                if (!forceInvoke && Math.abs(aspect - this.lastAspectRatio) < this.aspectChangeThreshold) {
                    return;
                }

                this.lastAspectRatio = aspect;

                // Camera theo tỉ lệ compact — cập nhật cả khi orientation không đổi
                this.UpdateCamerasByAspect();

                var newOrientation = this.DetermineOrientation(aspect);

                if (newOrientation !== this.currentOrientation || forceInvoke) {
                    this.currentOrientation = newOrientation;

                    this.ToggleObjectsByOrientation(this.currentOrientation);
                    this.UpdateCanvasScaler(this.currentOrientation);

                    this.OnOrientationChanged != null ? this.OnOrientationChanged.Invoke(this.currentOrientation) : null;
                    if (this.currentOrientation === DAT.Core.Orientation.Landscape) {
                        this.OnLandscape != null ? this.OnLandscape.Invoke() : null;
                    } else {
                        this.OnPortrait != null ? this.OnPortrait.Invoke() : null;
                    }
                }
            },
            /*DAT.Core.ResponsiveManager.EvaluateOrientation end.*/

            /*DAT.Core.ResponsiveManager.DetermineOrientation start.*/
            DetermineOrientation: function (aspect) {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#DetermineOrientation", this ); }

                if (this.useDeviceOrientation) {
                    // Try Screen.orientation first
                    switch (UnityEngine.Screen.orientation) {
                        case UnityEngine.ScreenOrientation.LandscapeLeft: 
                        case UnityEngine.ScreenOrientation.LandscapeRight: 
                            return DAT.Core.Orientation.Landscape;
                        case UnityEngine.ScreenOrientation.Portrait: 
                        case UnityEngine.ScreenOrientation.PortraitUpsideDown: 
                            return DAT.Core.Orientation.Portrait;
                    }

                    // Fallback to Input.deviceOrientation
                    var dev = UnityEngine.Input.deviceOrientation;
                    if (dev === UnityEngine.DeviceOrientation.LandscapeLeft || dev === UnityEngine.DeviceOrientation.LandscapeRight) {
                        return DAT.Core.Orientation.Landscape;
                    }
                    if (dev === UnityEngine.DeviceOrientation.Portrait || dev === UnityEngine.DeviceOrientation.PortraitUpsideDown) {
                        return DAT.Core.Orientation.Portrait;
                    }
                }

                // Fallback to aspect ratio
                return aspect >= 1.0 ? DAT.Core.Orientation.Landscape : DAT.Core.Orientation.Portrait;
            },
            /*DAT.Core.ResponsiveManager.DetermineOrientation end.*/

            /*DAT.Core.ResponsiveManager.ToggleObjectsByOrientation start.*/
            ToggleObjectsByOrientation: function (orientation) {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#ToggleObjectsByOrientation", this ); }

                var isPortrait = orientation === DAT.Core.Orientation.Portrait;

                for (var i = 0; i < this.portraitOnlyObjects.length; i = (i + 1) | 0) {
                    var obj = this.portraitOnlyObjects[i];
                    if (UnityEngine.GameObject.op_Inequality(obj, null) && obj.activeSelf !== isPortrait) {
                        obj.SetActive(isPortrait);
                    }
                }

                for (var i1 = 0; i1 < this.landscapeOnlyObjects.length; i1 = (i1 + 1) | 0) {
                    var obj1 = this.landscapeOnlyObjects[i1];
                    if (UnityEngine.GameObject.op_Inequality(obj1, null) && obj1.activeSelf !== !isPortrait) {
                        obj1.SetActive(!isPortrait);
                    }
                }
            },
            /*DAT.Core.ResponsiveManager.ToggleObjectsByOrientation end.*/

            /*DAT.Core.ResponsiveManager.UpdateCanvasScaler start.*/
            UpdateCanvasScaler: function (orientation) {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#UpdateCanvasScaler", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.targetCanvasScaler, null)) {
                    return;
                }

                this.targetCanvasScaler.referenceResolution = orientation === DAT.Core.Orientation.Landscape ? this.landscapeResolution.$clone() : this.portraitResolution.$clone();
            },
            /*DAT.Core.ResponsiveManager.UpdateCanvasScaler end.*/

            /*DAT.Core.ResponsiveManager.UpdateCamerasByAspect start.*/
            UpdateCamerasByAspect: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#UpdateCamerasByAspect", this ); }

                if (!this.adjustCamerasByAspect || this.targetCameras == null || this.targetCameras.length === 0) {
                    return;
                }
                var fov = { };
                var size = { };

                this.SampleCameraValues(DAT.Core.ResponsiveManager.GetCompactAspect(), fov, size);

                for (var i = 0; i < this.targetCameras.length; i = (i + 1) | 0) {
                    var cam = this.targetCameras[i];
                    if (UnityEngine.Component.op_Equality(cam, null)) {
                        continue;
                    }

                    if (cam.orthographic) {
                        cam.orthographicSize = size.v;
                    } else {
                        cam.fieldOfView = fov.v;
                    }
                }
            },
            /*DAT.Core.ResponsiveManager.UpdateCamerasByAspect end.*/

            /*DAT.Core.ResponsiveManager.SampleCameraValues start.*/
            /**
             * Nội suy tuyến tính theo các mốc 9:21 → 9:20 → 9:18 → 9:16.
             Ngoài khoảng: clamp về mốc gần nhất.
             *
             * @instance
             * @private
             * @this DAT.Core.ResponsiveManager
             * @memberof DAT.Core.ResponsiveManager
             * @param   {number}           compactAspect       
             * @param   {System.Single}    fieldOfView         
             * @param   {System.Single}    orthographicSize
             * @return  {void}
             */
            SampleCameraValues: function (compactAspect, fieldOfView, orthographicSize) {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#SampleCameraValues", this ); }

                // Mốc tăng dần: màn càng "vuông" thì aspect càng lớn
                if (compactAspect <= DAT.Core.ResponsiveManager.Aspect9x21) {
                    fieldOfView.v = this.values9x21.fieldOfView;
                    orthographicSize.v = this.values9x21.orthographicSize;
                    return;
                }

                if (compactAspect >= DAT.Core.ResponsiveManager.Aspect9x16) {
                    fieldOfView.v = this.values9x16.fieldOfView;
                    orthographicSize.v = this.values9x16.orthographicSize;
                    return;
                }

                if (compactAspect < DAT.Core.ResponsiveManager.Aspect9x20) {
                    DAT.Core.ResponsiveManager.LerpCameraValues(DAT.Core.ResponsiveManager.Aspect9x21, this.values9x21, DAT.Core.ResponsiveManager.Aspect9x20, this.values9x20, compactAspect, fieldOfView, orthographicSize);
                    return;
                }

                if (compactAspect < DAT.Core.ResponsiveManager.Aspect9x18) {
                    DAT.Core.ResponsiveManager.LerpCameraValues(DAT.Core.ResponsiveManager.Aspect9x20, this.values9x20, DAT.Core.ResponsiveManager.Aspect9x18, this.values9x18, compactAspect, fieldOfView, orthographicSize);
                    return;
                }

                DAT.Core.ResponsiveManager.LerpCameraValues(DAT.Core.ResponsiveManager.Aspect9x18, this.values9x18, DAT.Core.ResponsiveManager.Aspect9x16, this.values9x16, compactAspect, fieldOfView, orthographicSize);
            },
            /*DAT.Core.ResponsiveManager.SampleCameraValues end.*/

            /*DAT.Core.ResponsiveManager.ForceEvaluate start.*/
            /**
             * Gọi thủ công khi cần cập nhật ngay (ví dụ thay đổi cấu hình trong runtime).
             *
             * @instance
             * @public
             * @this DAT.Core.ResponsiveManager
             * @memberof DAT.Core.ResponsiveManager
             * @return  {void}
             */
            ForceEvaluate: function () {
if ( TRACE ) { TRACE( "DAT.Core.ResponsiveManager#ForceEvaluate", this ); }

                this.EvaluateOrientation(true);
            },
            /*DAT.Core.ResponsiveManager.ForceEvaluate end.*/


        }
    });
    /*DAT.Core.ResponsiveManager end.*/

    /*DAT.Core.SEPManager start.*/
    Bridge.define("DAT.Core.SEPManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "DAT.Core.SEPManager#inherits", this ); }
 return [DAT.Core.DesignPatterns.Singleton$1(DAT.Core.SEPManager)]; },
        fields: {
            awakeEvents: null,
            startEvents: null
        },
        methods: {
            /*DAT.Core.SEPManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DAT.Core.SEPManager#Awake", this ); }

                DAT.Core.DesignPatterns.Singleton$1(DAT.Core.SEPManager).prototype.Awake.call(this);
                this.awakeEvents != null ? this.awakeEvents.Invoke() : null;

            },
            /*DAT.Core.SEPManager.Awake end.*/

            /*DAT.Core.SEPManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DAT.Core.SEPManager#Start", this ); }

                this.startEvents != null ? this.startEvents.Invoke() : null;
            },
            /*DAT.Core.SEPManager.Start end.*/


        }
    });
    /*DAT.Core.SEPManager end.*/

    /*DAT.Core.TutorialManager start.*/
    Bridge.define("DAT.Core.TutorialManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#inherits", this ); }
 return [DAT.Core.DesignPatterns.Singleton$1(DAT.Core.TutorialManager)]; },
        fields: {
            tutorialObjects: null,
            isTutorialEnabled: false,
            isHighlightObjects: false,
            highlightObjects: null,
            highlightMaterial: null,
            isTutorialActive: false,
            highlightIntensityMin: 0,
            highlightIntensityMax: 0,
            currentHighlightIndex: 0,
            isValueUpHighlightIntensity: false,
            isValueDownHighlightIntensity: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#init", this ); }

                this.isTutorialEnabled = false;
                this.isHighlightObjects = false;
                this.isTutorialActive = false;
                this.highlightIntensityMin = 0.0;
                this.highlightIntensityMax = 1.0;
                this.currentHighlightIndex = 0;
                this.isValueUpHighlightIntensity = false;
                this.isValueDownHighlightIntensity = false;
            }
        },
        methods: {
            /*DAT.Core.TutorialManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#Start", this ); }

                if (this.isTutorialEnabled) {
                    this.ShowTutorial();
                }
                if (this.isHighlightObjects && this.highlightObjects.Count > 0) {
                    this.HighlightObject(this.currentHighlightIndex);
                    this.RunHighlightIntensity();
                }
            },
            /*DAT.Core.TutorialManager.Start end.*/

            /*DAT.Core.TutorialManager.ShowTutorial start.*/
            ShowTutorial: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#ShowTutorial", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.tutorialObjects);
                try {
                    while ($t.moveNext()) {
                        var obj = $t.Current;
                        obj.SetActive(true);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.isTutorialActive = true;
            },
            /*DAT.Core.TutorialManager.ShowTutorial end.*/

            /*DAT.Core.TutorialManager.HideTutorial start.*/
            HideTutorial: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#HideTutorial", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.tutorialObjects);
                try {
                    while ($t.moveNext()) {
                        var obj = $t.Current;
                        obj.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.isTutorialActive = false;
            },
            /*DAT.Core.TutorialManager.HideTutorial end.*/

            /*DAT.Core.TutorialManager.HighlightObject start.*/
            HighlightObject: function (index) {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#HighlightObject", this ); }

                var currentMaterials = this.highlightObjects.getItem(index).materials;
                var newMaterials = System.Array.init(((currentMaterials.length + 1) | 0), null, UnityEngine.Material);
                for (var i = 0; i < currentMaterials.length; i = (i + 1) | 0) {
                    newMaterials[i] = currentMaterials[i];
                }
                newMaterials[currentMaterials.length] = this.highlightMaterial;
                this.highlightObjects.getItem(index).materials = newMaterials;
            },
            /*DAT.Core.TutorialManager.HighlightObject end.*/

            /*DAT.Core.TutorialManager.UnhighlightObject start.*/
            UnhighlightObject: function (index) {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#UnhighlightObject", this ); }

                var currentMaterials = this.highlightObjects.getItem(index).materials;
                var newMaterials = System.Array.init(((currentMaterials.length - 1) | 0), null, UnityEngine.Material);
                for (var i = 0; i < ((currentMaterials.length - 1) | 0); i = (i + 1) | 0) {
                    newMaterials[i] = currentMaterials[i];
                }
                this.highlightObjects.getItem(index).materials = newMaterials;
            },
            /*DAT.Core.TutorialManager.UnhighlightObject end.*/

            /*DAT.Core.TutorialManager.HighlightNextObject start.*/
            HighlightNextObject: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#HighlightNextObject", this ); }

                if (this.currentHighlightIndex >= this.highlightObjects.Count) {
                    return;
                }
                this.UnhighlightObject(this.currentHighlightIndex);
                this.currentHighlightIndex = (this.currentHighlightIndex + 1) | 0;
                this.HighlightObject(this.currentHighlightIndex);
            },
            /*DAT.Core.TutorialManager.HighlightNextObject end.*/

            /*DAT.Core.TutorialManager.HighlightPreviousObject start.*/
            HighlightPreviousObject: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#HighlightPreviousObject", this ); }

                if (this.currentHighlightIndex <= 0) {
                    return;
                }
                this.UnhighlightObject(this.currentHighlightIndex);
                this.currentHighlightIndex = (this.currentHighlightIndex - 1) | 0;
                this.HighlightObject(this.currentHighlightIndex);
            },
            /*DAT.Core.TutorialManager.HighlightPreviousObject end.*/

            /*DAT.Core.TutorialManager.RunHighlightIntensity start.*/
            RunHighlightIntensity: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#RunHighlightIntensity", this ); }

                this.highlightMaterial.SetFloat$1("_Intensity", this.highlightIntensityMin);
                this.isValueUpHighlightIntensity = true;
                this.StartCoroutine$1(this.HighlightIntensityCoroutine());

            },
            /*DAT.Core.TutorialManager.RunHighlightIntensity end.*/

            /*DAT.Core.TutorialManager.HighlightIntensityCoroutine start.*/
            HighlightIntensityCoroutine: function () {
if ( TRACE ) { TRACE( "DAT.Core.TutorialManager#HighlightIntensityCoroutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.isValueUpHighlightIntensity) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 3;
                                            continue;
                                        }
                                }
                                case 1: {
                                    this.highlightMaterial.SetFloat$1("_HighlightIntensity", this.highlightMaterial.GetFloat$1("_HighlightIntensity") + 0.01);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.01);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    if (this.highlightMaterial.GetFloat$1("_HighlightIntensity") >= this.highlightIntensityMax) {
                                            this.isValueUpHighlightIntensity = false;
                                            this.isValueDownHighlightIntensity = true;
                                        }
                                    $step = 7;
                                    continue;
                                }
                                case 3: {
                                    if (this.isValueDownHighlightIntensity) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    this.highlightMaterial.SetFloat$1("_HighlightIntensity", this.highlightMaterial.GetFloat$1("_HighlightIntensity") - 0.01);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.01);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    if (this.highlightMaterial.GetFloat$1("_HighlightIntensity") <= this.highlightIntensityMin) {
                                            this.isValueDownHighlightIntensity = false;
                                            this.isValueUpHighlightIntensity = true;
                                        }
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    this.StartCoroutine$1(this.HighlightIntensityCoroutine());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DAT.Core.TutorialManager.HighlightIntensityCoroutine end.*/


        }
    });
    /*DAT.Core.TutorialManager end.*/

    /*DAT.Managers.AudioManager start.*/
    Bridge.define("DAT.Managers.AudioManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#inherits", this ); }
 return [DAT.Core.DesignPatterns.Singleton$1(DAT.Managers.AudioManager)]; },
        statics: {
            fields: {
                PP_MASTER: null,
                PP_MUSIC: null,
                PP_SFX: null,
                PP_MUTE_MASTER: null,
                PP_MUTE_MUSIC: null,
                PP_MUTE_SFX: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#init", this ); }

                    this.PP_MASTER = "DAT_Audio_Master";
                    this.PP_MUSIC = "DAT_Audio_Music";
                    this.PP_SFX = "DAT_Audio_Sfx";
                    this.PP_MUTE_MASTER = "DAT_Audio_Mute_Master";
                    this.PP_MUTE_MUSIC = "DAT_Audio_Mute_Music";
                    this.PP_MUTE_SFX = "DAT_Audio_Mute_Sfx";
                }
            }
        },
        fields: {
            sfxChannels: null,
            musicA: null,
            musicB: null,
            masterVolume: 0,
            musicVolume: 0,
            sfxVolume: 0,
            muteMaster: false,
            muteMusic: false,
            muteSfx: false,
            isSaveToPlayerPref: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#init", this ); }

                this.sfxChannels = System.Array.init(8, null, UnityEngine.AudioSource);
                this.masterVolume = 1.0;
                this.musicVolume = 1.0;
                this.sfxVolume = 1.0;
                this.isSaveToPlayerPref = true;
            }
        },
        methods: {
            /*DAT.Managers.AudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#Awake", this ); }

                DAT.Core.DesignPatterns.Singleton$1(DAT.Managers.AudioManager).prototype.Awake.call(this);

                if (this.isSaveToPlayerPref) {
                    this.LoadVolumes();
                }

                this.ApplyAllVolumes();
            },
            /*DAT.Managers.AudioManager.Awake end.*/

            /*DAT.Managers.AudioManager.LoadVolumes start.*/
            LoadVolumes: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#LoadVolumes", this ); }

                if (UnityEngine.PlayerPrefs.HasKey(DAT.Managers.AudioManager.PP_MASTER)) {
                    this.masterVolume = Math.max(0, Math.min(1, UnityEngine.PlayerPrefs.GetFloat(DAT.Managers.AudioManager.PP_MASTER)));
                }
                if (UnityEngine.PlayerPrefs.HasKey(DAT.Managers.AudioManager.PP_MUSIC)) {
                    this.musicVolume = Math.max(0, Math.min(1, UnityEngine.PlayerPrefs.GetFloat(DAT.Managers.AudioManager.PP_MUSIC)));
                }
                if (UnityEngine.PlayerPrefs.HasKey(DAT.Managers.AudioManager.PP_SFX)) {
                    this.sfxVolume = Math.max(0, Math.min(1, UnityEngine.PlayerPrefs.GetFloat(DAT.Managers.AudioManager.PP_SFX)));
                }
                this.muteMaster = UnityEngine.PlayerPrefs.GetInt(DAT.Managers.AudioManager.PP_MUTE_MASTER, 0) === 1;
                this.muteMusic = UnityEngine.PlayerPrefs.GetInt(DAT.Managers.AudioManager.PP_MUTE_MUSIC, 0) === 1;
                this.muteSfx = UnityEngine.PlayerPrefs.GetInt(DAT.Managers.AudioManager.PP_MUTE_SFX, 0) === 1;
                UnityEngine.PlayerPrefs.Save();
            },
            /*DAT.Managers.AudioManager.LoadVolumes end.*/

            /*DAT.Managers.AudioManager.ApplyAllVolumes start.*/
            ApplyAllVolumes: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#ApplyAllVolumes", this ); }

                var master = this.muteMaster ? 0.0 : this.masterVolume;
                if (UnityEngine.Component.op_Inequality(this.musicA, null)) {
                    this.musicA.volume = (this.muteMusic ? 0.0 : this.musicVolume) * master;
                }
                if (UnityEngine.Component.op_Inequality(this.musicB, null)) {
                    this.musicB.volume = (this.muteMusic ? 0.0 : this.musicVolume) * master;
                }

                if (this.sfxChannels != null) {
                    for (var i = 0; i < this.sfxChannels.length; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Inequality(this.sfxChannels[i], null)) {
                            this.sfxChannels[i].volume = (this.muteSfx ? 0.0 : this.sfxVolume) * master;
                        }
                    }
                }
            },
            /*DAT.Managers.AudioManager.ApplyAllVolumes end.*/

            /*DAT.Managers.AudioManager.PlayMusic start.*/
            PlayMusic: function (clip, loop) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#PlayMusic", this ); }

                if (loop === void 0) { loop = true; }
                if (clip == null) {
                    return;
                }

                var current = null;
                var next = null;

                if (UnityEngine.Component.op_Inequality(this.musicA, null) && this.musicA.isPlaying) {
                    current = this.musicA;
                    next = this.musicB;
                } else if (UnityEngine.Component.op_Inequality(this.musicB, null) && this.musicB.isPlaying) {
                    current = this.musicB;
                    next = this.musicA;
                } else {
                    next = UnityEngine.Component.op_Inequality(this.musicA, null) ? this.musicA : this.musicB;
                }

                if (UnityEngine.Component.op_Inequality(current, null)) {
                    current.Stop();
                }
                if (UnityEngine.Component.op_Equality(next, null)) {
                    return;
                }

                next.clip = clip;
                next.loop = loop;
                next.Play();
                this.ApplyAllVolumes();
            },
            /*DAT.Managers.AudioManager.PlayMusic end.*/

            /*DAT.Managers.AudioManager.StopMusic start.*/
            StopMusic: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#StopMusic", this ); }

                if (UnityEngine.Component.op_Inequality(this.musicA, null)) {
                    this.musicA.Stop();
                }
                if (UnityEngine.Component.op_Inequality(this.musicB, null)) {
                    this.musicB.Stop();
                }
            },
            /*DAT.Managers.AudioManager.StopMusic end.*/

            /*DAT.Managers.AudioManager.PauseMusic start.*/
            PauseMusic: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#PauseMusic", this ); }

                if (UnityEngine.Component.op_Inequality(this.musicA, null) && this.musicA.isPlaying) {
                    this.musicA.Pause();
                }
                if (UnityEngine.Component.op_Inequality(this.musicB, null) && this.musicB.isPlaying) {
                    this.musicB.Pause();
                }
            },
            /*DAT.Managers.AudioManager.PauseMusic end.*/

            /*DAT.Managers.AudioManager.ResumeMusic start.*/
            ResumeMusic: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#ResumeMusic", this ); }

                if (UnityEngine.Component.op_Inequality(this.musicA, null) && this.musicA.clip != null && !this.musicA.isPlaying) {
                    this.musicA.UnPause();
                }
                if (UnityEngine.Component.op_Inequality(this.musicB, null) && this.musicB.clip != null && !this.musicB.isPlaying) {
                    this.musicB.UnPause();
                }
            },
            /*DAT.Managers.AudioManager.ResumeMusic end.*/

            /*DAT.Managers.AudioManager.PlaySFX start.*/
            PlaySFX: function (clip, volume, pitch, loop) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#PlaySFX", this ); }

                if (volume === void 0) { volume = 1.0; }
                if (pitch === void 0) { pitch = 1.0; }
                if (loop === void 0) { loop = false; }
                if (clip == null || this.sfxChannels == null || this.sfxChannels.length === 0) {
                    return null;
                }

                var idx = this.FindFreeSfxChannel();
                if (idx < 0 || UnityEngine.Component.op_Equality(this.sfxChannels[idx], null)) {
                    return null;
                }

                var src = this.sfxChannels[idx];
                src.clip = clip;
                src.loop = loop;
                src.pitch = Math.max(-3.0, Math.min(pitch, 3.0));

                var master = this.muteMaster ? 0.0 : this.masterVolume;
                var group = (this.muteSfx ? 0.0 : this.sfxVolume) * master;
                src.volume = group * Math.max(0, Math.min(1, volume));

                src.Play();
                return src;
            },
            /*DAT.Managers.AudioManager.PlaySFX end.*/

            /*DAT.Managers.AudioManager.StopSFX start.*/
            StopSFX: function (src) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#StopSFX", this ); }

                if (UnityEngine.Component.op_Equality(src, null)) {
                    return;
                }
                src.Stop();
            },
            /*DAT.Managers.AudioManager.StopSFX end.*/

            /*DAT.Managers.AudioManager.StopAllSFX start.*/
            StopAllSFX: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#StopAllSFX", this ); }

                if (this.sfxChannels == null) {
                    return;
                }
                for (var i = 0; i < this.sfxChannels.length; i = (i + 1) | 0) {
                    if (UnityEngine.Component.op_Inequality(this.sfxChannels[i], null)) {
                        this.sfxChannels[i].Stop();
                    }
                }
            },
            /*DAT.Managers.AudioManager.StopAllSFX end.*/

            /*DAT.Managers.AudioManager.FindFreeSfxChannel start.*/
            FindFreeSfxChannel: function () {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#FindFreeSfxChannel", this ); }

                if (this.sfxChannels == null) {
                    return -1;
                }

                for (var i = 0; i < this.sfxChannels.length; i = (i + 1) | 0) {
                    if (UnityEngine.Component.op_Equality(this.sfxChannels[i], null)) {
                        continue;
                    }
                    if (!this.sfxChannels[i].isPlaying) {
                        return i;
                    }
                }
                return 0;
            },
            /*DAT.Managers.AudioManager.FindFreeSfxChannel end.*/

            /*DAT.Managers.AudioManager.SetMasterVolume start.*/
            SetMasterVolume: function (value) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#SetMasterVolume", this ); }

                this.masterVolume = Math.max(0, Math.min(1, value));
                if (this.isSaveToPlayerPref) {
                    UnityEngine.PlayerPrefs.SetFloat(DAT.Managers.AudioManager.PP_MASTER, this.masterVolume);
                }
                this.ApplyAllVolumes();
            },
            /*DAT.Managers.AudioManager.SetMasterVolume end.*/

            /*DAT.Managers.AudioManager.SetMusicVolume start.*/
            SetMusicVolume: function (value) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#SetMusicVolume", this ); }

                this.musicVolume = Math.max(0, Math.min(1, value));
                if (this.isSaveToPlayerPref) {
                    UnityEngine.PlayerPrefs.SetFloat(DAT.Managers.AudioManager.PP_MUSIC, this.musicVolume);
                }
                this.ApplyAllVolumes();
            },
            /*DAT.Managers.AudioManager.SetMusicVolume end.*/

            /*DAT.Managers.AudioManager.SetSfxVolume start.*/
            SetSfxVolume: function (value) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#SetSfxVolume", this ); }

                this.sfxVolume = Math.max(0, Math.min(1, value));
                if (this.isSaveToPlayerPref) {
                    UnityEngine.PlayerPrefs.SetFloat(DAT.Managers.AudioManager.PP_SFX, this.sfxVolume);
                }
                this.ApplyAllVolumes();
            },
            /*DAT.Managers.AudioManager.SetSfxVolume end.*/

            /*DAT.Managers.AudioManager.SetMuteMaster start.*/
            SetMuteMaster: function (mute) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#SetMuteMaster", this ); }

                this.muteMaster = mute;
                if (this.isSaveToPlayerPref) {
                    UnityEngine.PlayerPrefs.SetInt(DAT.Managers.AudioManager.PP_MUTE_MASTER, mute ? 1 : 0);
                }
                this.ApplyAllVolumes();
            },
            /*DAT.Managers.AudioManager.SetMuteMaster end.*/

            /*DAT.Managers.AudioManager.SetMuteMusic start.*/
            SetMuteMusic: function (mute) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#SetMuteMusic", this ); }

                this.muteMusic = mute;
                if (this.isSaveToPlayerPref) {
                    UnityEngine.PlayerPrefs.SetInt(DAT.Managers.AudioManager.PP_MUTE_MUSIC, mute ? 1 : 0);
                }
                this.ApplyAllVolumes();
            },
            /*DAT.Managers.AudioManager.SetMuteMusic end.*/

            /*DAT.Managers.AudioManager.SetMuteSfx start.*/
            SetMuteSfx: function (mute) {
if ( TRACE ) { TRACE( "DAT.Managers.AudioManager#SetMuteSfx", this ); }

                this.muteSfx = mute;
                if (this.isSaveToPlayerPref) {
                    UnityEngine.PlayerPrefs.SetInt(DAT.Managers.AudioManager.PP_MUTE_SFX, mute ? 1 : 0);
                }
                this.ApplyAllVolumes();
            },
            /*DAT.Managers.AudioManager.SetMuteSfx end.*/


        }
    });
    /*DAT.Managers.AudioManager end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: function () {
if ( TRACE ) { TRACE( "GameManager#inherits", this ); }
 return [DAT.Core.DesignPatterns.Singleton$1(GameManager)]; },
        fields: {
            guestPickupInterval: 0,
            movingCarLimit: 0,
            colorPalette: null,
            guestPath: null,
            spawnManager: null,
            parkingSlotManager: null,
            carLineManager: null,
            carDone: 0,
            movingCarCount: 0,
            isWin: false,
            isLose: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.guestPickupInterval = 0.2;
                this.movingCarLimit = 3;
            }
        },
        methods: {
            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                this.Init();
            },
            /*GameManager.Start end.*/

            /*GameManager.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "GameManager#Init", this ); }

                this.carDone = 0;
                this.movingCarCount = 0;
                this.isWin = false;
                this.isLose = false;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.spawnManager, null)) {
                    this.spawnManager.SpawnCars();
                    this.spawnManager.SpawnGuests();
                }
            },
            /*GameManager.Init end.*/

            /*GameManager.CanStartMoving start.*/
            CanStartMoving: function () {
if ( TRACE ) { TRACE( "GameManager#CanStartMoving", this ); }

                if (this.isWin || this.isLose) {
                    return false;
                }

                return this.movingCarCount < this.movingCarLimit;
            },
            /*GameManager.CanStartMoving end.*/

            /*GameManager.RegisterMovingCar start.*/
            RegisterMovingCar: function () {
if ( TRACE ) { TRACE( "GameManager#RegisterMovingCar", this ); }

                this.movingCarCount = (this.movingCarCount + 1) | 0;
            },
            /*GameManager.RegisterMovingCar end.*/

            /*GameManager.UnregisterMovingCar start.*/
            UnregisterMovingCar: function () {
if ( TRACE ) { TRACE( "GameManager#UnregisterMovingCar", this ); }

                if (this.movingCarCount > 0) {
                    this.movingCarCount = (this.movingCarCount - 1) | 0;
                }
            },
            /*GameManager.UnregisterMovingCar end.*/

            /*GameManager.CheckWinOnFullCapacity start.*/
            CheckWinOnFullCapacity: function () {
if ( TRACE ) { TRACE( "GameManager#CheckWinOnFullCapacity", this ); }

                if (this.isWin || this.isLose) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.spawnManager, null) && this.spawnManager.AreAllGuestSpawnPosEmpty()) {
                    this.isWin = true;
                }
            },
            /*GameManager.CheckWinOnFullCapacity end.*/

            /*GameManager.SetLose start.*/
            SetLose: function () {
if ( TRACE ) { TRACE( "GameManager#SetLose", this ); }

                if (this.isWin || this.isLose) {
                    return;
                }

                this.isLose = true;
            },
            /*GameManager.SetLose end.*/

            /*GameManager.AddCarDone start.*/
            AddCarDone: function () {
if ( TRACE ) { TRACE( "GameManager#AddCarDone", this ); }

                this.carDone = (this.carDone + 1) | 0;
            },
            /*GameManager.AddCarDone end.*/


        }
    });
    /*GameManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","DG.Tweening","TMPro","System.Collections.Generic","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","UnityEngine.UI","System.Globalization","DG.Tweening.Plugins.Options","DAT.Core","UnityEngine.Events","System.Collections","DAT.Core.Optimization.SCU"];

    /*CarController start.*/
    $m("CarController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AdvanceFromParkingStep","t":8,"sn":"AdvanceFromParkingStep","rt":$n[0].Void},{"a":1,"n":"AdvanceGoInLineStep","t":8,"sn":"AdvanceGoInLineStep","rt":$n[0].Void},{"a":1,"n":"ApplyCarBodyLocalRotation","t":8,"sn":"ApplyCarBodyLocalRotation","rt":$n[0].Void},{"a":1,"n":"ApplyTweenSpeed","t":8,"sn":"ApplyTweenSpeed","rt":$n[0].Void},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"BuildRouteFromCurrent","t":8,"pi":[{"n":"waypoints","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"BuildRouteFromCurrent","rt":System.Array.type(UnityEngine.Vector3),"p":[System.Array.type(UnityEngine.Vector3)]},{"a":1,"n":"CheckAheadCollision","t":8,"sn":"CheckAheadCollision","rt":$n[0].Void},{"a":1,"n":"CheckFullExitSpeedBoost","t":8,"sn":"CheckFullExitSpeedBoost","rt":$n[0].Void},{"a":1,"n":"EndPickup","t":8,"sn":"EndPickup","rt":$n[0].Void},{"a":1,"n":"GetCarBodyTransform","t":8,"sn":"GetCarBodyTransform","rt":$n[1].Transform},{"a":1,"n":"GetGuestEntryPoint","t":8,"sn":"GetGuestEntryPoint","rt":$n[1].Vector3},{"a":1,"n":"GetParkApproachPoint","t":8,"sn":"GetParkApproachPoint","rt":$n[1].Vector3},{"a":1,"n":"GetParkForward","t":8,"sn":"GetParkForward","rt":$n[1].Vector3},{"a":1,"n":"GetPointOnSegmentByX","t":8,"pi":[{"n":"from","pt":$n[1].Vector3,"ps":0},{"n":"to","pt":$n[1].Vector3,"ps":1},{"n":"x","pt":$n[0].Single,"ps":2}],"sn":"GetPointOnSegmentByX","rt":$n[1].Vector3,"p":[$n[1].Vector3,$n[1].Vector3,$n[0].Single]},{"a":1,"n":"GetSeatTransform","t":8,"pi":[{"n":"seatIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetSeatTransform","rt":$n[1].Transform,"p":[$n[0].Int32]},{"a":2,"n":"GoForGuest","t":8,"sn":"GoForGuest","rt":$n[0].Void},{"a":2,"n":"GoFromParking","t":8,"pi":[{"n":"path","pt":System.Array.type(UnityEngine.Transform),"ps":0}],"sn":"GoFromParking","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform)]},{"a":2,"n":"GoInLine","t":8,"pi":[{"n":"slot","pt":ParkingSlotController,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Transform),"ps":1}],"sn":"GoInLine","rt":$n[0].Void,"p":[ParkingSlotController,System.Array.type(UnityEngine.Transform)]},{"a":1,"n":"HandleParkingFail","t":8,"sn":"HandleParkingFail","rt":$n[0].Void},{"a":1,"n":"HasReachedFullExitBoostPoint","t":8,"sn":"HasReachedFullExitBoostPoint","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"IsFullCapacity","t":8,"sn":"IsFullCapacity","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"KillCarBodyTiltTween","t":8,"sn":"KillCarBodyTiltTween","rt":$n[0].Void},{"a":1,"n":"KillMoveTween","t":8,"sn":"KillMoveTween","rt":$n[0].Void},{"a":1,"n":"KillSpeedTween","t":8,"sn":"KillSpeedTween","rt":$n[0].Void},{"a":1,"n":"MoveAlongPoints","t":8,"pi":[{"n":"route","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"MoveAlongPoints","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3),Function]},{"a":1,"n":"MoveFullCapacityExit","t":8,"pi":[{"n":"route","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"MoveFullCapacityExit","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3),Function]},{"a":2,"n":"MoveInQueue","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0}],"sn":"MoveInQueue","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"MoveIntoParkingSlot","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"MoveIntoParkingSlot","rt":$n[0].Void,"p":[Function]},{"a":1,"n":"MoveToPoint","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"MoveToPoint","rt":$n[0].Void,"p":[$n[1].Vector3,Function]},{"a":1,"n":"MoveToPointReverse","t":8,"pi":[{"n":"target","pt":$n[1].Vector3,"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"MoveToPointReverse","rt":$n[0].Void,"p":[$n[1].Vector3,Function]},{"a":1,"n":"OnBodyPitchUpdate","t":8,"pi":[{"n":"pitchX","pt":$n[0].Single,"ps":0}],"sn":"OnBodyPitchUpdate","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"OnCarExitFull","t":8,"sn":"OnCarExitFull","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnFromParkingGuestPathComplete","t":8,"sn":"OnFromParkingGuestPathComplete","rt":$n[0].Void},{"a":1,"n":"OnGoInLineGuestPathComplete","t":8,"sn":"OnGoInLineGuestPathComplete","rt":$n[0].Void},{"a":1,"n":"OnGuestJumpComplete","t":8,"sn":"OnGuestJumpComplete","rt":$n[0].Void},{"a":1,"n":"OnGuestPathFinishedAlone","t":8,"sn":"OnGuestPathFinishedAlone","rt":$n[0].Void},{"a":1,"n":"OnMoveReverseComplete","t":8,"sn":"OnMoveReverseComplete","rt":$n[0].Void},{"a":1,"n":"OnParkedComplete","t":8,"sn":"OnParkedComplete","rt":$n[0].Void},{"a":1,"n":"OnPickupDelayComplete","t":8,"sn":"OnPickupDelayComplete","rt":$n[0].Void},{"a":1,"n":"OnQueueMoveComplete","t":8,"sn":"OnQueueMoveComplete","rt":$n[0].Void},{"a":1,"n":"OnReachParkingTurnPoint","t":8,"sn":"OnReachParkingTurnPoint","rt":$n[0].Void},{"a":1,"n":"OnSpeedTweenComplete","t":8,"sn":"OnSpeedTweenComplete","rt":$n[0].Void},{"a":1,"n":"OnSpeedTweenUpdate","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"OnSpeedTweenUpdate","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"PickupNextGuest","t":8,"sn":"PickupNextGuest","rt":$n[0].Void},{"a":1,"n":"PlayCarBodyBoostTilt","t":8,"sn":"PlayCarBodyBoostTilt","rt":$n[0].Void},{"a":1,"n":"PlayCarBodyParkBrakeTilt","t":8,"sn":"PlayCarBodyParkBrakeTilt","rt":$n[0].Void},{"a":1,"n":"PlayGuestPath","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"PlayGuestPath","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"ReleaseParkingSlot","t":8,"sn":"ReleaseParkingSlot","rt":$n[0].Void},{"a":1,"n":"RunFromParkingStep","t":8,"sn":"RunFromParkingStep","rt":$n[0].Void},{"a":1,"n":"RunFullCapacityExit","t":8,"sn":"RunFullCapacityExit","rt":$n[0].Void},{"a":1,"n":"RunGoInLineStep","t":8,"sn":"RunGoInLineStep","rt":$n[0].Void},{"a":1,"n":"ScaleSeatsToZero","t":8,"sn":"ScaleSeatsToZero","rt":$n[0].Void},{"a":1,"n":"SetActiveMoveSpeed","t":8,"pi":[{"n":"speed","pt":$n[0].Single,"ps":0}],"sn":"SetActiveMoveSpeed","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"SetHoodActive","t":8,"pi":[{"n":"active","pt":$n[0].Boolean,"ps":0}],"sn":"SetHoodActive","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"SmoothLookAtCurrentTarget","t":8,"sn":"SmoothLookAtCurrentTarget","rt":$n[0].Void},{"a":1,"n":"TryAssignParkingSlotAfterGuestPath","t":8,"sn":"TryAssignParkingSlotAfterGuestPath","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryIntersectLinesXZ","t":8,"pi":[{"n":"laneA","pt":$n[1].Vector3,"ps":0},{"n":"laneB","pt":$n[1].Vector3,"ps":1},{"n":"axisOrigin","pt":$n[1].Vector3,"ps":2},{"n":"axisDir","pt":$n[1].Vector3,"ps":3},{"n":"hit","out":true,"pt":$n[1].Vector3,"ps":4}],"sn":"TryIntersectLinesXZ","rt":$n[0].Boolean,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryPickupFromSpawnPos","t":8,"pi":[{"n":"spawnPos","pt":GuestSpawnPos,"ps":0}],"sn":"TryPickupFromSpawnPos","rt":$n[0].Void,"p":[GuestSpawnPos]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateCarBodyTurnSway","t":8,"sn":"UpdateCarBodyTurnSway","rt":$n[0].Void},{"a":1,"n":"_blockedTargetSpeed","t":4,"rt":$n[0].Single,"sn":"_blockedTargetSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"_isBlockedByAhead","t":4,"rt":$n[0].Boolean,"sn":"_isBlockedByAhead","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"_isReversing","t":4,"rt":$n[0].Boolean,"sn":"_isReversing","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_pendingReverseCallback","t":4,"rt":Function,"sn":"_pendingReverseCallback"},{"a":1,"n":"activeMoveSpeed","t":4,"rt":$n[0].Single,"sn":"activeMoveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"assignedSlot","t":4,"rt":ParkingSlotController,"sn":"assignedSlot"},{"a":1,"n":"bodyPitchX","t":4,"rt":$n[0].Single,"sn":"bodyPitchX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"bodySwayZ","t":4,"rt":$n[0].Single,"sn":"bodySwayZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boostBodyTiltDuration","t":4,"rt":$n[0].Single,"sn":"boostBodyTiltDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boostBodyTiltX","t":4,"rt":$n[0].Single,"sn":"boostBodyTiltX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"carBody","t":4,"rt":$n[1].GameObject,"sn":"carBody"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"carBodyMeshRenderer","t":4,"rt":$n[1].MeshRenderer,"sn":"carBodyMeshRenderer"},{"a":1,"n":"carBodyRestCached","t":4,"rt":$n[0].Boolean,"sn":"carBodyRestCached","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"carBodyRestLocalEuler","t":4,"rt":$n[1].Vector3,"sn":"carBodyRestLocalEuler"},{"a":1,"n":"carBodyTiltTween","t":4,"rt":$n[2].Tween,"sn":"carBodyTiltTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"carCapacity","t":4,"rt":$n[0].Int32,"sn":"carCapacity","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"carColor","t":4,"rt":Enums.GameColor,"sn":"carColor","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"carHoodMeshRenderer","t":4,"rt":$n[1].MeshRenderer,"sn":"carHoodMeshRenderer"},{"at":[new UnityEngine.HeaderAttribute("Car Properties"),new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"carType","t":4,"rt":Enums.CarType,"sn":"carType","box":function ($v) { return Bridge.box($v, Enums.CarType, System.Enum.toStringFn(Enums.CarType));}},{"at":[new UnityEngine.HeaderAttribute("Collision Avoidance"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collisionCheckDistance","t":4,"rt":$n[0].Single,"sn":"collisionCheckDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentMoveTarget","t":4,"rt":$n[1].Vector3,"sn":"currentMoveTarget"},{"a":2,"n":"currentPassengerCount","t":4,"rt":$n[0].Int32,"sn":"currentPassengerCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"exitOffsetX","t":4,"rt":$n[0].Single,"sn":"exitOffsetX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"fromParkingStep","t":4,"rt":$n[0].Int32,"sn":"fromParkingStep","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"fullExitSpeedBoostApplied","t":4,"rt":$n[0].Boolean,"sn":"fullExitSpeedBoostApplied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fullExitSpeedMultiplier","t":4,"rt":$n[0].Single,"sn":"fullExitSpeedMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"goInLineStep","t":4,"rt":$n[0].Int32,"sn":"goInLineStep","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestPickupSpeed","t":4,"rt":$n[0].Single,"sn":"guestPickupSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hoodCloseDropOffset","t":4,"rt":$n[0].Single,"sn":"hoodCloseDropOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Hood"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hoodCloseDuration","t":4,"rt":$n[0].Single,"sn":"hoodCloseDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hoodClosedStartScale","t":4,"rt":$n[1].Vector3,"sn":"hoodClosedStartScale"},{"a":1,"n":"hoodRestCached","t":4,"rt":$n[0].Boolean,"sn":"hoodRestCached","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"hoodRestLocalPos","t":4,"rt":$n[1].Vector3,"sn":"hoodRestLocalPos"},{"a":1,"n":"hoodRestLocalScale","t":4,"rt":$n[1].Vector3,"sn":"hoodRestLocalScale"},{"a":1,"n":"hoodTween","t":4,"rt":$n[2].Tween,"sn":"hoodTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"isFirstLine","t":4,"rt":$n[0].Boolean,"sn":"isFirstLine","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isHoodClosed","t":4,"rt":$n[0].Boolean,"sn":"isHoodClosed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isMoving","t":4,"rt":$n[0].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isOnGuestPathRoute","t":4,"rt":$n[0].Boolean,"sn":"isOnGuestPathRoute","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isOutOfCarLine","t":4,"rt":$n[0].Boolean,"sn":"isOutOfCarLine","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"isParked","t":4,"rt":$n[0].Boolean,"sn":"isParked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPickingUp","t":4,"rt":$n[0].Boolean,"sn":"isPickingUp","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Movement"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[0].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"moveTween","t":4,"rt":$n[2].Tween,"sn":"moveTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"parkApproachDistance","t":4,"rt":$n[0].Single,"sn":"parkApproachDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"parkBrakeTiltInDuration","t":4,"rt":$n[0].Single,"sn":"parkBrakeTiltInDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"parkBrakeTiltOutDuration","t":4,"rt":$n[0].Single,"sn":"parkBrakeTiltOutDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"parkBrakeTiltX","t":4,"rt":$n[0].Single,"sn":"parkBrakeTiltX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"parkRotationY","t":4,"rt":$n[0].Single,"sn":"parkRotationY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"parkingPath","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"parkingPath"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pathLookAhead","t":4,"rt":$n[0].Single,"sn":"pathLookAhead","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pendingPickupSpawnPos","t":4,"rt":GuestSpawnPos,"sn":"pendingPickupSpawnPos"},{"a":1,"n":"previousTurnYaw","t":4,"rt":$n[0].Single,"sn":"previousTurnYaw","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotateSpeed","t":4,"rt":$n[0].Single,"sn":"rotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Seats"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"seatTransforms","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"seatTransforms"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speedTransitionDuration","t":4,"rt":$n[0].Single,"sn":"speedTransitionDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"speedTween","t":4,"rt":$n[2].Tween,"sn":"speedTween"},{"a":1,"n":"speedTweenStart","t":4,"rt":$n[0].Single,"sn":"speedTweenStart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"speedTweenTarget","t":4,"rt":$n[0].Single,"sn":"speedTweenTarget","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"turnSwayFactor","t":4,"rt":$n[0].Single,"sn":"turnSwayFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"turnSwayMaxZ","t":4,"rt":$n[0].Single,"sn":"turnSwayMaxZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"turnSwayReturnSpeed","t":4,"rt":$n[0].Single,"sn":"turnSwayReturnSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"turnYawInitialized","t":4,"rt":$n[0].Boolean,"sn":"turnYawInitialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CarController end.*/

    /*GuestController start.*/
    $m("GuestController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":2,"n":"JumpToSeat","t":8,"pi":[{"n":"seat","pt":$n[1].Transform,"ps":0},{"n":"onComplete","pt":Function,"ps":1}],"sn":"JumpToSeat","rt":$n[0].Void,"p":[$n[1].Transform,Function]},{"a":2,"n":"MoveToQueueSlot","t":8,"pi":[{"n":"worldPos","pt":$n[1].Vector3,"ps":0},{"n":"worldRotation","pt":$n[1].Quaternion,"ps":1}],"sn":"MoveToQueueSlot","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Quaternion]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnJumpToSeatComplete","t":8,"sn":"OnJumpToSeatComplete","rt":$n[0].Void},{"a":2,"n":"SetSit","t":8,"pi":[{"n":"sit","pt":$n[0].Boolean,"ps":0}],"sn":"SetSit","rt":$n[0].Void,"p":[$n[0].Boolean]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"at":[new UnityEngine.HeaderAttribute("Guest Properties"),new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"guestColor","t":4,"rt":Enums.GameColor,"sn":"guestColor","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"isOnCar","t":4,"rt":$n[0].Boolean,"sn":"isOnCar","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"jumpCompleteCallback","t":4,"rt":Function,"sn":"jumpCompleteCallback"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpDuration","t":4,"rt":$n[0].Single,"sn":"jumpDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Movement"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpPower","t":4,"rt":$n[0].Single,"sn":"jumpPower","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"jumpTween","t":4,"rt":$n[2].Tween,"sn":"jumpTween"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"meshRendererBody","t":4,"rt":$n[1].SkinnedMeshRenderer,"sn":"meshRendererBody"},{"a":1,"n":"pendingSeat","t":4,"rt":$n[1].Transform,"sn":"pendingSeat"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"queueMoveDuration","t":4,"rt":$n[0].Single,"sn":"queueMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GuestController end.*/

    /*GuestSpawnPos start.*/
    $m("GuestSpawnPos", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AdvanceQueue","t":8,"sn":"AdvanceQueue","rt":$n[0].Void},{"a":2,"n":"GetFrontGuest","t":8,"sn":"GetFrontGuest","rt":GuestController},{"a":1,"n":"HasCarTriggered","t":8,"pi":[{"n":"car","pt":CarController,"ps":0}],"sn":"HasCarTriggered","rt":$n[0].Boolean,"p":[CarController],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasGuests","t":8,"sn":"HasGuests","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasMatchingGuest","t":8,"pi":[{"n":"color","pt":Enums.GameColor,"ps":0}],"sn":"HasMatchingGuest","rt":$n[0].Boolean,"p":[Enums.GameColor],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"MarkCarTriggered","t":8,"pi":[{"n":"car","pt":CarController,"ps":0}],"sn":"MarkCarTriggered","rt":$n[0].Void,"p":[CarController]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"RegisterGuest","t":8,"pi":[{"n":"guest","pt":GuestController,"ps":0}],"sn":"RegisterGuest","rt":$n[0].Void,"p":[GuestController]},{"a":2,"n":"RemoveGuest","t":8,"pi":[{"n":"guest","pt":GuestController,"ps":0}],"sn":"RemoveGuest","rt":$n[0].Void,"p":[GuestController]},{"a":2,"n":"ResetCarTrigger","t":8,"pi":[{"n":"car","pt":CarController,"ps":0}],"sn":"ResetCarTrigger","rt":$n[0].Void,"p":[CarController]},{"a":2,"n":"UpdateGuestLeftDisplay","t":8,"sn":"UpdateGuestLeftDisplay","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"guestLeftDisplayTxt","t":4,"rt":$n[3].TextMeshProUGUI,"sn":"guestLeftDisplayTxt"},{"a":1,"n":"guestQueue","t":4,"rt":$n[4].List$1(GuestController),"sn":"guestQueue"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"queueType","t":4,"rt":Enums.GuestQueueType,"sn":"queueType","box":function ($v) { return Bridge.box($v, Enums.GuestQueueType, System.Enum.toStringFn(Enums.GuestQueueType));}},{"a":1,"n":"triggeredCars","t":4,"rt":$n[4].List$1(CarController),"sn":"triggeredCars"}]}; }, $n);
    /*GuestSpawnPos end.*/

    /*ParkingSlotController start.*/
    $m("ParkingSlotController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"isParked","t":4,"rt":$n[0].Boolean,"sn":"isParked","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ParkingSlotController end.*/

    /*PlayerInteraction start.*/
    $m("PlayerInteraction", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rayDistance","t":4,"rt":$n[0].Single,"sn":"rayDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"raycastCamera","t":4,"rt":$n[1].Camera,"sn":"raycastCamera"}]}; }, $n);
    /*PlayerInteraction end.*/

    /*CarSpawnData start.*/
    $m("CarSpawnData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"carColor","t":4,"rt":Enums.GameColor,"sn":"carColor","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"carType","t":4,"rt":Enums.CarType,"sn":"carType","box":function ($v) { return Bridge.box($v, Enums.CarType, System.Enum.toStringFn(Enums.CarType));}}]}; }, $n);
    /*CarSpawnData end.*/

    /*ColorPalette start.*/
    $m("ColorPalette", function () { return {"nested":[ColorPalette.ColorEntry],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "ColorPalette", menuName: "Game/Color Palette"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetCarMaterial","t":8,"pi":[{"n":"color","pt":Enums.GameColor,"ps":0}],"sn":"GetCarMaterial","rt":$n[1].Material,"p":[Enums.GameColor]},{"a":2,"n":"GetCarOutlineMaterial","t":8,"pi":[{"n":"color","pt":Enums.GameColor,"ps":0}],"sn":"GetCarOutlineMaterial","rt":$n[1].Material,"p":[Enums.GameColor]},{"a":2,"n":"GetHumanMaterial","t":8,"pi":[{"n":"color","pt":Enums.GameColor,"ps":0}],"sn":"GetHumanMaterial","rt":$n[1].Material,"p":[Enums.GameColor]},{"a":2,"n":"entries","t":4,"rt":System.Array.type(ColorPalette.ColorEntry),"sn":"entries"}]}; }, $n);
    /*ColorPalette end.*/

    /*ColorPalette+ColorEntry start.*/
    $m("ColorPalette.ColorEntry", function () { return {"td":ColorPalette,"att":1057034,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"carMaterial","t":4,"rt":$n[1].Material,"sn":"carMaterial"},{"a":2,"n":"carOutlineMaterial","t":4,"rt":$n[1].Material,"sn":"carOutlineMaterial"},{"a":2,"n":"color","t":4,"rt":Enums.GameColor,"sn":"color","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"humanMaterial","t":4,"rt":$n[1].Material,"sn":"humanMaterial"}]}; }, $n);
    /*ColorPalette+ColorEntry end.*/

    /*GuestColorSpawnData start.*/
    $m("GuestColorSpawnData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":Enums.GameColor,"sn":"color","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"count","t":4,"rt":$n[0].Int32,"sn":"count","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*GuestColorSpawnData end.*/

    /*CarLineManager start.*/
    $m("CarLineManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AdvanceColumn","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0}],"sn":"AdvanceColumn","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"ClearLines","t":8,"sn":"ClearLines","rt":$n[0].Void},{"a":1,"n":"FindColumnIndex","t":8,"pi":[{"n":"car","pt":CarController,"ps":0}],"sn":"FindColumnIndex","rt":$n[0].Int32,"p":[CarController],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"NotifyCarDeparted","t":8,"pi":[{"n":"car","pt":CarController,"ps":0}],"sn":"NotifyCarDeparted","rt":$n[0].Void,"p":[CarController]},{"a":2,"n":"RegisterCar","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0},{"n":"car","pt":CarController,"ps":1}],"sn":"RegisterCar","rt":$n[0].Void,"p":[$n[0].Int32,CarController]},{"a":2,"n":"ResetLines","t":8,"pi":[{"n":"columnCount","pt":$n[0].Int32,"ps":0}],"sn":"ResetLines","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"columns","t":4,"rt":System.Array.type(System.Collections.Generic.List$1(CarController)),"sn":"columns"}]}; }, $n);
    /*CarLineManager end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddCarDone","t":8,"sn":"AddCarDone","rt":$n[0].Void},{"a":2,"n":"CanStartMoving","t":8,"sn":"CanStartMoving","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CheckWinOnFullCapacity","t":8,"sn":"CheckWinOnFullCapacity","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":2,"n":"RegisterMovingCar","t":8,"sn":"RegisterMovingCar","rt":$n[0].Void},{"a":2,"n":"SetLose","t":8,"sn":"SetLose","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UnregisterMovingCar","t":8,"sn":"UnregisterMovingCar","rt":$n[0].Void},{"a":2,"n":"carDone","t":4,"rt":$n[0].Int32,"sn":"carDone","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"carLineManager","t":4,"rt":CarLineManager,"sn":"carLineManager"},{"at":[new UnityEngine.HeaderAttribute("References"),new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"colorPalette","t":4,"rt":ColorPalette,"sn":"colorPalette"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"guestPath","t":4,"rt":GuestPath,"sn":"guestPath"},{"at":[new UnityEngine.HeaderAttribute("Gameplay"),new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"guestPickupInterval","t":4,"rt":$n[0].Single,"sn":"guestPickupInterval","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"isLose","t":4,"rt":$n[0].Boolean,"sn":"isLose","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isWin","t":4,"rt":$n[0].Boolean,"sn":"isWin","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"movingCarCount","t":4,"rt":$n[0].Int32,"sn":"movingCarCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"movingCarLimit","t":4,"rt":$n[0].Int32,"sn":"movingCarLimit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"parkingSlotManager","t":4,"rt":ParkingSlotManager,"sn":"parkingSlotManager"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"spawnManager","t":4,"rt":SpawnManager,"sn":"spawnManager"}]}; }, $n);
    /*GameManager end.*/

    /*ParkingSlotManager start.*/
    $m("ParkingSlotManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetFreeSlot","t":8,"sn":"GetFreeSlot","rt":ParkingSlotController},{"a":2,"n":"HasFreeSlot","t":8,"sn":"HasFreeSlot","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TrySendCar","t":8,"pi":[{"n":"car","pt":CarController,"ps":0}],"sn":"TrySendCar","rt":$n[0].Boolean,"p":[CarController],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Parking Path (3 diem)"),new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"parkingPath","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"parkingPath"},{"at":[new UnityEngine.HeaderAttribute("Slots"),new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"parkingSlots","t":4,"rt":System.Array.type(ParkingSlotController),"sn":"parkingSlots"}]}; }, $n);
    /*ParkingSlotManager end.*/

    /*SpawnManager start.*/
    $m("SpawnManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AreAllGuestSpawnPosEmpty","t":8,"sn":"AreAllGuestSpawnPosEmpty","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"ClearCars","t":8,"sn":"ClearCars","rt":$n[0].Void},{"a":2,"n":"ClearGuests","t":8,"sn":"ClearGuests","rt":$n[0].Void},{"a":1,"n":"GetCapacity","t":8,"pi":[{"n":"carType","pt":Enums.CarType,"ps":0}],"sn":"GetCapacity","rt":$n[0].Int32,"p":[Enums.CarType],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetCarPrefab","t":8,"pi":[{"n":"carType","pt":Enums.CarType,"ps":0}],"sn":"GetCarPrefab","rt":$n[1].GameObject,"p":[Enums.CarType]},{"a":1,"n":"GetColumn","t":8,"pi":[{"n":"columnIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetColumn","rt":System.Array.type(CarSpawnData),"p":[$n[0].Int32]},{"a":2,"n":"GetFirstLineZ","t":8,"sn":"GetFirstLineZ","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetGuestColors","t":8,"pi":[{"n":"posIndex","pt":$n[0].Int32,"ps":0}],"sn":"GetGuestColors","rt":System.Array.type(GuestColorSpawnData),"p":[$n[0].Int32]},{"a":1,"n":"GetGuestLocalOffset","t":8,"pi":[{"n":"queueType","pt":Enums.GuestQueueType,"ps":0},{"n":"index","pt":$n[0].Int32,"ps":1}],"sn":"GetGuestLocalOffset","rt":$n[1].Vector3,"p":[Enums.GuestQueueType,$n[0].Int32]},{"a":2,"n":"GetGuestQueueLocalOffset","t":8,"pi":[{"n":"queueType","pt":Enums.GuestQueueType,"ps":0},{"n":"index","pt":$n[0].Int32,"ps":1}],"sn":"GetGuestQueueLocalOffset","rt":$n[1].Vector3,"p":[Enums.GuestQueueType,$n[0].Int32]},{"a":2,"n":"GetGuestQueueRotation","t":8,"pi":[{"n":"spawnPos","pt":GuestSpawnPos,"ps":0},{"n":"queueType","pt":Enums.GuestQueueType,"ps":1}],"sn":"GetGuestQueueRotation","rt":$n[1].Quaternion,"p":[GuestSpawnPos,Enums.GuestQueueType]},{"a":1,"n":"GetGuestRotation","t":8,"pi":[{"n":"spawnPos","pt":GuestSpawnPos,"ps":0},{"n":"queueType","pt":Enums.GuestQueueType,"ps":1}],"sn":"GetGuestRotation","rt":$n[1].Quaternion,"p":[GuestSpawnPos,Enums.GuestQueueType]},{"a":1,"n":"GetSafeDistance","t":8,"pi":[{"n":"carType","pt":Enums.CarType,"ps":0}],"sn":"GetSafeDistance","rt":$n[0].Single,"p":[Enums.CarType],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetSafeDistanceForType","t":8,"pi":[{"n":"carType","pt":Enums.CarType,"ps":0}],"sn":"GetSafeDistanceForType","rt":$n[0].Single,"p":[Enums.CarType],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ResetGuestTriggersForCar","t":8,"pi":[{"n":"car","pt":CarController,"ps":0}],"sn":"ResetGuestTriggersForCar","rt":$n[0].Void,"p":[CarController]},{"a":2,"n":"SpawnCars","t":8,"sn":"SpawnCars","rt":$n[0].Void},{"a":2,"n":"SpawnGuests","t":8,"sn":"SpawnGuests","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"car10Prefab","t":4,"rt":$n[1].GameObject,"sn":"car10Prefab"},{"at":[new UnityEngine.HeaderAttribute("CAR SPAWNER / Prefabs"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"car4Prefab","t":4,"rt":$n[1].GameObject,"sn":"car4Prefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"car6Prefab","t":4,"rt":$n[1].GameObject,"sn":"car6Prefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"carParent","t":4,"rt":$n[1].Transform,"sn":"carParent"},{"at":[new UnityEngine.HeaderAttribute("CAR SPAWNER / Columns (index 0 = hang dau)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"column0","t":4,"rt":System.Array.type(CarSpawnData),"sn":"column0"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"column1","t":4,"rt":System.Array.type(CarSpawnData),"sn":"column1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"column2","t":4,"rt":System.Array.type(CarSpawnData),"sn":"column2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"column3","t":4,"rt":System.Array.type(CarSpawnData),"sn":"column3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"column4","t":4,"rt":System.Array.type(CarSpawnData),"sn":"column4"},{"at":[new UnityEngine.HeaderAttribute("CAR SPAWNER / Layout"),new UnityEngine.RangeAttribute(3.0, 5.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"columnCount","t":4,"rt":$n[0].Int32,"sn":"columnCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"columnSpacing","t":4,"rt":$n[0].Single,"sn":"columnSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"firstLineZ","t":4,"rt":$n[0].Single,"sn":"firstLineZ","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("GUEST SPAWNER / Color Orders (theo spawn pos)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestColors0","t":4,"rt":System.Array.type(GuestColorSpawnData),"sn":"guestColors0"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestColors1","t":4,"rt":System.Array.type(GuestColorSpawnData),"sn":"guestColors1"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestColors2","t":4,"rt":System.Array.type(GuestColorSpawnData),"sn":"guestColors2"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestColors3","t":4,"rt":System.Array.type(GuestColorSpawnData),"sn":"guestColors3"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestCurveRadius","t":4,"rt":$n[0].Single,"sn":"guestCurveRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestParent","t":4,"rt":$n[1].Transform,"sn":"guestParent"},{"at":[new UnityEngine.HeaderAttribute("GUEST SPAWNER / Prefab"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestPrefab","t":4,"rt":$n[1].GameObject,"sn":"guestPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestSpacing","t":4,"rt":$n[0].Single,"sn":"guestSpacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("GUEST SPAWNER / Layout"),new UnityEngine.RangeAttribute(1.0, 4.0),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestSpawnPosCount","t":4,"rt":$n[0].Int32,"sn":"guestSpawnPosCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.HeaderAttribute("GUEST SPAWNER / Spawn Positions"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"guestSpawnPositions","t":4,"rt":System.Array.type(GuestSpawnPos),"sn":"guestSpawnPositions"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"safeDistanceCar10","t":4,"rt":$n[0].Single,"sn":"safeDistanceCar10","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("CAR SPAWNER / Safe Distances"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"safeDistanceCar4","t":4,"rt":$n[0].Single,"sn":"safeDistanceCar4","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"safeDistanceCar6","t":4,"rt":$n[0].Single,"sn":"safeDistanceCar6","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnY","t":4,"rt":$n[0].Single,"sn":"spawnY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SpawnManager end.*/

    /*GuestPath start.*/
    $m("GuestPath", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetFirstPosition","t":8,"sn":"GetFirstPosition","rt":$n[1].Vector3},{"a":2,"n":"GetPositions","t":8,"sn":"GetPositions","rt":System.Array.type(UnityEngine.Vector3)},{"a":2,"n":"GetWaypointCount","t":8,"sn":"GetWaypointCount","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"HasWaypoints","t":8,"sn":"HasWaypoints","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"waypoints","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"waypoints"}]}; }, $n);
    /*GuestPath end.*/

    /*Enums start.*/
    $m("Enums", function () { return {"nested":[Enums.GameColor,Enums.CarType,Enums.GuestQueueType],"att":1048961,"a":2,"s":true}; }, $n);
    /*Enums end.*/

    /*Enums+GameColor start.*/
    $m("Enums.GameColor", function () { return {"td":Enums,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blue","is":true,"t":4,"rt":Enums.GameColor,"sn":"Blue","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"Green","is":true,"t":4,"rt":Enums.GameColor,"sn":"Green","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"Orange","is":true,"t":4,"rt":Enums.GameColor,"sn":"Orange","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"Pink","is":true,"t":4,"rt":Enums.GameColor,"sn":"Pink","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"Purple","is":true,"t":4,"rt":Enums.GameColor,"sn":"Purple","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"Red","is":true,"t":4,"rt":Enums.GameColor,"sn":"Red","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":Enums.GameColor,"sn":"Yellow","box":function ($v) { return Bridge.box($v, Enums.GameColor, System.Enum.toStringFn(Enums.GameColor));}}]}; }, $n);
    /*Enums+GameColor end.*/

    /*Enums+CarType start.*/
    $m("Enums.CarType", function () { return {"td":Enums,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Car10","is":true,"t":4,"rt":Enums.CarType,"sn":"Car10","box":function ($v) { return Bridge.box($v, Enums.CarType, System.Enum.toStringFn(Enums.CarType));}},{"a":2,"n":"Car4","is":true,"t":4,"rt":Enums.CarType,"sn":"Car4","box":function ($v) { return Bridge.box($v, Enums.CarType, System.Enum.toStringFn(Enums.CarType));}},{"a":2,"n":"Car6","is":true,"t":4,"rt":Enums.CarType,"sn":"Car6","box":function ($v) { return Bridge.box($v, Enums.CarType, System.Enum.toStringFn(Enums.CarType));}}]}; }, $n);
    /*Enums+CarType end.*/

    /*Enums+GuestQueueType start.*/
    $m("Enums.GuestQueueType", function () { return {"td":Enums,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CurveLeft","is":true,"t":4,"rt":Enums.GuestQueueType,"sn":"CurveLeft","box":function ($v) { return Bridge.box($v, Enums.GuestQueueType, System.Enum.toStringFn(Enums.GuestQueueType));}},{"a":2,"n":"CurveRight","is":true,"t":4,"rt":Enums.GuestQueueType,"sn":"CurveRight","box":function ($v) { return Bridge.box($v, Enums.GuestQueueType, System.Enum.toStringFn(Enums.GuestQueueType));}},{"a":2,"n":"StraightLeft","is":true,"t":4,"rt":Enums.GuestQueueType,"sn":"StraightLeft","box":function ($v) { return Bridge.box($v, Enums.GuestQueueType, System.Enum.toStringFn(Enums.GuestQueueType));}},{"a":2,"n":"StraightRight","is":true,"t":4,"rt":Enums.GuestQueueType,"sn":"StraightRight","box":function ($v) { return Bridge.box($v, Enums.GuestQueueType, System.Enum.toStringFn(Enums.GuestQueueType));}},{"a":2,"n":"StraightUp","is":true,"t":4,"rt":Enums.GuestQueueType,"sn":"StraightUp","box":function ($v) { return Bridge.box($v, Enums.GuestQueueType, System.Enum.toStringFn(Enums.GuestQueueType));}}]}; }, $n);
    /*Enums+GuestQueueType end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[5].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[5].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[5].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[5].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[5].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[5].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[2].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[2].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[7].Path,$n[0].Single,$n[2].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[2].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[2].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[2].PathType,$n[2].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[2].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[6].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[2].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[2].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[7].Path,$n[0].Single,$n[2].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[2].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[2].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[2].PathType,$n[2].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[2].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[6].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[2].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[2].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[2].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[7].Path,$n[0].Single,$n[2].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[2].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[2].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[2].PathType,$n[2].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[7].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[2].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[7].Path,$n[0].Single,$n[2].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[2].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[2].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[2].PathType,$n[2].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[2].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[2].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[2].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[2].Tweener,"p":[$n[8].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[2].Tweener,"p":[$n[8].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[2].Tweener,"p":[$n[8].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[9].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[6].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[8].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[9].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[6].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[8].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[8].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[2].Sequence,"p":[$n[8].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[2].Tweener,"p":[$n[8].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[2].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[2].Tweener,"p":[$n[8].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[2].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[8].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[2].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[2].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[2].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[2].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[2].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[2].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[2].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[6].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[8].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[2].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[6].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[8].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[8].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[2].Tweener,"p":[$n[8].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[2].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[2].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[2].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[6].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[2].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[2].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[2].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[2].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[2].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[2].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[2].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[2].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[2].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[2].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[2].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[2].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[2].DOTweenCYInstruction.WaitForCompletion,$n[2].DOTweenCYInstruction.WaitForRewind,$n[2].DOTweenCYInstruction.WaitForKill,$n[2].DOTweenCYInstruction.WaitForElapsedLoops,$n[2].DOTweenCYInstruction.WaitForPosition,$n[2].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[2].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Tween],"pi":[{"n":"tween","pt":$n[2].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[2].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[2].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Tween],"pi":[{"n":"tween","pt":$n[2].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[2].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[2].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Tween],"pi":[{"n":"tween","pt":$n[2].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[2].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[2].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[2].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[2].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[2].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[2].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[2].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[2].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Tween],"pi":[{"n":"tween","pt":$n[2].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[2].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[2].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[2].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[7].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[2].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[6].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[7].Path,$n[0].Single,$n[2].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[10].PathOptions,"ps":0},{"n":"t","pt":$n[2].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[10].PathOptions,$n[2].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*DAT.Managers.AudioManager start.*/
    $m("DAT.Managers.AudioManager", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("DAT SDK/Managers/AudioManager"),new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyAllVolumes","t":8,"sn":"ApplyAllVolumes","rt":$n[0].Void},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FindFreeSfxChannel","t":8,"sn":"FindFreeSfxChannel","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"LoadVolumes","t":8,"sn":"LoadVolumes","rt":$n[0].Void},{"a":2,"n":"PauseMusic","t":8,"sn":"PauseMusic","rt":$n[0].Void},{"a":2,"n":"PlayMusic","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0},{"n":"loop","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"PlayMusic","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[0].Boolean]},{"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0},{"n":"volume","dv":1.0,"o":true,"pt":$n[0].Single,"ps":1},{"n":"pitch","dv":1.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"loop","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"PlaySFX","rt":$n[1].AudioSource,"p":[$n[1].AudioClip,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"ResumeMusic","t":8,"sn":"ResumeMusic","rt":$n[0].Void},{"a":2,"n":"SetMasterVolume","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"SetMasterVolume","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetMusicVolume","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"SetMusicVolume","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetMuteMaster","t":8,"pi":[{"n":"mute","pt":$n[0].Boolean,"ps":0}],"sn":"SetMuteMaster","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetMuteMusic","t":8,"pi":[{"n":"mute","pt":$n[0].Boolean,"ps":0}],"sn":"SetMuteMusic","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetMuteSfx","t":8,"pi":[{"n":"mute","pt":$n[0].Boolean,"ps":0}],"sn":"SetMuteSfx","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetSfxVolume","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"SetSfxVolume","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"StopAllSFX","t":8,"sn":"StopAllSFX","rt":$n[0].Void},{"a":2,"n":"StopMusic","t":8,"sn":"StopMusic","rt":$n[0].Void},{"a":2,"n":"StopSFX","t":8,"pi":[{"n":"src","pt":$n[1].AudioSource,"ps":0}],"sn":"StopSFX","rt":$n[0].Void,"p":[$n[1].AudioSource]},{"a":1,"n":"PP_MASTER","is":true,"t":4,"rt":$n[0].String,"sn":"PP_MASTER"},{"a":1,"n":"PP_MUSIC","is":true,"t":4,"rt":$n[0].String,"sn":"PP_MUSIC"},{"a":1,"n":"PP_MUTE_MASTER","is":true,"t":4,"rt":$n[0].String,"sn":"PP_MUTE_MASTER"},{"a":1,"n":"PP_MUTE_MUSIC","is":true,"t":4,"rt":$n[0].String,"sn":"PP_MUTE_MUSIC"},{"a":1,"n":"PP_MUTE_SFX","is":true,"t":4,"rt":$n[0].String,"sn":"PP_MUTE_SFX"},{"a":1,"n":"PP_SFX","is":true,"t":4,"rt":$n[0].String,"sn":"PP_SFX"},{"at":[new UnityEngine.TooltipAttribute("L\u01b0u volume settings v\u00e0o PlayerPrefs.")],"a":2,"n":"isSaveToPlayerPref","t":4,"rt":$n[0].Boolean,"sn":"isSaveToPlayerPref","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Volume Settings"),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"masterVolume","t":4,"rt":$n[0].Single,"sn":"masterVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Music Sources"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicA","t":4,"rt":$n[1].AudioSource,"sn":"musicA"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicB","t":4,"rt":$n[1].AudioSource,"sn":"musicB"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"musicVolume","t":4,"rt":$n[0].Single,"sn":"musicVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"muteMaster","t":4,"rt":$n[0].Boolean,"sn":"muteMaster","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"muteMusic","t":4,"rt":$n[0].Boolean,"sn":"muteMusic","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"muteSfx","t":4,"rt":$n[0].Boolean,"sn":"muteSfx","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("SFX Channels"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfxChannels","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"sfxChannels"},{"at":[new UnityEngine.RangeAttribute(0.0, 1.0)],"a":2,"n":"sfxVolume","t":4,"rt":$n[0].Single,"sn":"sfxVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DAT.Managers.AudioManager end.*/

    /*DAT.Core.Orientation start.*/
    $m("DAT.Core.Orientation", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Landscape","is":true,"t":4,"rt":$n[11].Orientation,"sn":"Landscape","box":function ($v) { return Bridge.box($v, DAT.Core.Orientation, System.Enum.toStringFn(DAT.Core.Orientation));}},{"a":2,"n":"Portrait","is":true,"t":4,"rt":$n[11].Orientation,"sn":"Portrait","box":function ($v) { return Bridge.box($v, DAT.Core.Orientation, System.Enum.toStringFn(DAT.Core.Orientation));}}]}; }, $n);
    /*DAT.Core.Orientation end.*/

    /*DAT.Core.AspectCameraValues start.*/
    $m("DAT.Core.AspectCameraValues", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single],"pi":[{"n":"fieldOfView","pt":$n[0].Single,"ps":0},{"n":"orthographicSize","pt":$n[0].Single,"ps":1}],"sn":"$ctor1"},{"at":[new UnityEngine.TooltipAttribute("Field of View cho camera Perspective")],"a":2,"n":"fieldOfView","t":4,"rt":$n[0].Single,"sn":"fieldOfView","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Orthographic Size cho camera Orthographic")],"a":2,"n":"orthographicSize","t":4,"rt":$n[0].Single,"sn":"orthographicSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DAT.Core.AspectCameraValues end.*/

    /*DAT.Core.ResponsiveManager start.*/
    $m("DAT.Core.ResponsiveManager", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("DAT SDK/Core/ResponsiveManager"),new UnityEngine.DisallowMultipleComponent()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"DetermineOrientation","t":8,"pi":[{"n":"aspect","pt":$n[0].Single,"ps":0}],"sn":"DetermineOrientation","rt":$n[11].Orientation,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, DAT.Core.Orientation, System.Enum.toStringFn(DAT.Core.Orientation));}},{"a":1,"n":"EvaluateOrientation","t":8,"pi":[{"n":"forceInvoke","dv":false,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"EvaluateOrientation","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"ForceEvaluate","t":8,"sn":"ForceEvaluate","rt":$n[0].Void},{"a":1,"n":"GetCompactAspect","is":true,"t":8,"sn":"GetCompactAspect","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"LerpCameraValues","is":true,"t":8,"pi":[{"n":"aspectA","pt":$n[0].Single,"ps":0},{"n":"valuesA","pt":$n[11].AspectCameraValues,"ps":1},{"n":"aspectB","pt":$n[0].Single,"ps":2},{"n":"valuesB","pt":$n[11].AspectCameraValues,"ps":3},{"n":"aspect","pt":$n[0].Single,"ps":4},{"n":"fieldOfView","out":true,"pt":$n[0].Single,"ps":5},{"n":"orthographicSize","out":true,"pt":$n[0].Single,"ps":6}],"sn":"LerpCameraValues","rt":$n[0].Void,"p":[$n[0].Single,$n[11].AspectCameraValues,$n[0].Single,$n[11].AspectCameraValues,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":1,"n":"SampleCameraValues","t":8,"pi":[{"n":"compactAspect","pt":$n[0].Single,"ps":0},{"n":"fieldOfView","out":true,"pt":$n[0].Single,"ps":1},{"n":"orthographicSize","out":true,"pt":$n[0].Single,"ps":2}],"sn":"SampleCameraValues","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single,$n[0].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"ToggleObjectsByOrientation","t":8,"pi":[{"n":"orientation","pt":$n[11].Orientation,"ps":0}],"sn":"ToggleObjectsByOrientation","rt":$n[0].Void,"p":[$n[11].Orientation]},{"a":1,"n":"UpdateCamerasByAspect","t":8,"sn":"UpdateCamerasByAspect","rt":$n[0].Void},{"a":1,"n":"UpdateCanvasScaler","t":8,"pi":[{"n":"orientation","pt":$n[11].Orientation,"ps":0}],"sn":"UpdateCanvasScaler","rt":$n[0].Void,"p":[$n[11].Orientation]},{"a":2,"n":"CurrentOrientation","t":16,"rt":$n[11].Orientation,"g":{"a":2,"n":"get_CurrentOrientation","t":8,"rt":$n[11].Orientation,"fg":"CurrentOrientation","box":function ($v) { return Bridge.box($v, DAT.Core.Orientation, System.Enum.toStringFn(DAT.Core.Orientation));}},"fn":"CurrentOrientation"},{"a":1,"n":"Aspect9x16","is":true,"t":4,"rt":$n[0].Single,"sn":"Aspect9x16","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Aspect9x18","is":true,"t":4,"rt":$n[0].Single,"sn":"Aspect9x18","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Aspect9x20","is":true,"t":4,"rt":$n[0].Single,"sn":"Aspect9x20","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Aspect9x21","is":true,"t":4,"rt":$n[0].Single,"sn":"Aspect9x21","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"OnLandscape","t":4,"rt":$n[12].UnityEvent,"sn":"OnLandscape"},{"a":2,"n":"OnOrientationChanged","t":4,"rt":$n[12].UnityEvent$1(DAT.Core.Orientation),"sn":"OnOrientationChanged"},{"at":[new UnityEngine.HeaderAttribute("Events")],"a":2,"n":"OnPortrait","t":4,"rt":$n[12].UnityEvent,"sn":"OnPortrait"},{"at":[new UnityEngine.HeaderAttribute("Camera FOV / Size by Aspect"),new UnityEngine.TooltipAttribute("B\u1eadt ch\u1ec9nh FOV (perspective) v\u00e0 Size (orthographic) theo t\u1ec9 l\u1ec7 m\u00e0n h\u00ecnh"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"adjustCamerasByAspect","t":4,"rt":$n[0].Boolean,"sn":"adjustCamerasByAspect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Ng\u01b0\u1ee1ng thay \u0111\u1ed5i t\u1ec9 l\u1ec7 \u0111\u1ec3 coi nh\u01b0 \u0111\u00e3 \u0111\u1ed5i h\u01b0\u1edbng"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"aspectChangeThreshold","t":4,"rt":$n[0].Single,"sn":"aspectChangeThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("T\u1ef1 \u0111\u1ed9ng t\u00ecm CanvasScaler g\u1ea7n nh\u1ea5t n\u1ebfu \u0111\u1ec3 tr\u1ed1ng"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"autoFindCanvasScaler","t":4,"rt":$n[0].Boolean,"sn":"autoFindCanvasScaler","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Current Orientation (ReadOnly)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentOrientation","t":4,"rt":$n[11].Orientation,"sn":"currentOrientation","box":function ($v) { return Bridge.box($v, DAT.Core.Orientation, System.Enum.toStringFn(DAT.Core.Orientation));}},{"at":[new UnityEngine.TooltipAttribute("Nh\u1eefng GameObject n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c b\u1eadt khi \u1edf ch\u1ebf \u0111\u1ed9 Landscape v\u00e0 t\u1eaft khi \u1edf Portrait"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landscapeOnlyObjects","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"landscapeOnlyObjects"},{"at":[new UnityEngine.TooltipAttribute("Reference Resolution khi Landscape (width x height)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landscapeResolution","t":4,"rt":$n[1].Vector2,"sn":"landscapeResolution"},{"a":1,"n":"lastAspectRatio","t":4,"rt":$n[0].Single,"sn":"lastAspectRatio","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Auto Toggle Objects"),new UnityEngine.TooltipAttribute("Nh\u1eefng GameObject n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c b\u1eadt khi \u1edf ch\u1ebf \u0111\u1ed9 Portrait v\u00e0 t\u1eaft khi \u1edf Landscape"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"portraitOnlyObjects","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"portraitOnlyObjects"},{"at":[new UnityEngine.TooltipAttribute("Reference Resolution khi Portrait (width x height)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"portraitResolution","t":4,"rt":$n[1].Vector2,"sn":"portraitResolution"},{"at":[new UnityEngine.TooltipAttribute("Danh s\u00e1ch camera s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt theo c\u00e1c m\u1ed1c t\u1ec9 l\u1ec7"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetCameras","t":4,"rt":System.Array.type(UnityEngine.Camera),"sn":"targetCameras"},{"at":[new UnityEngine.HeaderAttribute("Canvas Scaler (Optional)"),new UnityEngine.TooltipAttribute("N\u1ebfu \u0111\u01b0\u1ee3c set, CanvasScaler s\u1ebd \u0111\u1ed5i resolution theo h\u01b0\u1edbng m\u00e0n h\u00ecnh"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetCanvasScaler","t":4,"rt":$n[8].CanvasScaler,"sn":"targetCanvasScaler"},{"at":[new UnityEngine.HeaderAttribute("Detection Settings"),new UnityEngine.TooltipAttribute("S\u1eed d\u1ee5ng Screen.orientation/DeviceOrientation n\u1ebfu c\u00f3, fallback v\u1ec1 t\u1ec9 l\u1ec7 m\u00e0n h\u00ecnh"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useDeviceOrientation","t":4,"rt":$n[0].Boolean,"sn":"useDeviceOrientation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Gi\u00e1 tr\u1ecb t\u1ea1i m\u1ed1c 9:16 (compact aspect = 0.5625)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"values9x16","t":4,"rt":$n[11].AspectCameraValues,"sn":"values9x16"},{"at":[new UnityEngine.TooltipAttribute("Gi\u00e1 tr\u1ecb t\u1ea1i m\u1ed1c 9:18 (compact aspect = 0.5)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"values9x18","t":4,"rt":$n[11].AspectCameraValues,"sn":"values9x18"},{"at":[new UnityEngine.TooltipAttribute("Gi\u00e1 tr\u1ecb t\u1ea1i m\u1ed1c 9:20 (compact aspect = 0.45)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"values9x20","t":4,"rt":$n[11].AspectCameraValues,"sn":"values9x20"},{"at":[new UnityEngine.TooltipAttribute("Gi\u00e1 tr\u1ecb t\u1ea1i m\u1ed1c 9:21 (compact aspect \u2248 0.4286)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"values9x21","t":4,"rt":$n[11].AspectCameraValues,"sn":"values9x21"}]}; }, $n);
    /*DAT.Core.ResponsiveManager end.*/

    /*DAT.Core.SEPManager start.*/
    $m("DAT.Core.SEPManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"awakeEvents","t":4,"rt":$n[12].UnityEvent,"sn":"awakeEvents"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startEvents","t":4,"rt":$n[12].UnityEvent,"sn":"startEvents"}]}; }, $n);
    /*DAT.Core.SEPManager end.*/

    /*DAT.Core.TutorialManager start.*/
    $m("DAT.Core.TutorialManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"HideTutorial","t":8,"sn":"HideTutorial","rt":$n[0].Void},{"a":2,"n":"HighlightIntensityCoroutine","t":8,"sn":"HighlightIntensityCoroutine","rt":$n[13].IEnumerator},{"a":2,"n":"HighlightNextObject","t":8,"sn":"HighlightNextObject","rt":$n[0].Void},{"a":2,"n":"HighlightObject","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"HighlightObject","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"HighlightPreviousObject","t":8,"sn":"HighlightPreviousObject","rt":$n[0].Void},{"a":2,"n":"RunHighlightIntensity","t":8,"sn":"RunHighlightIntensity","rt":$n[0].Void},{"a":2,"n":"ShowTutorial","t":8,"sn":"ShowTutorial","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UnhighlightObject","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"UnhighlightObject","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"currentHighlightIndex","t":4,"rt":$n[0].Int32,"sn":"currentHighlightIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"highlightIntensityMax","t":4,"rt":$n[0].Single,"sn":"highlightIntensityMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"highlightIntensityMin","t":4,"rt":$n[0].Single,"sn":"highlightIntensityMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightMaterial","t":4,"rt":$n[1].Material,"sn":"highlightMaterial"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"highlightObjects","t":4,"rt":$n[4].List$1(UnityEngine.MeshRenderer),"sn":"highlightObjects"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isHighlightObjects","t":4,"rt":$n[0].Boolean,"sn":"isHighlightObjects","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Tutorial variables")],"a":2,"n":"isTutorialActive","t":4,"rt":$n[0].Boolean,"sn":"isTutorialActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Tutorial Settings"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isTutorialEnabled","t":4,"rt":$n[0].Boolean,"sn":"isTutorialEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isValueDownHighlightIntensity","t":4,"rt":$n[0].Boolean,"sn":"isValueDownHighlightIntensity","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isValueUpHighlightIntensity","t":4,"rt":$n[0].Boolean,"sn":"isValueUpHighlightIntensity","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Tutorial Objects"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialObjects","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"tutorialObjects"}]}; }, $n);
    /*DAT.Core.TutorialManager end.*/

    /*DAT.Core.Optimization.SCU.SCUManager start.*/
    $m("DAT.Core.Optimization.SCU.SCUManager", function () { return {"nested":[$n[14].SCUManager.SCUUpdateType,$n[14].SCUManager.SCUSubscription,$n[14].SCUManager.Entry],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddNow","t":8,"pi":[{"n":"e","pt":$n[14].SCUManager.Entry,"ps":0}],"sn":"AddNow","rt":$n[0].Void,"p":[$n[14].SCUManager.Entry]},{"a":1,"n":"AllocId","t":8,"sn":"AllocId","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"FlushPending","t":8,"sn":"FlushPending","rt":$n[0].Void},{"a":1,"n":"GetList","t":8,"pi":[{"n":"type","pt":$n[14].SCUManager.SCUUpdateType,"ps":0}],"sn":"GetList","rt":$n[4].List$1(DAT.Core.Optimization.SCU.SCUManager.Entry),"p":[$n[14].SCUManager.SCUUpdateType]},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Register","t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"type","pt":$n[14].SCUManager.SCUUpdateType,"ps":1}],"sn":"Register","rt":$n[14].SCUManager.SCUSubscription,"p":[Function,$n[14].SCUManager.SCUUpdateType]},{"a":2,"n":"Register","t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"a1","pt":System.Object,"ps":1},{"n":"type","pt":$n[14].SCUManager.SCUUpdateType,"ps":2}],"tpc":1,"tprm":["T1"],"sn":"Register$1","rt":$n[14].SCUManager.SCUSubscription,"p":[Function,System.Object,$n[14].SCUManager.SCUUpdateType]},{"a":2,"n":"Register","t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"a1","pt":System.Object,"ps":1},{"n":"a2","pt":System.Object,"ps":2},{"n":"type","pt":$n[14].SCUManager.SCUUpdateType,"ps":3}],"tpc":2,"tprm":["T1","T2"],"sn":"Register$2","rt":$n[14].SCUManager.SCUSubscription,"p":[Function,System.Object,System.Object,$n[14].SCUManager.SCUUpdateType]},{"a":2,"n":"Register","t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"a1","pt":System.Object,"ps":1},{"n":"a2","pt":System.Object,"ps":2},{"n":"a3","pt":System.Object,"ps":3},{"n":"type","pt":$n[14].SCUManager.SCUUpdateType,"ps":4}],"tpc":3,"tprm":["T1","T2","T3"],"sn":"Register$3","rt":$n[14].SCUManager.SCUSubscription,"p":[Function,System.Object,System.Object,System.Object,$n[14].SCUManager.SCUUpdateType]},{"a":2,"n":"Register","t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"a1","pt":System.Object,"ps":1},{"n":"a2","pt":System.Object,"ps":2},{"n":"a3","pt":System.Object,"ps":3},{"n":"a4","pt":System.Object,"ps":4},{"n":"type","pt":$n[14].SCUManager.SCUUpdateType,"ps":5}],"tpc":4,"tprm":["T1","T2","T3","T4"],"sn":"Register$4","rt":$n[14].SCUManager.SCUSubscription,"p":[Function,System.Object,System.Object,System.Object,System.Object,$n[14].SCUManager.SCUUpdateType]},{"a":1,"n":"RegisterInternal","t":8,"pi":[{"n":"tick","pt":Function,"ps":0},{"n":"type","pt":$n[14].SCUManager.SCUUpdateType,"ps":1}],"sn":"RegisterInternal","rt":$n[14].SCUManager.SCUSubscription,"p":[Function,$n[14].SCUManager.SCUUpdateType]},{"a":1,"n":"RemoveNow","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"RemoveNow","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Tick","t":8,"pi":[{"n":"type","pt":$n[14].SCUManager.SCUUpdateType,"ps":0}],"sn":"Tick","rt":$n[0].Void,"p":[$n[14].SCUManager.SCUUpdateType]},{"a":2,"n":"Unregister","t":8,"pi":[{"n":"sub","pt":$n[14].SCUManager.SCUSubscription,"ps":0}],"sn":"Unregister","rt":$n[0].Void,"p":[$n[14].SCUManager.SCUSubscription]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_aliveCount","t":4,"rt":$n[0].Int32,"sn":"_aliveCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_fixed","t":4,"rt":$n[4].List$1(DAT.Core.Optimization.SCU.SCUManager.Entry),"sn":"_fixed","ro":true},{"a":1,"n":"_index","t":4,"rt":$n[4].Dictionary$2(System.Int32,System.Tuple$2(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType,System.Int32)),"sn":"_index","ro":true},{"a":1,"n":"_isTicking","t":4,"rt":$n[0].Boolean,"sn":"_isTicking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_late","t":4,"rt":$n[4].List$1(DAT.Core.Optimization.SCU.SCUManager.Entry),"sn":"_late","ro":true},{"a":1,"n":"_nextId","t":4,"rt":$n[0].Int32,"sn":"_nextId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_pendingAdd","t":4,"rt":$n[4].List$1(DAT.Core.Optimization.SCU.SCUManager.Entry),"sn":"_pendingAdd","ro":true},{"a":1,"n":"_pendingRemove","t":4,"rt":$n[4].List$1(System.Int32),"sn":"_pendingRemove","ro":true},{"a":1,"n":"_update","t":4,"rt":$n[4].List$1(DAT.Core.Optimization.SCU.SCUManager.Entry),"sn":"_update","ro":true}]}; }, $n);
    /*DAT.Core.Optimization.SCU.SCUManager end.*/

    /*DAT.Core.Optimization.SCU.SCUManager+SCUUpdateType start.*/
    $m("DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType", function () { return {"td":$n[14].SCUManager,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FixedUpdate","is":true,"t":4,"rt":$n[14].SCUManager.SCUUpdateType,"sn":"FixedUpdate","box":function ($v) { return Bridge.box($v, DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType, System.Enum.toStringFn(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType));}},{"a":2,"n":"LateUpdate","is":true,"t":4,"rt":$n[14].SCUManager.SCUUpdateType,"sn":"LateUpdate","box":function ($v) { return Bridge.box($v, DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType, System.Enum.toStringFn(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType));}},{"a":2,"n":"Update","is":true,"t":4,"rt":$n[14].SCUManager.SCUUpdateType,"sn":"Update","box":function ($v) { return Bridge.box($v, DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType, System.Enum.toStringFn(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType));}}]}; }, $n);
    /*DAT.Core.Optimization.SCU.SCUManager+SCUUpdateType end.*/

    /*DAT.Core.Optimization.SCU.SCUManager+SCUSubscription start.*/
    $m("DAT.Core.Optimization.SCU.SCUManager.SCUSubscription", function () { return {"td":$n[14].SCUManager,"att":1048842,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":4,"n":".ctor","t":1,"p":[$n[0].Int32],"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":2,"n":"IsValid","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsValid","t":8,"rt":$n[0].Boolean,"fg":"IsValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsValid"},{"a":4,"n":"Id","t":4,"rt":$n[0].Int32,"sn":"Id","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DAT.Core.Optimization.SCU.SCUManager+SCUSubscription end.*/

    /*DAT.Core.Optimization.SCU.SCUManager+Entry start.*/
    $m("DAT.Core.Optimization.SCU.SCUManager.Entry", function () { return {"td":$n[14].SCUManager,"att":1048843,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"id","t":4,"rt":$n[0].Int32,"sn":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tick","t":4,"rt":Function,"sn":"tick"},{"a":2,"n":"type","t":4,"rt":$n[14].SCUManager.SCUUpdateType,"sn":"type","box":function ($v) { return Bridge.box($v, DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType, System.Enum.toStringFn(DAT.Core.Optimization.SCU.SCUManager.SCUUpdateType));}}]}; }, $n);
    /*DAT.Core.Optimization.SCU.SCUManager+Entry end.*/

    /*DAT.Core.DesignPatterns.Singleton$1 start.*/
    $m("DAT.Core.DesignPatterns.Singleton$1", function (T) { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"v":true,"a":3,"n":"OnApplicationQuit","t":8,"sn":"OnApplicationQuit","rt":$n[0].Void},{"v":true,"a":3,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":2,"n":"HasInstance","is":true,"t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_HasInstance","t":8,"rt":$n[0].Boolean,"fg":"HasInstance","is":true,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasInstance"},{"a":2,"n":"Instance","is":true,"t":16,"rt":T,"g":{"a":2,"n":"get_Instance","t":8,"rt":T,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_instance","is":true,"t":4,"rt":T,"sn":"_instance"},{"a":1,"n":"_isShuttingDown","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_isShuttingDown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Singleton Settings"),new UnityEngine.TooltipAttribute("Gi\u1eef l\u1ea1i qua scene (DontDestroyOnLoad)"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"persistAcrossScenes","t":4,"rt":$n[0].Boolean,"sn":"persistAcrossScenes","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DAT.Core.DesignPatterns.Singleton$1 end.*/

    }});
