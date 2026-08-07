Shader "BusyBus/RoadBG"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
		_Color1 ("Color Base", Color) = (1,1,1,1)
		_Color2 ("Color Foot", Color) = (0.5,0.5,0.5,1)
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }
        LOD 100

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

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
            float4 _MainTex_ST;
			
			half3 _Color1, _Color2;
		CBUFFER_END

            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = TRANSFORM_TEX(v.uv, _MainTex);
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed2 mask = tex2D(_MainTex, i.uv).rg;
                fixed4 col = 1;
				col.rgb = lerp(_Color2,_Color1,mask.g);
				col.rgb = lerp(pow(col.rgb,2)*0.3,col.rgb,mask.r);
			
                return col;
            }
            ENDCG
        }
    }
}
