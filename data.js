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
                    'descript': 'INTP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'korean': '논리적인'
                },
                'J': {
                    'name': 'Improve',
                    'descript': 'INTJ입니다 ;)',
                    'good': 'ESFP',
                    'bad': 'ESFJ',
                    'korean': '개선하다'
                }
            },
            'F': {
                'P': {
                    'name': 'Dreamy',
                    'descript': 'INFP입니다 ;)',
                    'good': 'ESTJ',
                    'bad': 'ESTP',
                    'korean': '꿈꾸는 듯한'
                },
                'J': {
                    'name': 'Sympathy',
                    'descript': `정의 내리기 어렵고 알 수 없는 완벽주의자!
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
                    'descript': 'ISTP입니다 ;)',
                    'good': 'ENFJ',
                    'bad': 'ENFP',
                    'korean': '워커홀릭'
                },
                'J': {
                    'name': 'Halcyon',
                    'descript': 'ISTJ입니다 ;)',
                    'good': 'ENFP',
                    'bad': 'ENFJ',
                    'korean': '평온한'
                }
            },
            'F': {
                'P': {
                    'name': 'Artistic',
                    'descript': 'ISFP입니다 ;)',
                    'good': 'ENTJ',
                    'bad': 'ENTP',
                    'korean': '예술적인'
                },
                'J': {
                    'name': 'Patient',
                    'descript': 'ISFJ입니다 ;)',
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
                    'descript': 'ENTP입니다 ;)',
                    'good': 'ISFJ',
                    'bad': 'ISFP',
                    'korean': '기발한'
                },
                'J': {
                    'name': 'Effective',
                    'descript': 'ENTJ입니다 ;)',
                    'good': 'ISFP',
                    'bad': 'ISFJ',
                    'korean': '효과적인'
                }
            },
            'F': {
                'P': {
                    'name': 'Curiosity',
                    'descript': ``,
                    'good': 'ISTJ',
                    'bad': 'ISTP',
                    'korean': '호기심'
                },
                'J': {
                    'name': 'Empathic',
                    'descript': 'ENFJ입니다 ;)',
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
                    'descript': 'ESFP입니다 ;)',
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
        "question": "친구관계를 형성할 때",
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
        "question": "쉬는 날에",
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
    }
]