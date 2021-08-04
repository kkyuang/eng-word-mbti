//name에 캐릭터명
//descript에 설명
//good에 좋은 궁합 MBTI
//bad에 나쁜 궁합 MBTI

var MBTIs = {
    'I': {
        'N': {
            'T': {
                'P': {
                    'name': 'INTP',
                    'descript': 'INTP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'img/temp-result.png'
                },
                'J': {
                    'name': 'INTJ',
                    'descript': 'INTJ입니다 ;)',
                    'good': 'ESFP',
                    'bad': 'ESFJ',
                    'img': 'img/temp-result.png'
                }
            },
            'F': {
                'P': {
                    'name': 'INFP',
                    'descript': 'INFP입니다 ;)',
                    'good': 'ESTJ',
                    'bad': 'ESTP',
                    'img': 'img/temp-result.png'
                },
                'J': {
                    'name': 'INFJ',
                    'descript': 'INFJ입니다 ;)',
                    'good': 'ESTP',
                    'bad': 'ESTJ',
                    'img': 'img/temp-result.png'
                }
            }
        },
        'S': {
            'T': {
                'P': {
                    'name': 'ISTP',
                    'descript': 'ISTP입니다 ;)',
                    'good': 'ENFJ',
                    'bad': 'ENFP',
                    'img': 'img/temp-result.png'
                },
                'J': {
                    'name': 'ISTJ',
                    'descript': 'ISTJ입니다 ;)',
                    'good': 'ENFP',
                    'bad': 'ENFJ',
                    'img': 'img/temp-result.png'
                }
            },
            'F': {
                'P': {
                    'name': 'ISFP',
                    'descript': 'ISFP입니다 ;)',
                    'good': 'ENTJ',
                    'bad': 'ENTP',
                    'img': 'img/temp-result.png'
                },
                'J': {
                    'name': 'ISFJ',
                    'descript': 'ISFJ입니다 ;)',
                    'good': 'ENTP',
                    'bad': 'ENTJ',
                    'img': 'img/temp-result.png'
                }
            }
        }
    },
    'E': {
        'N': {
            'T': {
                'P': {
                    'name': 'ENTP',
                    'descript': 'ENTP입니다 ;)',
                    'good': 'ISFJ',
                    'bad': 'ISFP',
                    'img': 'img/temp-result.png'
                },
                'J': {
                    'name': 'ENTJ',
                    'descript': 'ENTJ입니다 ;)',
                    'good': 'ISFP',
                    'bad': 'ISFJ',
                    'img': 'img/temp-result.png'
                }
            },
            'F': {
                'P': {
                    'name': 'ENFP',
                    'descript': 'ENFP입니다 ;)',
                    'good': 'ISTJ',
                    'bad': 'ISTP',
                    'img': 'img/temp-result.png'
                },
                'J': {
                    'name': 'ENFJ',
                    'descript': 'ENFJ입니다 ;)',
                    'good': 'ISTP',
                    'bad': 'ISTJ',
                    'img': 'img/temp-result.png'
                }
            }
        },
        'S': {
            'T': {
                'P': {
                    'name': 'ESTP',
                    'descript': 'ESTP입니다 ;)',
                    'good': 'INFJ',
                    'bad': 'INFP',
                    'img': 'img/temp-result.png'
                },
                'J': {
                    'name': 'ESTJ',
                    'descript': 'ESTJ입니다 ;)',
                    'good': 'INFP',
                    'bad': 'INFJ',
                    'img': 'img/temp-result.png'
                }
            },
            'F': {
                'P': {
                    'name': 'ESFP',
                    'descript': 'ESFP입니다 ;)',
                    'good': 'INTJ',
                    'bad': 'INTP',
                    'img': 'img/temp-result.png'
                },
                'J': {
                    'name': 'ESFJ',
                    'descript': 'ESFJ입니다 ;)',
                    'good': 'INTP',
                    'bad': 'INTJ',
                    'img': 'img/temp-result.png'
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