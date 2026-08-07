Shader "KIM/3D/Outline"
{
    Properties
    {
        _ColorOutline("Main Color", Color) = (0,0,0,1)
        _OutlineThickness("Outline Thickness", Float) = 1
		_Bias ("Bias", Float) = 0.1
    }
    SubShader
    {
		ZWrite On
		Cull Front
        Pass
        {
			
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag
			#pragma target 2.0
			#pragma fragmentoption ARB_precision_hint_fastest

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            struct appdata
            {
				float3 normal : NORMAL;
                float4 vertex : POSITION;
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
            };
			
			sampler2D _MainTex, _MatCap;
            CBUFFER_START(UnityPerMaterial)
				half4 _ColorOutline;
				half _OutlineThickness, _Bias;
			CBUFFER_END

            v2f vert (appdata v)
            {
                v2f o;
				
				float3 pos = v.vertex.xyz;
				pos += v.normal*0.01*_OutlineThickness;
				
                o.vertex = TransformObjectToHClip(pos);
				o.vertex.z -= _Bias*0.002*0.5*_ProjectionParams.y;
                return o;
            }

            half4 frag (v2f i) : SV_Target
            {
				
				
                return _ColorOutline;
            }
            ENDHLSL
        }
    }
}
