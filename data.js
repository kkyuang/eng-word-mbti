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
                    'descript': 'INFJ입니다 ;)',
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
                    'descript': 'ENFP입니다 ;)',
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
                    'descript': 'ESTP입니다 ;)',
                    'good': 'INFJ',
                    'bad': 'INFP',
                    'korean': '모험적인'
                },
                'J': {
                    'name': 'Commander',
                    'descript': 'ESTJ입니다 ;)',
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
                    'descript': 'ESFJ입니다 ;)',
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
        "question": "안녕1",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "저는 I입니다",
                "value": "I"
            },
            false: {
                "text": "저는 E입니다",
                "value": "E"
            }
        }
    },
    {
        "question": "안녕2",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "저는 N입니다",
                "value": "N"
            },
            false: {
                "text": "저는 S입니다",
                "value": "S"
            }
        }
    },
    {
        "question": "안녕3",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "저는 T입니다",
                "value": "T"
            },
            false: {
                "text": "저는 F입니다",
                "value": "F"
            }
        }
    },
    {
        "question": "안녕4",
        "img": "img/question-img.png",
        "answers": {
            true: {
                "text": "저는 P입니다",
                "value": "P"
            },
            false: {
                "text": "저는 J입니다",
                "value": "J"
            }
        }
    }
]