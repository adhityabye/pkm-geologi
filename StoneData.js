const StoneData = [
    {
        name: 'Granit Orbicular',
        fileSrc: 'assets/Granit_Orbicular.glb',

        camera: {
            minCameraOrbit: "auto auto 40m",
            maxCameraOrbit: "auto auto 50m",
            cameraOrbit: "2.908945516640052rad 1.2624538233265294rad 50m",
            cameraTarget: "1.3295917510986328m -3.038429021835327m -18.397000312805176m",
            fieldOfView: "30.000000000000004deg"
        },

        description: 'Deskripsi Granit orbicular merupakan salah satu jenis batuan yang sangat langka dan unik, terkenal karena pola melingkar atau orbikulasi yang menarik. Diperkirakan bahwa orbikula terbentuk dari proses pendinginan magma yang tidak biasa, di mana ada kristalisasi berulang yang menghasilkan lapisan konsentris. Karena pembentukannya yang jarang terjadi, batuan ini dianggap eksotis dan sangat diminati kolektor dan geolog.',
        features: [
            {
                name: "Orbikulasi",
                description: "Fitur paling menonjol dari granit ini adalah formasi orbikularnya, yaitu pola melingkar atau bulat yang terbentuk di dalam batuan. Orbikula ini terbentuk dari pusat, biasanya kristal, yang dikelilingi oleh lapisan-lapisan konsentris dari mineral berbeda. Pola ini menciptakan tampilan yang sangat artistik dan memikat secara visual.",
                
                camera: {
                    cameraOrbit: '5.119632650060771rad 1.5300725989859507rad 42.82255748136976m',
                    cameraTarget: '0.843877068607469m -5.736933099280019m -12.49927033181564m',
                    fieldOfView: '15.72deg'
                }

            },
            {
                name: "Mineral Penyusun",
                description: "Mineral penyusun batuan: plagioklas, biotit, hornblen, kuarsa",
                
                camera: {
                    cameraOrbit: '1.864353728158382rad 1.6464346283005251rad 42.944765397004794m', 
                    cameraTarget: '6.31761191647432m -7.393053321862652m -17.518222815812415m', 
                    fieldOfView: '15.716840391150564deg'
                }

            },
            {
                name: "Vein",
                description: "",
                
                camera: {
                    cameraOrbit: '5.143015508193508rad 1.7395199075382042rad 45.29651026466986m', 
                    cameraTarget: '-6.659883580942285m -3.9952391663819267m -17.9376179860257m', 
                    fieldOfView: '19.496227327501092deg'
                }

            }
        ]
    },
    {
        name: 'Konglomerat Polimik',
        fileSrc: 'assets/Konglomerat_Polimik.glb',
        
        camera: {
            minCameraOrbit: "auto auto 90m",
            maxCameraOrbit: "auto auto 200m",
            cameraOrbit: '-3.6070958362969248rad 1.2740894099927216rad 125m', 
            cameraTarget: '-4.804725646972656m -1.9463653564453125m -48.97930145263672m', 
            fieldOfView: '24deg'
        },

        description: "Konglomerat Polimik adalah batuan sedimen yang terdiri dari pecahan-pecahan batuan yang berbeda (fragmen) yang dibungkus dalam matriks yang lebih halus. Fragmen-fragmen ini memiliki berbagai jenis dan ukuran, biasanya terbentuk dari berbagai macam mineral atau jenis batuan yang berbeda, sehingga menciptakan penampilan heterogen. Karena terdiri dari beragam batuan, konglomerat polimik sering kali menunjukkan berbagai warna, pola, dan tekstur yang dapat diamati langsung.",
        features: [
            {
                name: "Fragmen membundar",
                description: "",
                
                camera: {
                    cameraOrbit: '0.7795909021703166rad 1.5068050981965773rad 119.35817040290797m', 
                    cameraTarget: '1.086133329594631m -7.6287160558031335m -28.60969764015212m', 
                    fieldOfView: '15.716840391150564deg'
                }

            },
            {
                name: "Komposisi",
                description: "kuarsit/kuarsa, basalt, batulempenung, batupasir, marmer, filit, dan sekis",
                
                camera: {
                    cameraOrbit: '2.908941382732517rad 1.1111887797949156rad 96.27423639575224m', 
                    cameraTarget: '-2.4591879908961936m -0.20471379145224233m -57.03778899126986m', 
                    fieldOfView: '12.670096000186678deg'
                }

            }
            // {
            //     name: "Fragmen Beragam",
            //     description: "Konglomerat Polimik terdiri dari fragmen-fragmen yang berasal dari berbagai batuan, seperti kuarsa, granit, basalt, dan lainnya. Fragmen-fragmen ini berukuran lebih dari 2 mm dan disemen oleh matriks yang lebih halus.",
            //     cameraOrbit: "80deg 70deg 22m"
            // },
            // {
            //     name: "Matriks Pengikat",
            //     description: "Fragmen-fragmen batu yang besar dikelilingi oleh matriks yang lebih halus, sering kali terdiri dari pasir, lempung, atau material sedimen lainnya yang berfungsi sebagai pengikat.",
            //     cameraOrbit: "100deg 80deg 18m"
            // },
            // {
            //     name: "Variasi Warna dan Tekstur",
            //     description: "Konglomerat Polimik memiliki tampilan yang sangat bervariasi dalam hal warna dan tekstur, bergantung pada jenis batuan yang menyusun fragmen dan matriksnya.",
            //     cameraOrbit: "55deg 90deg 25m"
            // },
            // {
            //     name: "Kekasaran Permukaan",
            //     description: "Permukaan konglomerat polimik biasanya kasar karena fragmen-fragmen besar yang menonjol dari matriks. Fragmen-fragmen ini dapat dirasakan dan dilihat dengan mudah.",
            //     cameraOrbit: "120deg 65deg 20m"
            // },
            // {
            //     name: "Fragmen Sudut dan Bulat",
            //     description: "Fragmen-fragmen dalam konglomerat polimik dapat memiliki bentuk sudut atau bulat, tergantung pada seberapa jauh dan lama transportasi fragmen-fragmen tersebut sebelum terdeposit.",
            //     cameraOrbit: "70deg 85deg 19m"
            // }
        ]
    }

]