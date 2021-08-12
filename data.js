//name에 캐릭터명
//descript에 설명
//good에 좋은 궁합 MBTI
//bad에 나쁜 궁합 MBTI

var MBTIs = {
    'I': {
        'N': {
            'T': {
                'P': {
                    'name': 'Logical',
                    'descript': `시간만 있다면 뭐든지! 논리적인 분석가.
                                과묵한 성격으로 논리와 분석으로 문제 해결하기를 좋아하는 유형이에요!
                                친목회나 잡담에 관심이 없고 자신이 먼저 대화를 거는 일은 별로 없지만, 관심있는 분야라면 말이 많아지는 부분형 수다쟁이랍니다 ;)
                                결정을 내릴 때 잠깐 침묵해요. 하지만 조용하다고 동의의 뜻을 밝힌건 아니니 조금만 더 시간을 주면 좋은 답변을 받을 수 있을거에요 :)
                                현재 상황이 과거에 겪었던 어떤 사건과 비슷한지 빠르게 패턴을 읽어내요.
                                특정한 가능성 하나로 많은 생각을 해낼 수 있어요. 다른 사람이 보기에는 말도 안되고 시간낭비라고 생각하겠지만, 조금만 더 시간이 주어진다면 문제 상태를 해결하는데 매우 도움이 되는 생각을 해낸답니다!`,
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'korean': '논리적인'
                },
                'J': {
                    'name': 'Improve',
                    'descript': `혁신적인 분석가!
                                상대가 틀렸다는 것을 증명하는 경우 매우 거칠게 나오는 경향이 있으나 자기 통제력이 강해요. 
                                기존의 편의성보다는 혁신을 중시하는 유형이에요! 
                                팩트체크를 중요시 하는 유형이예요. 증거에 기반하는 정보를 제공하여야 한다는 사명감을 중요시하며 진실보다 감정을 더 중요하게 생각하는 상황을 싫어해요.
                                결론을 내릴 때 엄청나게 긴 시간이 걸리지만, 결정에 신중해요. 직감이나 가정이 아니라 분석이나 연구에 근거해서 정확하게 결론을 내리는 경우가 많아요 :)
                                타인의 인기를 얻는 것이 주요적인 관심사가 아니예요 🤔`,
                    'good': 'ESFP',
                    'bad': 'ESFJ',
                    'korean': '개선하다'
                }
            },
            'F': {
                'P': {
                    'name': 'Dreamy',
                    'descript': `꿈꾸는 이상주의자! 
                                이 유형은 각각 사람마다 흔한 길보다 각자만의 길을 찾아가야 한다고 생각하는 유형이예요. 내적 신념도 강한 유형이랍니다. 
                                일의 결과보다 가능성을 보며 사람들의 본질을 이해하려 하고 이 사람들의 가능성을 성취할 수 있도록 도움을 주는 사람이예요 :)
                                모든 사람들이 어울려 살기를 좋아하고 싸움을 피하기 위해 철저하게 계산해요. 
                                타인의 감정에 민감하지만, 자신이 좋아하는 사람을 기쁘게 하는 것을 좋아해요. 
                                다른 이에게 좋은 본보기가 되고자 해요. 
                                일상적이고 틀에 박힌 생활, 학습환경에 싫증을 느껴요!`,
                    'good': 'ESTJ',
                    'bad': 'ESTP',
                    'korean': '꿈꾸는 듯한'
                },
                'J': {
                    'name': 'Sympathy',
                    'descript': `정의 내리기 어렵고 알 수 없는 따뜻한 완벽주의자!
                                꽤나 강한 본인만의 철칙 탓에 고집이 세다고 느껴질 수 있지만,
                                상상력과 창의력, 그리고 독창성이 뛰어나요!
                                미래를 예측하는 것을 좋아해요.
                                직관력이 뛰어난 편이고
                                호기심이 많으며 언제나 다양한 것에 물음표를 달고 산답니다 ㅎㅂㅎ
                                매우 냉정한 면이 있긴 하지만
                                다정하고 따뜻한 면의 소유자에요.
                                누군가에게 큰 상처를 받으면 가차없이 잘라버리지만
                                평소에는 온화하답니다!
                                상대방이 하는 말 등에 의미부여를 많이 하기도 해요!`,
                    'good': 'ESTP',
                    'bad': 'ESTJ',
                    'korean': '동정심'
                }
            }
        },
        'S': {
            'T': {
                'P': {
                    'name': 'Workaholic',
                    'descript': `호기심 많고 유능한 실용주의자! 
                                고집이 세지만 필요에 따라 사교적이예요. 
                                상대방에 기분 때문에 마음 어디에도 없는 이야기를 하진 않아요. 
                                한 일에 들어가는 노력을 절약할 수 있고 절약과 동시에 일의 능률을 높여요. 
                                객관적 그리고 합리적으로 인생을 관찰해요. 
                                사회성이 부족한 편에 속하지만 눈치가 빨라서 주변 상황파악을 잘 해요.
                                정밀함을 요구하는 일을 잘 해내요 :)`,
                    'good': 'ENFJ',
                    'bad': 'ENFP',
                    'korean': '워커홀릭'
                },
                'J': {
                    'name': 'Halcyon',
                    'descript': `책임감 있고 침착한 모범생!
                                미안하다고 말은 못하지만 자신의 잘못은 잘 인정해요!
                                갑작스럽게 변화하는 것을 싫어해요 🤔
                                남들이 기억하기 힘든 추억들까지 기억하며, 이 테스트 유형 중에서 가장 솔직한 성격을 갖고 있어요. 
                                겉보기에 차가워 보이지만 의젓한 성격을 가졌어요. 
                                여러 방면에서 특별한 것 보다 일반적이고 전통적인걸 좋아하는 경향이 있어요.` ,
                    'good': 'ENFP',
                    'bad': 'ENFJ',
                    'korean': '평온한'
                }
            },
            'F': {
                'P': {
                    'name': 'Artistic',
                    'descript': `배려심이 강하고 예술적인 호기심쟁이! 
                                전통적인걸 좋아하는 사람과의 트러블이 많지만, 화가 나도 조용히 넘어가요. 
                                배려심이 많아 물 흐르듯 살아요.
                                자유로운 성향이 강하고 인간관계에 있어서 싫은 티를 잘 내지 않지만 속으로는 손절각을 잡는 경우가 많아요. 
                                삶의 사소한 것들이 귀찮고 카톡이나 페메를 귀찮다는 이유로 무시하는 경우가 태반이지만, 체계적으로 살아간답니다 ;)
                                규칙이라는 틀에 묶여있는걸 싫어해요 🤔`,
                    'good': 'ENTJ',
                    'bad': 'ENTP',
                    'korean': '예술적인'
                },
                'J': {
                    'name': 'Patient',
                    'descript': `솔직하고 인내력 강한 수호자! 
                                먼저 대화 시작을 잘 하지 않지만 연인 사이에는 메가 츤데레가 되어요!
                                많은 인원으로 구성된 팀 보다 적은 인원으로 구성된 팀 활동을 좋아해요. 
                                남에게 싫은 소리를 잘 못하고 본인도 싫은소리를 들으면 겉으로는 티를 잘 내지 않지만 속상해해요 
                                자신이 생각하거나 느끼는것에 비해서 표현하는게 적지만 사소한 디테일들은 잘 기억한답니다 ;)
                                잔잔하고 안전한 삶을 추구해요.`,
                    'good': 'ENTP',
                    'bad': 'ENTJ',
                    'korean': '인내심 있는'
                }
            }
        }
    },
    'E': {
        'N': {
            'T': {
                'P': {
                    'name': 'Whimsical',
                    'descript': `토론을 좋아하는 혁명가!
                    외향형 중에서는 가장 내향적이고, 낮가림도 있는 경우도 있지만 
                    친해지면 그런 거 없이 폭주하는 유형!
                    보통 지능이 높고 많은 지식을 가지고 있으며, 개척을 좋아하는 성격을 가지고 있는데다,
                    창의력까지 넘치기 때문에 발명가나 토론가다운 성격이라고 할 수 있답니다.
                    관심 가지던 분야에 대해서 빨리 식어버리는 편이긴 하지만,
                    덕분에 많은 분야에 손을 댈 수 있답니다 =D`,
                    'good': 'ISFJ',
                    'bad': 'ISFP',
                    'korean': '기발한'
                },
                'J': {
                    'name': 'Effective',
                    'descript': `자기 주장이 강한 단호한 통치자!
                    자신의 의견이 강한 편이며 단호하고 지도력과 통솔력을 가지고 있답니다,
                    어떠한 지식들을 가지고 싶다는 욕구가 많은 편이기도 해요.
                    놀랍게도, 이러한 유형은 사회에서 가장 성공하는 유형이기도 합니다!
                    좋은 사교성에 생기발랄한 성격, 그리고 어려운 도전을 주저하기는 커녕
                    즐기는 성격이기 때문이에요 ㅎㅂㅎ`,
                    'good': 'ISFP',
                    'bad': 'ISFJ',
                    'korean': '효과적인'
                }
            },
            'F': {
                'P': {
                    'name': 'Curiosity',
                    'descript': `활기가 넘치는 재기발랄형!
                    따뜻하고 재능이 많으며 풍부한 상상력을 가지고 있어요.
                    문제 해결 시에 재빠르며 관심 범위 안의 일은 뭐든지! 수행해 낸답니다.
                    뛰어난 통찰력도 가지고 있어, 타인에게 도움을 줄 때도 많죠!
                    또한 충동적인 기질의 소유자이기도 해서, 하고 싶은 게 있다면 뭐든 벌려놓고 보는 유형이에요!
                    지나치게 감정적인 면이 있긴 하지만, 의롭고 뛰어난 대화 능력을 갖춘 유형입니다!`,
                    'good': 'ISTJ',
                    'bad': 'ISTP',
                    'korean': '호기심'
                },
                'J': {
                    'name': 'Empathic',
                    'descript': `언변능숙한 사회운동가!   
                    적극적이고 따뜻한 성격을 가지고 있으며
                    책임감도 강하고 사교성 또한 많이 가지고 있답니다.
                    공동선을 위하여 타인의 의견에 대체로 동의하는 모습을 보이곤 하죠.
                    때론 타인의 이점을 너무 이상화하는 경향이 있지만 편안하게 계획을 제시하고 집단을 이끌어가는
                    능력을 가지고 있어요.
                    타인의 반응에 대하여 예민한 편이지만, MBTI 유형 중 상대방에게 제일 말을 부드럽게 하는 유형입니다!`,
                    'good': 'ISTP',
                    'bad': 'ISTJ',
                    'korean': '공감하는'
                }
            }
        },
        'S': {
            'T': {
                'P': {
                    'name': 'Adventurous',
                    'descript': `새로운 시도를 좋아하는 사업가!
                    관대하고 사실을 중요시하며 사람이나 사물에 대한 선입견이 거의 없어요.
                    주로 TMI를 싫어하는 편이고, 지루한 설명보다는 한번 부딪혀 보는,
                    백문이 불여일견인 성격이랍니다.
                    순발력이 뛰어나고 다양한 사실들을 쉽게 기억해내기도 하며,
                    예술적인 감각 또한 지니고 있지만 추상적인 아이디어나 개념엔 흥미가 없고
                    분석적이고 논리적으로 일을 처리하는, 
                    현실적이고 실용적인 면애서 분석적인 자세를 보여요.`,
                    'good': 'INFJ',
                    'bad': 'INFP',
                    'korean': '모험적인'
                },
                'J': {
                    'name': 'Commander',
                    'descript': `리더십 만땅!! 엄격한 보스
                    실질적이고 현실 감각이 상당히 뛰어나기 때문에
                    일을 체계적으로 계획하고 추친시키는 것을 잘해요!
                    리더쉽이 많이 있으므로 경제력이 뛰어난 유형 중 하나에요 ㅎㅂㅎ
                    친해지지 않은 상태로는 철저하고 엄격한 사람, 일명 "핵꼰대"로 보이는 경우도 많지만
                    친해지고 보면 주변인들에게 의리와 배려를 많이 보여준답니다.
                    주로 미래의 가능성보다는 현재의 실속성, 실용성 등을 중요하게 생각하는 편이지만,
                    현실적이기도 하며 거대한 도전은 좋아하는 유형이기도 합니다.`,
                    'good': 'INFP',
                    'bad': 'INFJ',
                    'korean': '지휘자'
                }
            },
            'F': {
                'P': {
                    'name': 'Sociable',
                    'descript': `안녕히 계세요 여러분! 자유로운 영혼의 소유자!
                    상당히 활동적이고 사교적인 면이 있으며
                    낙천적이고 타인에게 친절하답니다.
                    어떤 상황이든 간에 적응력 만땅이며 주로 현실을 중요시하는 성격을 가집니다.
                    상당히 감정적이고 충동성이 많지만
                    사교성이 매우 빼어나고 유머러스하답니다!`,
                    'good': 'INTJ',
                    'bad': 'INTP',
                    'korean': '사교적인'
                },
                'J': {
                    'name': 'Witty',
                    'descript': `사교성 가득! 친선을 도모하는 외교관!
                    이 유형은 주로 동정심이 많고 타인에게 관심을 보입니다.
                    동료애가 많고 친절한 구성원이자 협력자이고,
                    자신의 요구가 거절당하면 마음의 상처를 받지만 
                    이야기 하는 것을 즐기는 성격을 가지고 있고 
                    타인을 잘 도와주는 유형이에요.
                    그런 만큼 타인의 감정도 잘 배려한답니다.`,
                    'good': 'INTP',
                    'bad': 'INTJ',
                    'korean': '재치있는'
                }
            }
        }
    }
}

