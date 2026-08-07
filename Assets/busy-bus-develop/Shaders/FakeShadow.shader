Shader "KIM/2D/FakeShadow"
{
    Properties
    {
        [NoScaleOffset]_MainTex ("Texture", 2D) = "gray" {}
		_ColorSha ("Shadow Color", Color) = (0,0,0,1)
    }
    SubShader
    {
        Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" "PreviewType"="Plane" }
		Blend Zero SrcColor
		Lighting Off ZWrite Off

        Pass
        {
            CGPROGRAM
			
               
            
            #pragma vertex vert
            #pragma fragment frag
			#pragma target 2.0
			#pragma fragmentoption ARB_precision_hint_fastest

            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };
			
			CBUFFER_START(UnityPerMaterial)
            sampler2D _MainTex;
			half4 _ColorSha;
			CBUFFER_END
			
            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed col = tex2D(_MainTex, i.uv);
				col = saturate(col+1-_ColorSha.a);
				fixed4 final = 1;
				final.rgb = lerp(_ColorSha.rgb,1,col);
				#if defined(FOG_LINEAR) || defined(FOG_EXP) || defined(FOG_EXP2)
					final.rgb = saturate(final.rgb+(1-saturate(i.fogCoord)));
				#endif
                return final;
            }
            ENDCG
        }
    }
}
