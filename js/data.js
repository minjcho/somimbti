const data = {
	"commonQuestions": [
		{
		"id": 1,
		"question": "등굣길에 독서를 다짐한 당신!<br>처음으로 읽을 책은?",
		"options": [
			"222년 만에 회귀했다!<br>판타지 모험을 다루는 소설",
			"어떻게 지정좌표계로 고정하셨죠?<br>흥미로운 이야기를 담은 과학책"
		],
		"next": ["humanities", "science"]
		},
		{
		"id": 2,
		"question": "오늘은 진짜 공부해야지!<br>제일 어려운 과목은?",
		"options": [
			"inevitable..<br>영어 하기 싫어!",
			"39x24^2..<br>으, 수학 어려워"
		],
		"next": ["science", "humanities"]
		},
		{
		"id": 3,
		"question": "내일 특강이래!<br>제일 듣고 싶은 것은?",
		"options": [
			"OO는 과학이다.<br>과학이 일상에 영향을 미치는 것",
			"학생들이 단번에 집중할 수 있게 만드는 방법",
			"유명 작가와 함께하는 작품 그리기"
		],
		"next": ["science", "education", "humanities"]
		},
		{
		"id": 4,
		"question": "동아리 결정하는 날!<br>제일 하고 싶은 동아리는?",
		"options": [
			"히히 로켓 발사! 과학 동아리",
			"예쁘고 귀여운 그림을 감상하는 동아리",
			"이것만은 꺼내지 않으려고 했는데..<br>울어라 교육 동아리"
		],
		"next": ["science", "humanities", "education"]
		}
	],
	"humanitiesCommon": [
		{
		"id": 5,
		"question": "수업시간에 나도 모르게 졸았다..<br>근데 꿈이..?",
		"options": [
			"새로운 영웅은 언제나 환영이야!<br>멋있는 영웅님",
			"연설하는 한 집단의 수장",
			"세상이 환상적으로 보여..<br>색감 너무 이쁘다.."
		],
		"next": ["humanitiesDetail", "social", "art"]
		}
	],
	"scienceCommon": [
		{
		"id": 6,
		"question": "수업시간에 나도 모르게 졸았다..<br>근데 꿈이..?",
		"options": [
			"혁신적인 IT 기기로 세상을 바꿨다!",
			"너밖에 없어..<br>위기에 빠진 친구를 구해줬다",
			"사과가 떨어졌네..? 중력 500배"
		],
		"next": ["engineering", "medical", "natural"]
		}
	],
	"humanitiesDetail": [
		{
		"id": 7,
		"question": "책이 내 앞에 두 권 있다.<br>뭐 읽지..?",
		"options": [
			"영어 원서 <운수 좋은 날>",
			"한국어 <해리 포터>"
		],
		"next": ["영어영문학과", "국어국문학과"]
		},
		{
		"id": 8,
		"question": "유럽 여행 갈래! 한 곳만 간다면?",
		"options": [
			"슈바인학세 먹을래요!<br>독일",
			"라따뚜이! 이게 그렇게 맛있다구!<br>프랑스"
		],
		"next": ["독어독문학과", "불어불문학과"]
		},
		{
		"id": 9,
		"question": "치파오 vs 기모노",
		"options": [
			"아름다운 디자인의 기모노",
			"다채로운 자수의 치파오"
		],
		"next": ["일본지역문화학과", "중어중국학과"]
		},
		{
		"id": 10,
		"question": "문학 작품 해석 발표를 진행하는데,<br>내가 할 주제는?",
		"options": [
			"브람스를 좋아하세요?<br>프랑스 문학",
			"데미안<br>독일 문학",
			"운수 좋은 날<br>한국 문학",
			"샬롯의 거미줄<br>영어 문학"
		],
		"next": ["불어불문학과", "독어독문학과", "국어국문학과", "영어영문학과"]
		},
		{
		"id": 11,
		"question": "내일은 교양 수업 날이야!<br>제일 듣고 싶은 수업은?",
		"options": [
			"독일에서 30년 살았습니다.<br>쉽게 가르쳐드림",
			"넷플릭스로 배우는 영어 프리토킹",
			"Wo Xing Shi,<br>중국어로 배우는 요즘 밈",
			"일본 애니메이션과<br>만화 속 일본어",
			"한국의 노래: 조선시대 가사부터<br>현대 K-POP까지",
			"불어로 읽는 프랑스 영화와 연극"
		],
		"next": ["독어독문학과", "영어영문학과", "중어중국학과", "일본지역문화학과", "국어국문학과", "불어불문학과"]
		}
	],
	"social": [
		{
		"id": 12,
		"question": "봉사활동 시간!<br>어떤 봉사가 제일 좋을까..?",
		"options": [
			"괜찮아..? 할 수 있어!<br>사연 들어주기",
			"우리 도서관 정상영업 합니다.<br>도서관 사서",
			"계산은 제게 맡겨주세요!<br>행정복지센터"
		],
		"next": ["사회복지학과", "문헌정보학과", "세무회계학과"]
		},
		{
		"id": 13,
		"question": "학교 축제를 기획해본다면?",
		"options": [
			"인천시 홍보맨이 될 거야!<br>홍보팀",
			"축제를 하려면.. 어떤 사람이 필요하지?<br>계획팀",
			"저번 축제에선 어떻게 했지?<br>조사팀"
		],
		"next": ["미디어커뮤니케이션학과", "창의인재개발학과", "데이터과학과"]
		},
		{
		"id": 14,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"우리나라가 강대국 사이에서 살아남는 방법",
			"효율적으로 일하고 싶어.. 어떻게 하죠?",
			"전 사업할 건데요? CEO가 되는 방법"
		],
		"next": ["정치외교학과", "행정학과", "경영학부"]
		},
		{
		"id": 15,
		"question": "창업을 마음먹었다!<br>제일 먼저 든 생각은?",
		"options": [
			"수출하려면.. 뭘 해야 하지..?",
			"지금 가진 자본으로는.. 요 정도면 될 것 같아",
			"사람들이 사고 싶어 하는 건 무엇일까!?"
		],
		"next": ["무역학부", "경제학과", "소비자학과"]
		},
		{
		"id": 16,
		"question": "오늘은 일일 반장 시간!<br>어떤 걸 해볼까..?",
		"options": [
			"친구들과 자료 정리 하기!",
			"오늘은 뭐할 거냐면요~<br>VLOG 찍기",
			"반 분위기 최대로!<br>소외된 친구가 없도록 친해지기",
			"우리 진로를 정할 때도 됐잖아..?<br>연사 초청",
			"너가 오늘 청소야!<br>그동안 청소 안 한 친구 대청소 시키기",
			"그동안 지각비 얼마나 모였는지 확인하기"
		],
		"next": ["문헌정보학과", "미디어커뮤니케이션학과", "사회복지학과", "창의인재개발학과", "데이터과학과", "세무회계학과"]
		},
		{
		"id": 17,
		"question": "내가 엔터테인먼트 회사의 사장이라면?",
		"options": [
			"회사가 대중에게 어떻게 보일지 고민하고,<br>진단한다",
			"불필요한 업무를 진단하고 삭제한다",
			"어느 나라에서 잘 팔릴지 고민한다",
			"어떻게 이익을 많이 낼지 고민한다",
			"사람들은 어떤 음악을 좋아할지 생각한다",
			"회사를 구조적으로 안정화시킨다"
		],
		"next": ["정치외교학과", "행정학과", "무역학부", "경제학과", "소비자학과", "경영학부"]
		},
		{
		"id": 18,
		"question": "만약 직업 체험을 한다면?",
		"options": [
			"대출이신가요? 도서관 사서",
			"콘텐츠를 만드는 방송국 PD",
			"따뜻한 말을 해주는 사회복지사",
			"'너 방출' 인사관리",
			"외국의 대사관에서 일하는 외교관",
			"회사의 중심! 행정 관리자",
			"효율적인 수입을 할 수 있는 방법은 뭘까..?<br>수출입 관리자",
			"왜 우리 회사는 돈이 항상 부족한 거야..!<br>경제팀",
			"어서 오세요! 어디까지 알아보셨나요?!",
			"고객의 만족도가 중요해!<br>브랜드 컨설턴트",
			"이쯤이면 슬슬 빠질게..<br>증권 트레이더",
			"우리 회사 제법 탄탄해요,<br>세무사"
		],
		"next": ["문헌정보학과", "미디어커뮤니케이션학과", "사회복지학과", "창의인재개발학과", "정치외교학과", "행정학과", "무역학부", "경제학과", "소비자학과", "경영학부", "데이터과학과", "세무회계학과"]
		}
	],
	"art": [
		{
		"id": 19,
		"question": "일러스트페어에 왔다!<br>내가 선호하는 작품은?",
		"options": [
			"독특한 컬러와 색감을 가진 해외 작품",
			"담담하게 이야기를 풀어내는 한국 작품"
		],
		"next": ["서양화전공", "한국화전공"]
		},
		{
		"id": 20,
		"question": "학교 축제를 기획한다면..",
		"options": [
			"스스로 만들 수 있는 우드 키링 부스지!",
			"축제는 역시 공연이 필수 아니겠어?!"
		],
		"next": ["디자인학부", "공연예술학과"]
		},
		{
		"id": 21,
		"question": "운동을 하려고 한다면..",
		"options": [
			"천천히 내 페이스대로 운동할 거야!",
			"운동을 시작했으면 끝을 봐야지!"
		],
		"next": ["운동건강학부", "스포츠과학부"]
		},
		{
		"id": 22,
		"question": "내가 예술가가 된다면?",
		"options": [
			"한국의 아름다움을 연구하기",
			"서양의 다양한 미술 양식을 연구하기",
			"무대 예술로 관객에게 감동 주기",
			"감각적인 디자인으로 사람들에게 다가가기"
		],
		"next": ["한국화전공", "서양화전공", "공연예술학과", "디자인학부"]
		},
		{
		"id": 23,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"한국의 숨겨진 명소 발견하기",
			"하루 10분 건강한 삶 유지하기",
			"서양의 아름다움과 문화생활",
			"연극 예술과 문화생활",
			"시선을 이끄는 패키지 디자인 15주 완성",
			"한 학기면 5km 달리기 가능!"
		],
		"next": ["한국화전공", "운동건강학부", "서양화전공", "공연예술학과", "디자인학부", "스포츠과학부"]
		}
	],
	"natural": [
		{
		"id": 24,
		"question": "영화 보러 갈래!<br>어떤 영화를 볼까?",
		"options": [
			"난 이제 죽음이요, 세상의 파괴자가 되었다<br>'오펜하이머'",
			"나 자신만의 길이 있어<br>'악마는 프라다를 입는다'"
		],
		"next": ["화학과", "패션산업학과"]
		},
		{
		"id": 25,
		"question": "가장 감명 깊은 말은?",
		"options": [
			"이 세계는 전부 숫자로 이루어져 있어",
			"고도로 발달한 힘은<br>마법과 구분할 수 없다",
			"심해, 우주보다 더 밝혀지지 않은 곳"
		],
		"next": ["수학과", "물리학과", "해양학과"]
		},
		{
		"id": 26,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"30세에 시작하는 미적분 첫 걸음",
			"코스모스를 필독할 이유",
			"pen+apple=?",
			"유행 타지 않는 옷 잘 입는 방법",
			"인류의 난제, 심해 탐사"
		],
		"next": ["수학과", "물리학과", "화학과", "패션산업학과", "해양학과"]
		}
	],
	"engineering": [
		{
		"id": 27,
		"question": "만약 전자제품을 개발한다면..",
		"options": [
			"안전한 전자제품 만들기",
			"움직이는 전자제품 만들기"
		],
		"next": ["전기공학과", "기계공학과"]
		},
		{
		"id": 28,
		"question": "만약 내가 애플 회장이라면?",
		"options": [
			"효율적인 공급망 관리 지시",
			"혁신적인 신소재를 이용한<br>제품 개발 지시",
			"작업자의 안전 관리감독 지시"
		],
		"next": ["산업경영공학과", "신소재공학과", "안전공학과"]
		},
		{
		"id": 29,
		"question": "교수님이 레포트를 내래..<br>뭘 쓰는 게 좋을까?",
		"options": [
			"ESS와 전기차가 앞으로 미칠 영향",
			"효율적인 바이오시밀러 제작을 위한 기기<br>TOP 3",
			"도시와 환경의 융합",
			"게임 개발을 위한 최적의 모델 분석"
		],
		"next": ["에너지화학공학과", "바이오-로봇시스템공학과", "환경공학전공", "컴퓨터공학과"]
		},
		{
		"id": 30,
		"question": "내가 마을을 지어본다면?",
		"options": [
			"수십 년 후에도 문제없는 시설이 가득한 마을",
			"나무가 빽빽한 공원이 가득한 마을",
			"미래적이고 미려한 건물이 가득한 마을"
		],
		"next": ["도시공학과", "건설환경공학전공", "도시건축학전공"]
		},
		{
		"id": 31,
		"question": "학교에서 강연을 듣는다면?",
		"options": [
			"현장에서 30년 된 컴퓨터가 아직도 쓰이는 이유",
			"피카츄 백만 볼트가 실제로 가능한 걸까",
			"창업에 최적화된 학과는 바로 OO과입니다",
			"한국이 해냈다 초전도체 개발",
			"근골격계 질환을 유발하는 다리 꼬는 자세"
		],
		"next": ["기계공학과", "전기공학과", "산업경영공학과", "신소재공학과", "안전공학과"]
		},
		{
		"id": 32,
		"question": "쉬는 시간에 유튜브로 보고 싶은 영상은?",
		"options": [
			"현대적인 건축 환경에 따른 비용",
			"지금 시대에 가장 핫한 학과 중 하나,<br>에너지의 미래",
			"로봇이 인간을 대체할 수 있을까?",
			"환경 보호 활동이 정말로 의미가 있을까?",
			"효율적인 도시의 모습,<br>설계하는 사람들의 이야기",
			"현대사회에 빼낼 수 없는 소프트웨어 이야기",
			"꼭 새로운 기법이 건축에 올바른 방향성은 아닙니다"
		],
		"next": ["건설환경공학전공", "에너지화학공학과", "바이오-로봇시스템공학과", "환경공학전공", "도시공학과", "컴퓨터공학과", "도시건축학전공"]
		},
		{
		"id": 33,
		"question": "가장 되고 싶은 사람은?",
		"options": [
			"미래의 로봇을 설계하고 관리하는 전문가",
			"혁신적인 전자기기를 발명하는 개발자",
			"회사의 성장 주축이 되는 리더",
			"새로운 소재를 발견하고 개발하는 연구원",
			"안전한 작업 환경을 조성하는 관리자",
			"더욱 가볍고 오래 지속되는 에너지 연구원",
			"인류에 도움이 되는 신약 제조시설 담당 개발자",
			"우리의 일상을 도와주는 소프트웨어 개발자",
			"지구 환경을 보존하는 환경 연구원",
			"도시의 교통 시스템을 계획하는 연구자",
			"미래 도시의 모습을 계획하는 도시 연구자",
			"도시 환경과 조화를 이루는 건축 디자이너"
		],
		"next": ["기계공학과", "전기공학과", "산업경영공학과", "신소재공학과", "안전공학과", "에너지화학공학과", "바이오-로봇시스템공학과", "컴퓨터공학과", "환경공학전공", "도시공학과", "도시건축학전공", "건설환경공학전공"]
		}
	],
	"medical": [
		{
		"id": 34,
		"question": "어떤 게 더 적성에 맞을까..?",
		"options": [
			"응급환자를 치료하는 의사",
			"치과 치료를 담당하는 의사"
		],
		"next": ["의대", "치대"]
		},
		{
		"id": 35,
		"question": "며칠째 머리가 아픈데,<br>집에 한약과 알약이 있다면?",
		"options": [
			"한약을 먹는 게 낫지 않을까?",
			"알약이 직빵이야"
		],
		"next": ["한의대", "약대"]
		},
		{
		"id": 36,
		"question": "보고서로 쓰고 싶은 주제는?",
		"options": [
			"동물의 질병과 사람의 질병의 차이",
			"쌍둥이는 세포조차 같을까?"
		],
		"next": ["수의대", "생명과학전공"]
		},
		{
		"id": 37,
		"question": "더욱 흥미로운 기사는?",
		"options": [
			"약, 사실 우리 세포를 파괴하고 있다?",
			"돼지 심장 이식, 최초 성공"
		],
		"next": ["분자의생명전공", "생명공학전공"]
		},
		{
		"id": 38,
		"question": "쉬는 시간에 유튜브를 본다면?",
		"options": [
			"의대생이 가르쳐주는 의학 상식",
			"인공지능의 시대,<br>약사가 여전히 필요한 이유",
			"한의학과 과학의 상관관계",
			"잇몸이 우리에게 필요한 3가지 이유"
		],
		"next": ["의대", "약대", "한의대", "치대"]
		},
		{
		"id": 39,
		"question": "과학 탐구 대회 중 제일 흥미로운 제목은?",
		"options": [
			"세상에 나쁜 개는 없다",
			"세포로 만든 미래의 비건 고기",
			"세상에서 가장 작은 분자의 힘",
			"유전자 변형으로 세상에 빛을 본 아기"
		],
		"next": ["수의대", "생명과학전공", "분자의생명전공", "생명공학전공"]
		},
		{
		"id": 40,
		"question": "가장 들어보고 싶은 강의는?",
		"options": [
			"인공지능과 로봇을 이용한 수술",
			"스케일링, 주기적으로 받아야 하는 이유",
			"브랜드가 달라도 성분이 같다는 약,<br>진짜인가요?",
			"한약이 우리 몸을 건강하게 바꾸는 이유",
			"동물과 사람의 약의 차이",
			"세포가 뇌에 미치는 영향",
			"세포와 분자는 무슨 차이가 있을까?",
			"유전자 혁명, 맞춤형 치료의 가능성"
		],
		"next": ["의대", "치대", "약대", "한의대", "수의대", "생명과학전공", "분자의생명전공", "생명공학전공"]
		}
	],
	"education": [
		{
		"id": 41,
		"question": "둘 중에 더 재밌는 활동은?",
		"options": [
			"문학 작품을 읽고 의미를 분석하는 것",
			"세계적으로 소통할 수 있는 것"
		],
		"next": ["국어교육과", "영어교육과"]
		},
		{
		"id": 42,
		"question": "내가 더 좋아하는 것은?",
		"options": [
			"다양한 나라의 문화와 역사를 배우는 것",
			"어려운 수학 문제가 이해되고 풀렸을 때"
		],
		"next": ["역사교육과", "수학교육과"]
		},
		{
		"id": 43,
		"question": "더 기억에 남는 수업은?",
		"options": [
			"외국어 시간에 했던 문화 교류 수업",
			"도덕 시간에 했던 토론 수업"
		],
		"next": ["일어교육과", "윤리교육과"]
		},
		{
		"id": 44,
		"question": "더 재미있는 콘텐츠는?",
		"options": [
			"유치원 아이들의 일상 VLOG",
			"축구 골 하이라이트 영상"
		],
		"next": ["유아교육과", "체육교육과"]
		},
		{
		"id": 45,
		"question": "방과 후 무슨 활동을 할까?",
		"options": [
			"소설을 읽으며 감정 이입하기",
			"외국인 친구와 온라인 게임하기",
			"역사적인 날을 기념하는 공모전 참여하기",
			"마트에서 고기를 사며 g당 가격 계산하기"
		],
		"next": ["국어교육과", "영어교육과", "역사교육과", "수학교육과"]
		},
		{
		"id": 46,
		"question": "가장 하고 싶은 활동은?",
		"options": [
			"사회적인 이슈에 대한 가벼운 얘기",
			"일본 애니메이션을 통한 언어 습득",
			"귀여운 아이들을 보며 힐링하기",
			"체계적인 운동 습관을 통해 발전하기"
		],
		"next": ["윤리교육과", "일어교육과", "유아교육과", "체육교육과"]
		},
		{
		"id": 47,
		"question": "다음에 들어보고 싶은 강의는?",
		"options": [
			"고전문학을 통한 심리 분석",
			"동아시아 문화 탐구",
			"글로벌 커뮤니케이션 전략",
			"역사란 승자의 기록이다",
			"'운수 좋은 날'의 설렁탕 중량 계산하기",
			"스포츠도 과학의 일부다",
			"지성이 있다는 것이 과연 좋은 것인가",
			"아이들이 언어를 습득하는 과정"
		],
		"next": ["국어교육과", "일어교육과", "영어교육과", "역사교육과", "수학교육과", "체육교육과", "윤리교육과", "유아교육과"]
		}
	]
}