var questions = [
    {
        "question": "쉬는 날에 나는?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "주로 친구들을 만난다",
                "value": "E"
            },
            false: {
                "text": "주로 집에 있는 편이다",
                "value": "I"
            }
        }
    },
    {
        "question": "오랜만에 책 좀 볼까?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "어 여기있네",
                "value": "J"
            },
            false: {
                "text": "아 어딨었더라... 정리좀 해두고 살걸ㅠㅠ",
                "value": "P"
            }
        }
    },
    {
        "question": "새로운 만남을 가질 때",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "내가 먼저 주도적으로 이야기한다",
                "value": "E"
            },
            false: {
                "text": "다른 사람이 먼저 이야기하는 것을 기다린다",
                "value": "I"
            }
        }
    },
    {
        "question": "당신에게 칭찬이란?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": '"잘했다" 라고 하는 부분에서 이미 칭찬이다',
                "value": "T"
            },
            false: {
                "text": '"수고했어, 열심히 했어!" 처럼 노력과 고생을 인정해 주는 것이다',
                "value": "F"
            }
        }
    },
    {
        "question": "얘들아 제주도 가서 뭐부터 할래?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "새벽에 일어나서 성산일출봉부터 보고 해변 가서 산책도 하자!",
                "value": "J"
            },
            false: {
                "text": "짐부터 풀어야지.. 다른건 가서 보면 나오겠지!!",
                "value": "P"
            }
        }
    },
    {
        "question": "저기.. 여기 편의점이 어딨나요?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "아 여기 앞으로 쭉 가서 오른쪽으로 꺾으시면 건물이 하나 나오는데 거기 맞은편에 있어요",
                "value": "S"
            },
            false: {
                "text": "앞으로 가서 저기서 오른쪽으로 가면 보여요",
                "value": "N"
            }
        }
    },
    {
        "question": "친구관계를 형성할 때 나는?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "좁고 깊게 사귀는 편이다",
                "value": "I"
            },
            false: {
                "text": "폭넓게 사귀는 편이다",
                "value": "E"
            }
        }
    },
    {
        "question": "옷가게에 온 나! 무슨 옷을 살까...?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "무난하게 요즘 유행하는 옷 사자!",
                "value": "S"
            },
            false: {
                "text": "평범한건 싫어! 나만의 스타일로 입을거야 ;)",
                "value": "N"
            }
        }
    },
    {
        "question": "친구가 슬퍼하고 있을 때 당신의 반응은?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "무슨 일인데 그래?",
                "value": "T"
            },
            false: {
                "text": "괜찮아ㅜㅜ? 무슨 일이야ㅠㅠ??",
                "value": "F"
            }
        }
    },
    {
        "question": "힘든 하루를 마치고 돌아온 당신! 하지만 과제가 남아있다",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "피곤해 일단 잠 좀 자자ㅠㅠ",
                "value": "S"
            },
            false: {
                "text": "일단 하고 편안한 내일을 즐기자!!",
                "value": "N"
            }
        }
    },
    {
        "question": '나: "오늘 다리 다쳤어 ㅠㅠㅠ" 둘 중 더 좋은 친구의 답변은?',
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "얼마나 아파?😢 ㅁㅁ병원 가봐!!",
                "value": "T"
            },
            false: {
                "text": "괜찮니ㅜㅜ? 어떡해ㅠㅠㅠㅠ",
                "value": "F"
            }
        }
    },
    {
        "question": "요즘 유튜버 많이 하던데?",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "요즘 유튜버 얼마나 벌지..? 취미로 하려면 뭐부터 해야할까??",
                "value": "J"
            },
            false: {
                "text": "아몰랑 일단 올려봐 ㅎ",
                "value": "P"
            }
        }
    }
]