const infoList = [
    {
        major: "의대",
        desc: "의과대학은 의학에 대한 전반적인 지식을 습득하고, 의사로서의 전문성과 윤리의식을 기르며, 환자를 진단하고 치료하는 능력을 함양하는 것을 목표로 합니다.",
        learning: [
            { name: "수의대", desc: "동물의 질병 예방과 치료에 관한 의학적 지식을 학습하는 학과예요" },
            { name: "약대", desc: "의약품에 대한 이해와 약물 치료의 원리를 연구하는 학과예요" },
            { name: "한의대", desc: "한국 전통 의학인 한의학에 대한 이론과 실제를 연구하는 학과예요" }
        ]
    },
	{
		"major": "약대",
		"desc": "약학대학은 의약품의 개발, 제조, 관리, 유통, 사용에 관한 학문을 연구하고, 전문적인 약사로서의 자질을 기르는 것을 목표로 합니다.",
		"learning": [
			{ "name": "한의대", "desc": "한국 전통 의학인 한의학에 대한 이론과 실제를 연구하는 학과예요" },
			{ "name": "의대", "desc": "의학적 지식과 실제 의료 실무를 학습하는 학과예요" },
			{ "name": "수의대", "desc": "동물의 질병 예방과 치료에 관한 의학적 지식을 학습하는 학과예요" }
		]
	},
	{
		"major": "치대",
		"desc": "치의학과는 구강 및 치아 건강을 다루는 학문으로, 치과 의사로서의 자질을 기르고, 구강 질환의 진단과 치료 능력을 함양하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "의대", "desc": "의학적 지식과 실제 의료 실무를 학습하는 학과예요" },
			{ "name": "수의대", "desc": "동물의 질병 예방과 치료에 관한 의학적 지식을 학습하는 학과예요" },
			{ "name": "한의대", "desc": "한국 전통 의학인 한의학에 대한 이론과 실제를 연구하는 학과예요" }
		]
	},
	{
		"major": "바이오-로봇시스템공학과",
		"desc": "바이오-로봇시스템공학과는 로봇과 생명공학의 융합을 통해 첨단 의료기기 및 바이오메카트로닉스 시스템을 연구하고 개발하는 학문을 다룹니다.",
		"learning": [
			{ "name": "신소재공학과", "desc": "새로운 소재를 발견하고 개발하는 학과예요" },
			{ "name": "컴퓨터공학부", "desc": "컴퓨터 및 정보 기술에 대한 이론과 응용을 연구하고 학습하는 학과예요" },
			{ "name": "기계공학과", "desc": "인류의 생활을 편리하고 윤택하게 하는 다양한 종류의 기계들을 설계, 제작, 해석, 제어하는 학과예요" }
		]
	},
	{
		"major": "수의대",
		"desc": "수의과대학은 동물의 건강과 복지를 증진시키기 위해 질병의 예방, 진단, 치료에 대한 학문을 연구합니다.",
		"learning": [
			{ "name": "약대", "desc": "의약품에 대한 이해와 약물 치료의 원리를 연구하는 학과예요" },
			{ "name": "의대", "desc": "의학적 지식과 실제 의료 실무를 학습하는 학과예요" },
			{ "name": "한의대", "desc": "한국 전통 의학인 한의학에 대한 이론과 실제를 연구하는 학과예요" }
		]
	},
	{
		"major": "수학과",
		"desc": "수학과는 수학적 이론과 기법을 연구하며, 논리적 사고와 문제 해결 능력을 기르는 것을 목표로 합니다.",
		"learning": [
			{ "name": "수학교육과", "desc": "수학교육의 미래를 선도할 중등 수학 교사 및 수학교육 전문가를 양성하는 학과예요" },
			{ "name": "화학과", "desc": "물질의 성질과 변화를 연구하는 학문으로 화학과 관련된 인재를 배출하는 학과예요" },
			{ "name": "물리학과", "desc": "자연계의 기본 원리에 대한 이론과 실험을 통해자연현상을 이해하고, 전문 인력을 배출하는 학과예요" }
		]
	},
	{
		"major": "한의대",
		"desc": "한의과대학은 전통 한의학을 기반으로 한 진단 및 치료 기법을 연구하며, 한의사로서의 전문성을 기릅니다.",
		"learning": [
			{ "name": "의대", "desc": "의학적 지식과 실제 의료 실무를 학습하는 학과예요" },
			{ "name": "수의대", "desc": "동물의 질병 예방과 치료에 관한 의학적 지식을 학습하는 학과예요" },
			{ "name": "약대", "desc": "의약품에 대한 이해와 약물 치료의 원리를 연구하는 학과예요" }
		]
	},
	{
		"major": "화학과",
		"desc": "화학과는 물질의 구성, 구조, 성질 및 변화를 연구하는 학문으로, 다양한 산업에서 응용되는 화학 지식을 제공합니다.",
		"learning": [
			{ "name": "생명과학전공", "desc": "생명체의 구조, 기능, 발생, 진화 등을 연구하여 생명 현상을 이해하는 학과예요" },
			{ "name": "해양학과", "desc": "바다와 그 안의 생물, 해양환경 등을 연구하여 지구의 바다에 대한 이해를 증진시키는 학과예요" },
			{ "name": "에너지화학공학과", "desc": "화학적인 원리를 활용하여 에너지를 생산, 저장, 변환, 이용하는 과정을 연구하는 학과예요" }
		]
	},
	{
		"major": "경영학부",
		"desc": "경영학부는 기업의 경영 원리와 전략을 연구하며, 경영 관리와 관련된 전문 지식을 제공합니다.",
		"learning": [
			{ "name": "생명과학전공", "desc": "생명체의 구조, 기능, 발생, 진화 등을 연구하여 생명 현상을 이해하는 학과예요" },
			{ "name": "해양학과", "desc": "바다와 그 안의 생물, 해양환경 등을 연구하여 지구의 바다에 대한 이해를 증진시키는 학과예요" },
			{ "name": "에너지화학공학과", "desc": "화학적인 원리를 활용하여 에너지를 생산, 저장, 변환, 이용하는 과정을 연구하는 학과예요" }
		]
	},
	{
		"major": "경제학과",
		"desc": "경제학과는 경제 이론과 정책을 연구하며, 경제 문제를 분석하고 해결하는 능력을 기릅니다.",
		"learning": [
			{ "name": "세무회계학과", "desc": "세무를 이행하고 재무 상태를 보고하는 데 필요한 지식과 기술을 연구하는 학과예요" },
			{ "name": "경영학부", "desc": "기업이나 조직을 효율적으로 운영하고 관리하는데 필요한 이론과 기술을 연구하는 학과예요" },
			{ "name": "행정학과", "desc": "정부 및 공공기관의 조직, 정책, 운영 등을 연구하는 학과예요" }
		]
	},
	{
		"major": "국어국문학과",
		"desc": "국어국문학과는 한국어와 한국 문학을 체계적으로 연구하며, 국어학과 국문학을 통해 민족문화의 창달에 기여하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "국어교육과", "desc": "국어교육의 미래를 선도할 중등 국어 교사 및 국어교육 전문가를 양성하는 학과예요" },
			{ "name": "중어중국학과", "desc": "중국 전문가를 양성하기 위해 중국의 다양한 영역에 대해 체계적으로 교육하는 학과예요" },
			{ "name": "일본지역문화학과", "desc": "일본지역 및 문화 전반에 대해 통찰력을 가진 융합적인 인재를 배출하는 학과예요" }
		]
	},
	{
		"major": "독어독문학과",
		"desc": "독어독문학과는 독일어와 독일 문학을 연구하며, 독일어의 언어적 특성과 문학적 작품을 통해 독일 문화를 이해하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" },
			{ "name": "영어영문학과", "desc": "영어영문학을 기반으로 국제적으로 의사소통할수있는 능력을 기르는 학과예요" },
			{ "name": "불어불문학과", "desc": "프랑스의 문화, 예술, 사회 등을 체험함으로써 세계를 폭넓게 이해할 수 있는 인재를 배출하는 학과예요" }
		]
	},
	{
		"major": "무역학부",
		"desc": "무역학과는 국제 무역과 관련된 이론과 실무를 연구하며, 글로벌 비즈니스 환경에서 필요한 전문 지식을 제공합니다.",
		"learning": [
			{ "name": "소비자학과", "desc": "소비자의 니즈를 이해하고 소비자 복지를 증진시키는 학과예요" },
			{ "name": "경영학부", "desc": "경영학부는 기업이나 조직을 효율적으로 운영하고 관리하는데 필요한 이론과 기술을 연구하는 학과예요" },
			{ "name": "미디어커뮤니케이션학과", "desc": "다양한 매체의 커뮤니케이션 방법을 통해 정보를 전달하고 소통하는 과정을 연구하는 학과예요" }
		]
	},
	{
		"major": "물리학과",
		"desc": "물리학과는 자연의 기본 원리를 연구하며, 물질과 에너지의 상호작용을 이해하고 응용하는 능력을 기릅니다.",
		"learning": [
			{ "name": "기계공학과", "desc": "인류의 생활을 편리하고 윤택하게 하는 다양한 종류의 기계들을 설계, 제작, 해석, 제어하는 학과예요" },
			{ "name": "수학과", "desc": "수학의 기본원리를 이해하는 창조적 사고를 지닌 전문인을 육성하는 학과예요" },
			{ "name": "해양학과", "desc": "바다와 그 안의 생물, 해양환경 등을 연구하여 지구의 바다에 대한 이해를 증진시키는 학과예요" }
		]
	},
	{
		"major": "불어불문학과",
		"desc": "불어불문학과는 프랑스어와 프랑스 문학을 연구하며, 프랑스어의 언어적 특성과 문학적 작품을 통해 프랑스 문화를 이해하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" },
			{ "name": "영어영문학과", "desc": "영어영문학을 기반으로 국제적으로 의사소통할수있는 능력을 기르는 학과예요" },
			{ "name": "중어중국학과", "desc": "중국 전문가를 양성하기 위해 중국의 다양한 영역에 대해 체계적으로 교육하는 학과예요" }
		]
	},
	{
		"major": "영어영문학과",
		"desc": "영어영문학과는 영어와 영미 문학을 연구하며, 영어의 언어적 특성과 문학적 작품을 통해 영미 문화를 이해하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "영어교육과", "desc": "영어를 가르치는 방법과 교육에 관한 과목을 다루는 학과예요" },
			{ "name": "독어독문학과", "desc": "독일어를 배우고, 독일 문학 작품을 이해하고 분석하는 방법을 배우는 학과예요" },
			{ "name": "불어불문학과", "desc": "프랑스의 문화, 예술, 사회 등을 체험함으로써 세계를 폭넓게 이해할 수 있는 인재를 배출하는 학과예요" }
		]
	},
	{
		"major": "일본지역문화학과",
		"desc": "일본지역문화학과는 일본어와 일본 문학을 연구하며, 일본어의 언어적 특성과 문학적 작품을 통해 일본 문화를 이해하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "일어교육과", "desc": "일본어교육의 미래를 선도할 중등 일본어 교사 및 일본어교육 전문가를 양성하는 학과예요" },
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" },
			{ "name": "영어영문학과", "desc": "영어영문학을 기반으로 국제적으로 의사소통할수있는 능력을 기르는 학과예요" }
		]
	},
	{
		"major": "중어중국학과",
		"desc": "중어중문학과는 중국어와 중국 문학을 연구하며, 중국어의 언어적 특성과 문학적 작품을 통해 중국 문화를 이해하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" },
			{ "name": "불어불문학과", "desc": "프랑스의 문화, 예술, 사회 등을 체험함으로써 세계를 폭넓게 이해할 수 있는 인재를 배출하는 학과예요" },
			{ "name": "영어영문학과", "desc": "영어영문학을 기반으로 국제적으로 의사소통할수있는 능력을 기르는 학과예요" }
		]
	},
	{
		"major": "해양학과",
		"desc": "해양학과는 해양 환경과 생태계를 연구하며, 해양 자원의 관리와 보전을 통해 지속 가능한 해양 개발을 목표로 합니다.",
		"learning": [
			{ "name": "물리학과", "desc": "자연계의 기본 원리에 대한 이론과 실험을 통해자연현상을 이해하고, 전문 인력을 배출하는 학과예요" },
			{ "name": "화학과", "desc": "물질의 성질과 변화를 연구하는 학문으로 화학과 관련된 인재를 배출하는 학과예요" },
			{ "name": "환경공학전공", "desc": "환경 오염의 예방, 감시, 제어 및 관리에 관한 기술을 연구하고 적용하는 학과예요" }
		]
	},
	{
		"major": "행정학과",
		"desc": "행정학과는 공공 관리와 정책을 연구하며, 공공기관에서의 효율적이고 효과적인 운영을 위한 전문 지식을 제공합니다.",
		"learning": [
			{ "name": "창의인재개발학과", "desc": "창의성과 리더십을 갖춘 인재를 양성하기 위한 이론과 실천 방법론을 탐구하는 학과예요" },
			{ "name": "무역학부", "desc": "무역 정책, 국제 경제 관계 등을 연구하고 학습하는 학과예요" },
			{ "name": "소비자학과", "desc": "소비자의 니즈를 이해하고 소비자 복지를 증진시키는 학과예요" }
		]
	},
	{
		"major": "국어교육과",
		"desc": "국어교육과는 한국어의 이론과 교육 방법을 연구하며, 국어 교사로서의 자질을 기릅니다.",
		"learning": [
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" },
			{ "name": "영어교육과", "desc": "영어 교육에 관련된 이론과 실무를 학습하는 학과예요" },
			{ "name": "영어영문학과", "desc": "영어영문학을 기반으로 국제적으로 의사소통할수있는 능력을 기르는 학과예요" }
		]
	},
	{
		"major": "기계공학과",
		"desc": "기계공학과는 기계 시스템의 설계, 제작 및 운용을 연구하며, 다양한 산업 분야에서 활용되는 기계 공학 지식을 제공합니다.",
		"learning": [
			{ "name": "전기공학과", "desc": "전기 및 전자 기술에 관한 이론과 응용을 연구하고 학습하는 학과예요" },
			{ "name": "전자공학과", "desc": "전자기술과 관련된 이론과 기술을 연구하고 학습하는 학과예요" },
			{ "name": "컴퓨터공학부", "desc": "컴퓨터 및 정보 기술에 대한 이론과 응용을 연구하고 학습하는 학과예요" }
		]
	},
	{
		"major": "도시건축학전공",
		"desc": "도시건축학과는 도시 환경과 건축물의 설계 및 관리에 대한 종합적인 지식을 습득하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "건설환경공학전공", "desc": "국토의 개발 및 보전, 환경문제, 교통계획 및 시설, 수자원 개발, 도시계획에 기여하는 인재를 육성하는 학과예요" },
			{ "name": "건축공학과", "desc": "건물의 구조적 안전성과 기능성을 고려하여 건축물을 설계하고 건설하는 기술을 학습하는 학과예요" },
			{ "name": "안전공학과", "desc": "산업, 건설, 환경 등 다양한 분야에서 안전한 작업 환경을 조성하고 유지하는 기술을 연구하고 학습하는 학과예요" }
		]
	},
	{
		"major": "도시공학과",
		"desc": "도시공학과는 도시의 계획, 개발 및 관리를 연구하며, 지속 가능한 도시 환경을 구축하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "도시건축학전공", "desc": "도시 환경의 건축과 디자인을 연구하고 도시 공간을 개선하는 학과예요" },
			{ "name": "건축공학과", "desc": "건물의 구조적 안전성과 기능성을 고려하여 건축물을 설계하고 건설하는 기술을 학습하는 학과예요" },
			{ "name": "안전공학과", "desc": "산업, 건설, 환경 등 다양한 분야에서 안전한 작업 환경을 조성하고 유지하는 기술을 연구하고 학습하는 학과예요" }
		]
	},
	{
		"major": "디자인학부",
		"desc": "디자인학부는 시각, 제품, 환경 등 다양한 분야의 디자인 이론과 실습을 통해 창의적이고 실용적인 디자인 능력을 기릅니다.",
		"learning": [
			{ "name": "한국화전공", "desc": "한국의 전통 문화와 미술을 연구하고 이해하는 학과예요" },
			{ "name": "서양화전공", "desc": "서양 미술과 미술사를 연구하고 이해하는 학과예요" },
			{ "name": "공연예술학과", "desc": "연극, 무용, 음악, 영화 등 다양한 공연 예술을 연구하고 이해하는 학과예요" }
		]
	},
	{
		"major": "생명공학전공",
		"desc": "생명공학과는 생명과학의 원리를 응용하여 생명체와 관련된 기술을 개발하고 연구합니다.",
		"learning": [
			{ "name": "생명과학전공", "desc": "생명체의 구조, 기능, 발생, 진화 등을 연구하여 생명 현상을 이해하는 학과예요" },
			{ "name": "분자의생명전공", "desc": "분자 수준에서의 생명 현상을 연구하고 이해하는 학과예요" },
			{ "name": "의대", "desc": "의학적 지식과 실제 의료 실무를 학습하는 학과예요" }
		]
	},
	{
		"major": "생명과학전공",
		"desc": "생명과학과는 생명체의 구조와 기능을 연구하며, 생명과학의 다양한 분야에서 응용 가능한 지식을 제공합니다.",
		"learning": [
			{ "name": "분자의생명전공", "desc": "분자 수준에서의 생명 현상을 연구하고 이해하는 학과예요" },
			{ "name": "생명공학전공", "desc": "생명체를 활용한 기술과 응용 프로그램을 개발하는 학과예요" },
			{ "name": "의대", "desc": "의학적 지식과 실제 의료 실무를 학습하는 학과예요" }
		]
	},
	{
		"major": "서양화전공",
		"desc": "서양화전공은 서양화의 역사와 기법을 연구하며, 창의적인 예술적 표현 능력을 기릅니다.",
		"learning": [
			{ "name": "한국화전공", "desc": "한국의 전통 문화와 미술을 연구하고 이해하는 학과예요" },
			{ "name": "디자인학부", "desc": "다양한 디자인 분야에 대한 이론과 기술을 학습하는 학과예요" },
			{ "name": "공연예술학과", "desc": "연극, 무용, 음악, 영화 등 다양한 공연 예술을 연구하고 이해하는 학과예요" }
		]
	},
	{
		"major": "소비자학과",
		"desc": "소비자학과는 소비자의 행동과 시장 동향을 연구하며, 소비자 보호와 관련된 전문 지식을 제공합니다.",
		"learning": [
			{ "name": "데이터과학과", "desc": "데이터과학과는 대량의 데이터를 수집, 분석하고 해석하여 유용한 정보를 추출하는데 중점을 두는 학과예요" },
			{ "name": "무역학부", "desc": "무역 정책, 국제 경제 관계 등을 연구하고 학습하는 학과예요" },
			{ "name": "경영학부", "desc": "경영학부는 기업이나 조직을 효율적으로 운영하고 관리하는데 필요한 이론과 기술을 연구하는 학과예요" }
		]
	},
	{
		"major": "수학교육과",
		"desc": "수학교육과는 수학의 이론과 교육 방법을 연구하며, 수학 교사로서의 자질을 기릅니다.",
		"learning": [
			{ "name": "수학과", "desc": "수학의 기본원리를 이해하는 창조적 사고를 지닌 전문인을 육성하는 학과예요" },
			{ "name": "물리학과", "desc": "자연계의 기본 원리에 대한 이론과 실험을 통해자연현상을 이해하고, 전문 인력을 배출하는 학과예요" },
			{ "name": "기계공학과", "desc": "인류의 생활을 편리하고 윤택하게 하는 다양한 종류의 기계들을 설계, 제작, 해석, 제어하는 학과예요" }
		]
	},
	{
		"major": "안전공학과",
		"desc": "안전공학과는 산업 현장에서의 안전을 보장하기 위해 위험 요소를 분석하고 관리하는 방법을 연구합니다.",
		"learning": [
			{ "name": "환경공학전공", "desc": "환경 보호와 지속 가능한 발전을 위해 환경과 관련된 다양한 문제를 해결하는데 초점을 둔 학과예요" },
			{ "name": "산업경영공학과", "desc": "생산 및 운영 프로세스를 최적화하고 조직을 효율적으로 관리하는데 필요한 이론과 기술을 연구하는 학과예요" },
			{ "name": "건설환경공학전공", "desc": "국토의 개발 및 보전, 환경문제, 교통계획 및 시설, 수자원 개발, 도시계획에 기여하는 인재를 육성하는 학과예요" }
		]
	},
	{
		"major": "역사교육과",
		"desc": "역사교육과는 역사 이론과 교육 방법을 연구하며, 역사 교사로서의 자질을 기릅니다.",
		"learning": [
			{ "name": "국어교육과", "desc": "국어교육의 미래를 선도할 중등 국어 교사 및 국어교육 전문가를 양성하는 학과예요" },
			{ "name": "영어교육과", "desc": "영어 교육 방법론과 교육 과정을 학습하는 학과예요" },
			{ "name": "윤리교육과", "desc": "윤리 교육에 관한 이론과 실제 교육 방법을 연구하는 학과예요" }
		]
	},
	{
		"major": "영어교육과",
		"desc": "영어교육과는 영어의 이론과 교육 방법을 연구하며, 영어 교사로서의 자질을 기릅니다.",
		"learning": [
			{ "name": "영어영문학과", "desc": "영어영문학을 기반으로 국제적으로 의사소통할수있는 능력을 기르는 학과예요" },
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" },
			{ "name": "국어교육과", "desc": "국어교육의 미래를 선도할 중등 국어 교사 및 국어교육 전문가를 양성하는 학과예요" }
		]
	},
	{
		"major": "유아교육과",
		"desc": "유아교육과는 유아기의 발달과 교육을 연구하며, 유아 교사로서의 자질을 기릅니다.",
		"learning": [
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" },
			{ "name": "국어교육과", "desc": "국어교육의 미래를 선도할 중등 국어 교사 및 국어교육 전문가를 양성하는 학과예요" },
			{ "name": "영어교육과", "desc": "영어 교육에 관련된 이론과 실무를 학습하는 학과예요" }
		]
	},
	{
		"major": "윤리교육과",
		"desc": "윤리교육과는 윤리 이론과 교육 방법을 연구하며, 윤리 교사로서의 자질을 기릅니다.",
		"learning": [
			{ "name": "역사교육과", "desc": "역사 교육에 관련된 이론과 실무를 학습하는 학과예요" },
			{ "name": "국어교육과", "desc": "국어교육의 미래를 선도할 중등 국어 교사 및 국어교육 전문가를 양성하는 학과예요" },
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" }
		]
	},
	{
		"major": "일어교육과",
		"desc": "일어교육과는 일본어의 이론과 교육 방법을 연구하며, 일본어 교사로서의 자질을 기릅니다.",
		"learning": [
			{ "name": "일본지역문화학과", "desc": "일본지역 및 문화 전반에 대해 통찰력을 가진 융합적인 인재를 배출하는 학과예요" },
			{ "name": "국어교육과", "desc": "국어교육의 미래를 선도할 중등 국어 교사 및 국어교육 전문가를 양성하는 학과예요" },
			{ "name": "국어국문학과", "desc": "인문학적인 지식과 국제적인 시각을 갖춰 다양한 문화간에 교류할수있는 능력키우는 학과예요" }
		]
	},
	{
		"major": "전기공학과",
		"desc": "전기공학과는 전기에 대한 이론과 실습을 통해 전기 분야의 전문 지식을 습득하고, 다양한 산업 분야에서 전기 관련 기술을 응용하는 능력을 기르는 것을 목표로 합니다.",
		"learning": [
			{ "name": "에너지화학공학과", "desc": "화학적인 원리를 활용하여 에너지를 생산, 저장, 변환, 이용하는 과정을 연구하는 학과예요" },
			{ "name": "바이오-로봇시스템공학과", "desc": "생물학과 로봇공학을 융합하여 인간과 로봇 간의 상호작용 및 협력을 연구하는 학과예요" },
			{ "name": "신소재공학과", "desc": "새로운 소재를 발견하고 개발하는 학과예요" }
		]
	},
	{
		"major": "체육교육과",
		"desc": "체육교육과는 체육 이론과 교육 방법을 연구하며, 체육 교사로서의 자질을 기릅니다.",
		"learning": [
			{ "name": "운동건강학부", "desc": "운동 및 건강과 관련된 이론과 실무를 학습하는 학과예요" },
			{ "name": "스포츠과학부", "desc": "운동 영양, 운동 심리학 등 다양한 학문 분야를 통해 스포츠와 관련된 이론과 실무를 학습하는 학과예요" },
			{ "name": "공연예술학과", "desc": "연극, 무용, 음악, 영화 등 다양한 공연 예술을 연구하고 이해하는 학과예요" }
		]
	},
	{
		"major": "한국화전공",
		"desc": "한국화전공은 한국화의 역사와 기법을 연구하며, 창의적인 예술적 표현 능력을 기릅니다.",
		"learning": [
			{ "name": "서양화전공", "desc": "서양 미술과 미술사를 연구하고 이해하는 학과예요" },
			{ "name": "디자인학부", "desc": "다양한 디자인 분야에 대한 이론과 기술을 학습하는 학과예요" },
			{ "name": "공연예술학과", "desc": "연극, 무용, 음악, 영화 등 다양한 공연 예술을 연구하고 이해하는 학과예요" }
		]
	},
	{
		"major": "공연예술학과",
		"desc": "공연예술학과는 연극, 음악, 무용 등 다양한 공연 예술의 이론과 실기를 연구합니다.",
		"learning": [
			{ "name": "디자인학부", "desc": "다양한 디자인 분야에 대한 이론과 기술을 학습하는 학과예요" },
			{ "name": "행정학과", "desc": "정부 및 공공기관의 조직, 정책, 운영 등을 연구하는 학과예요" },
			{ "name": "경영학부", "desc": "경영학부는 기업이나 조직을 효율적으로 운영하고 관리하는데 필요한 이론과 기술을 연구하는 학과예요" }
		]
	},
	{
		"major": "데이터과학과",
		"desc": "데이터과학과는 데이터 분석 및 처리 기법을 연구하며, 빅데이터 시대에 필요한 전문 지식을 제공합니다.",
		"learning": [
			{ "name": "컴퓨터공학과", "desc": "컴퓨터 및 정보 기술에 대한 이론과 응용을 연구하고 학습하는 학과예요" },
			{ "name": "산업경영공학과", "desc": "생산 및 운영 프로세스를 최적화하고 조직을 효율적으로 관리하는데 필요한 이론과 기술을 연구하는 학과예요" },
			{ "name": "소비자학과", "desc": "소비자의 니즈를 이해하고 소비자 복지를 증진시키는 학과예요" }
		]
	},
	{
		"major": "문헌정보학과",
		"desc": "문헌정보학과는 정보의 수집, 관리 및 활용 방법을 연구하며, 도서관과 정보기관에서의 정보 서비스를 제공합니다.",
		"learning": [
			{ "name": "데이터과학과", "desc": "대량의 데이터를 수집, 분석하고 해석하여 유용한 정보를 추출하는데 중점을 두는 학과예요" },
			{ "name": "무역학부", "desc": "무역 정책, 국제 경제 관계 등을 연구하고 학습하는 학과예요" },
			{ "name": "정치외교학과", "desc": "국가 간의 정치적 상호 작용과 외교적 활동을 연구하고 이해하는 학과예요" }
		]
	},
	{
		"major": "사회복지학과",
		"desc": "사회복지학과는 사회 문제를 해결하고 사회적 약자를 지원하는 방법을 연구합니다.",
		"learning": [
			{ "name": "창의인재개발학과", "desc": "창의성과 리더십을 갖춘 인재를 양성하기 위한 이론과 실천 방법론을 탐구하는 학과예요" },
			{ "name": "행정학과", "desc": "정부 및 공공기관의 조직, 정책, 운영 등을 연구하는 학과예요" },
			{ "name": "문헌정보학과", "desc": "정보 자원을 수집, 분석, 구성, 관리하는 방법과 원리를 연구하는 학과예요" }
		]
	},
	{
		"major": "세무회계학과",
		"desc": "세무회계학과는 세무와 회계에 대한 전문 지식을 습득하며, 재정 관리와 관련된 다양한 이론과 실무를 배웁니다.",
		"learning": [
			{ "name": "경제학과", "desc": "생산, 소비, 분배에 관한 경제적 현상을 연구하는 학과예요" },
			{ "name": "행정학과", "desc": "정부 및 공공기관의 조직, 정책, 운영 등을 연구하는 학과예요" },
			{ "name": "경영학부", "desc": "경영학부는 기업이나 조직을 효율적으로 운영하고 관리하는데 필요한 이론과 기술을 연구하는 학과예요" }
		]
	},
	{
		"major": "스포츠과학부",
		"desc": "스포츠과학부는 스포츠와 관련된 이론과 실기를 연구하며, 스포츠 산업에서의 다양한 전문 지식을 제공합니다.",
		"learning": [
			{ "name": "운동건강학부", "desc": "운동 및 건강과 관련된 이론과 실무를 학습하는 학과예요" },
			{ "name": "체육교육과", "desc": "체육교육의 미래를 선도할 중등 체육 교사 및 체육교육 전문가를 양성하는 학과예요" },
			{ "name": "공연예술학과", "desc": "연극, 무용, 음악, 영화 등 다양한 공연 예술을 연구하고 이해하는 학과예요" }
		]
	},
	{
		"major": "신소재공학과",
		"desc": "신소재공학과는 신소재의 개발과 응용을 연구하며, 첨단 기술 산업에서 중요한 역할을 하는 재료를 다룹니다.",
		"learning": [
			{ "name": "에너지화학공학과", "desc": "화학적인 원리를 활용하여 에너지를 생산, 저장, 변환, 이용하는 과정을 연구하는 학과예요" },
			{ "name": "화학과", "desc": "물질의 성질과 변화를 연구하는 학문으로 화학과 관련된 인재를 배출하는 학과예요" },
			{ "name": "생명과학전공", "desc": "생명체의 구조, 기능, 발생, 진화 등을 연구하여 생명 현상을 이해하는 학과예요" }
		]
	},
	{
		"major": "운동건강학부",
		"desc": "운동건강학부는 운동과 건강에 대한 이론과 실습을 연구하며, 건강 증진과 관련된 다양한 지식을 제공합니다.",
		"learning": [
			{ "name": "스포츠과학부", "desc": "운동 영양, 운동 심리학 등 다양한 학문 분야를 통해 스포츠와 관련된 이론과 실무를 학습하는 학과예요" },
			{ "name": "체육교육과", "desc": "체육교육의 미래를 선도할 중등 체육 교사 및 체육교육 전문가를 양성하는 학과예요" },
			{ "name": "공연예술학과", "desc": "연극, 무용, 음악, 영화 등 다양한 공연 예술을 연구하고 이해하는 학과예요" }
		]
	},
	{
		"major": "정치외교학과",
		"desc": "정치외교학과는 정치 이론과 국제 관계를 연구하며, 정치적 문제를 분석하고 해결하는 능력을 기릅니다.",
		"learning": [
			{ "name": "무역학부", "desc": "무역 정책, 국제 경제 관계 등을 연구하고 학습하는 학과예요" },
			{ "name": "경영학부", "desc": "경영학부는 기업이나 조직을 효율적으로 운영하고 관리하는데 필요한 이론과 기술을 연구하는 학과예요" },
			{ "name": "미디어커뮤니케이션학과", "desc": "다양한 매체의 커뮤니케이션 방법을 통해 정보를 전달하고 소통하는 과정을 연구하는 학과예요" }
		]
	},
	{
		"major": "컴퓨터공학과",
		"desc": "컴퓨터공학과는 컴퓨터 시스템과 소프트웨어의 이론과 실습을 연구하며, 정보기술 분야에서 필요한 다양한 지식을 제공합니다.",
		"learning": [
			{ "name": "전기공학과", "desc": "전기 및 전자 기술에 관한 이론과 응용을 연구하고 학습하는 학과예요" },
			{ "name": "산업경영공학과", "desc": "생산 및 운영 프로세스를 최적화하고 조직을 효율적으로 관리하는데 필요한 이론과 기술을 연구하는 학과예요" },
			{ "name": "기계공학과", "desc": "인류의 생활을 편리하고 윤택하게 하는 다양한 종류의 기계들을 설계, 제작, 해석, 제어하는 학과예요" }
		]
	},
	{
		"major": "패션산업학과",
		"desc": "패션산업학과는 패션 디자인과 비즈니스의 이론과 실무를 연구하며, 패션 산업 전반에 필요한 전문 지식을 제공합니다.",
		"learning": [
			{ "name": "미디어커뮤니케이션학과", "desc": "다양한 매체에 정보를 전달하고 소통하는 과정을 연구하는 학과예요" },
			{ "name": "디자인학부", "desc": "시공간적 사물이나 환경을 창조하고 형성하는데 사용되는 다양한 디자인 원리와 기술을 배우는 학과예요" },
			{ "name": "데이터과학과", "desc": "데이터과학과는 대량의 데이터를 수집, 분석하고 해석하여 유용한 정보를 추출하는데 중점을 두는 학과예요" }
		]
	},
	{
		"major": "환경공학전공",
		"desc": "환경공학전공은 환경 문제를 해결하기 위한 기술과 방법을 연구하며, 지속 가능한 환경을 구축하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "안전공학과", "desc": "산업, 건설, 환경 등 다양한 분야에서 안전한 작업 환경을 조성하고 유지하는 기술을 연구하고 학습하는 학과예요" },
			{ "name": "건설환경공학전공", "desc": "국토의 개발 및 보전, 환경문제, 교통계획 및 시설, 수자원 개발, 도시계획에 기여하는 인재를 육성하는 학과예요" },
			{ "name": "도시건축학전공", "desc": "도시 환경의 건축과 디자인을 연구하고 도시 공간을 개선하는 학과예요" }
		]
	},
	{
		"major": "건설환경공학전공",
		"desc": "건설환경공학전공은 건설 기술과 환경 공학을 융합하여 지속 가능한 건설 환경을 조성하는 방법을 연구합니다.",
		"learning": [
			{ "name": "환경공학전공", "desc": "환경 보호 및 관리를 위한 공학 기술을 학습하는 학과예요" },
			{ "name": "건축공학과", "desc": "건물의 구조적 안전성과 기능성을 고려하여 건축물을 설계하고 건설하는 기술을 학습하는 학과예요" },
			{ "name": "도시건축학전공", "desc": "도시 환경의 건축과 디자인을 연구하고 도시 공간을 개선하는 학과예요" }
		]
	},
	{
		"major": "분자의생명전공",
		"desc": "분자의생명전공은 분자 수준에서 생명 현상을 연구하며, 생명 과학의 기초와 응용을 다룹니다.",
		"learning": [
			{ "name": "생명과학전공", "desc": "생명체를 활용한 기술과 응용 프로그램을 개발하는 학과예요" },
			{ "name": "생명공학전공", "desc": "생명체의 구조, 기능, 발생, 진화 등을 연구하여 생명 현상을 이해하는 학과예요" },
			{ "name": "약대", "desc": "의약품에 대한 이해와 약물 치료의 원리를 연구하는 학과예요" }
		]
	},
	{
		"major": "산업경영공학과",
		"desc": "산업경영공학과는 산업 시스템의 효율성을 향상시키기 위한 이론과 방법을 연구하며, 경영 과학과 공학을 융합합니다.",
		"learning": [
			{ "name": "데이터과학과", "desc": "대량의 데이터를 수집, 분석하고 해석하여 유용한 정보를 추출하는데 중점을 두는 학과예요" },
			{ "name": "컴퓨터공학부", "desc": "컴퓨터 및 정보 기술에 대한 이론과 응용을 연구하고 학습하는 학과예요" },
			{ "name": "경영학부", "desc": "경영학부는 기업이나 조직을 효율적으로 운영하고 관리하는데 필요한 이론과 기술을 연구하는 학과예요" }
		]
	},
	{
		"major": "에너지화학공학과",
		"desc": "에너지화학공학과는 에너지 자원과 화학 공정을 연구하며, 지속 가능한 에너지 기술을 개발하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "화학과", "desc": "물질의 성질과 변화를 연구하는 학문으로 화학과 관련된 인재를 배출하는 학과예요" },
			{ "name": "생명공학전공", "desc": "생명체의 구조, 기능, 그리고 생명체를 활용한 기술 개발에 초점을 맞춘 학과예요" },
			{ "name": "바이오-로봇시스템공학과", "desc": "생물학과 로봇공학을 융합하여 인간과 로봇 간의 상호작용 및 협력을 연구하는 학과예요" }
		]
	},
	{
		"major": "창의인재개발학과",
		"desc": "창의인재개발학과는 창의적 사고와 문제 해결 능력을 배양하여 다양한 산업 분야에서 요구되는 인재를 양성하는 것을 목표로 합니다.",
		"learning": [
			{ "name": "행정학과", "desc": "정부 및 공공기관의 조직, 정책, 운영 등을 연구하는 학과예요" },
			{ "name": "세무회계학과", "desc": "세무를 이행하고 회계 정보를 관리하는 데 필요한 지식과 기술을 학습하는 학과예요" },
			{ "name": "정치외교학과", "desc": "국가 간의 정치적 상호 작용과 외교적 활동을 연구하고 이해하는 학과예요" }
		]
	},
	{
		"major": "미디어커뮤니케이션학과",
		"desc": "미디어커뮤니케이션학과는 미디어와 커뮤니케이션의 이론과 실습을 연구하며, 현대 사회에서의 효과적인 커뮤니케이션을 목표로 합니다.",
		"learning": [
			{ "name": "행정학과", "desc": "정부 및 공공기관의 조직, 정책, 운영 등을 연구하는 학과예요" },
			{ "name": "세무회계학과", "desc": "세무를 이행하고 회계 정보를 관리하는 데 필요한 지식과 기술을 학습하는 학과예요" },
			{ "name": "정치외교학과", "desc": "국가 간의 정치적 상호 작용과 외교적 활동을 연구하고 이해하는 학과예요" }
		]
	}
];
