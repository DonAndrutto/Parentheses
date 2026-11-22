export interface NodeData {
  id: string;
  depth: number;
  preview: string;
  content: (string | NodeData)[];
  isRoot?: boolean;
}

export const contentData: NodeData = {
  id: 'root',
  depth: 0,
  preview: '(ཨ)',
  isRoot: true,
  content: [
    {
      id: 'title_node',
      depth: 1,
      preview: 'On Collapse (And Expansion)',
      content: [
        'On the topic of "collapse": the structural outline sa bche is one of the neatest mechanisms in the Indian and Tibetan scholastic tradition — a precursor of modern coding, perhaps. It enables you to fold and unfold nodes of meaning, structures nested within structures ',
        {
          id: 'nodes',
          depth: 2,
          preview: 'potentially infinitely, almost like a fractal…',
          content: [
            '(but let\'s not be that dramatic). I wonder what happens if I start making digressions within digressions — that\'s like the section 1.1.1 of the outline, and the mind can operate at least 8 levels deep. You could nest thoughts within a thought and then collapse them into a single sentence ',
          ]
        },
        ' to contain the entire message in a single sentence, if collapsed sufficiently — it might fold into a single syllable (one wonders about the utility of code in sutra writing, rather than verse and prose alone), like the sūtra Yige Chigpa, the Prajñāpāramitā in a Single Syllable, the syllable A — implicit, but not even specifically uttered; ',
        {
          id: 'buddha_silence',
          depth: 2,
          preview: "silence of the Buddha's",
          content: [
            "There is nothing that surpasses the sophistication of this noble silence. The silence which still resounds. LOUDLY AND AT ALL TIMES - the constant reverberation of the teaching on the final meaning - the means and the meaning being in unison - the unborn-incessant and un-observed yet understood - silence. The beauty of the Japanese Zen, a continuation of the Chinese Chaan, the school born from the Flower Sermon itself, is the insistence on passing on this reverberation of this silence - down the centuries, it should not be forgotten by the students and teachers of other traditions. The endless and exhausting exercise in the dharma, the difficult tasks and seemingly endless spiritual “chores” (ngondro) are an attempt to reveal this ultimate teaching - the ever resounding reverberation of Buddha’s silence. After all - the highest of \"tantric\" lineages is the Buddha's Mind lineage, followed by Vidyadhara's symbolic lineage, whereas the hearing lineage of the ordinary ones is just that - quite ordinary. The smaller the information packet, the more immediate the transmission. How beautiful, if not the most beautiful of all things in this world - is when Buddha showed a flower and Kashyapa smiled. Is there ever someone who beheld greater beauty? Has the world ever seen anything like this? The message which was received - unheard. This is ambrosia for those of the higher capacity, discarded like filth by those whose minds aren’t ready for it. To the only teaching the buddha NEVER ended - the ever-resounding silence - the ultimate of all meanings - I bow. The Buddha's silence is the teaching of the final level of sophistication - a teaching which is still in the process of happening. Whenever you hear silence - and you can hear it in any circumstances – by isolating it – like the absence of speaking even when you hear the sounds of cars, or the absence of the sound of traffic even in the presence of the sound of trees etc. - whenever you hear it - just know that this truly is the Buddha's speech."
          ]
        },
        ' flower sermon being the final level of "collapse," containing infinite information. This brings me to the concept of ',
        {
          id: 'mandala_trigger',
          depth: 2,
          preview: 'Mandala',
          content: [
            '(dKyil \'Khor): its architecture involves a potentiality of interpenetration between the center (dkyil) and periphery (\'khor), like when a topic becomes the main focal point but can also be seen as part of a larger topic. Each of its elements can expand like a fractal, infinitely — just like in the sa bche structure. ',
            {
              id: 'deities',
              depth: 3,
              preview: 'each deity of the periphery may become the chief deity…',
              content: [
                'Each deity of the periphery may become the "chief" deity, containing all others within their own body, like Ratnasambhava, who himself is surrounded by the remaining Dhyāni Buddhas: ',
                {
                  id: 'deity_detail',
                  depth: 4,
                  preview: 'Vajrasattva in the east, Vairochana in the south…',
                  content: ['Vajrasattva in the east, Vairochana in the south — because he has taken the central place in the original configuration — Amitābha in the west, Amoghasiddhi in the north. ']
                },
                'And the deities residing within those deities contain yet other deities within their own bodies, ad infinitum. '
              ]
            },
            '. The removal of the distinction between center and periphery is also a step beyond the narrow frame of the subject/object dichotomy. Distinct Prajñāpāramitā sūtras, for instance, don\'t just exist as separate texts arrayed in a spectrum; they exist as a field of potential expansion and contraction. A realized being could hear the totality of the 100,000 verses in a single syllable, or the reverse. Potentially there is no upper limit to how many levels deep the text might expand. On the other hand, in its fully "collapsed" form it takes the form of the single syllable A, or going further: no syllable, symbol, or sound at all — zero medium containing an infinitude of information, like in the flower sermon. ',
            {
              id: 'honesty_node',
              depth: 3,
              preview: 'Honesty',
              content: [
                'But currently, it would be a lie to pretend to have the presence of mind to encompass all this. For a writer, it would even be a lie to start writing something like: ',
                {
                  id: 'desc_quote',
                  depth: 4,
                  preview: 'it was that time in the afternoon…',
                  content: [
                    '"it was that time in the afternoon where the intensity of the rapidly moving disc of the reddened sun exposes every pore of her skin, with shadows lengthening like the sighs she produces upon my increasingly bold touches. Rustle of leaves crushed under her boots reminds me of thousands of tiny mice skeletons I once dreamed of, a dream buried in thousands of layers of duvet of subconsciousness, only rediscovered briefly for a fleeting moment by the most unexpected of stimuli, a smell or a particular angle you view the very familiar furniture in your room, like when you see it from a four-year-old\'s perspective". '
                  ]
                },
                'What I mean is: to write descriptively like this is to betray reality, the facts. The current mode of experience is disjointed, as twitchy and fragmentary as the flashes of scattered attention, constantly pumped with the IV drip of "content." You currently get pierced by the rays of content, your heart astonished in mute bewilderment, intoxicated by clouds of content, crushed by its mass, swept by its flood. But I do wonder if one could approach it in a pedagogical or therapeutic way. You start by tuning into the mind of the reader — a turbulent mind that flickers in a disjointed manner — and like minute 5–6 of the Cloud Of Unknowing by Swans, you establish an emergence of rhythm of sorts, like a heartbeat, which gradually slows down its pulse like a breathing exercise. 180 bpm attention span moves towards 60. Trance. Enter in panic and leave in a trance. ',
                'In any case, how NOT to go insane when you\'re forced to live in 2 parallel paradigms: Subjectively you\'re meant to treat yourself as special and unique, completely magical, like a fragile snow-flake, while at the same time from the Objective perspective: you\'re told you\'re nothing but a speck of dust in endless universe. One wonders if a solution is possible at all? Embrace the Nihil or Narcissism-Maxxing? Or is there a ',
                {
                  id: 'third_way_trigger',
                  depth: 4,
                  preview: 'Third Way',
                  content: [
                    'Wherever you, the observer, are, precisely there lies the center of the universe, and the entire field of your experience extends from that point. If one looks at the matter soberly and clearly, the very notion of "objectivity" or "objective reality" is just this — a notion, i.e. a thought occurring to the one who has it in a given moment. A thought like "objectivism" or "subject versus object" belongs to the experienced periphery of the experiencer himself, is part of that "periphery" or "landscape," is its content — NOT the other way around. This is the principle of Kyil Khor (དཀྱིལ་འཁོར།). This stands in stark contrast to so-called "scientific objectivity," which has inverted the age-old paradigm of the centrality of the human factor — the soul, the observer — and often preaches the insignificance of subjective experience. Proponents of this discomfort feel diminished by a worldview that presents the infinity of the universe as direct proof of their personal insignificance. Some, understanding this more or less, push back against this "objectivity," often using religion as refuge. The most extreme manifestation of such rejection may be the belief in a "flat earth" — perhaps the very apex of "anti-science" sentiment, a desperate rebellion against one-dimensional, cold scientism. Before one enters into a dispute with anyone, what matters most is understanding the deeper motives of one\'s interlocutor. The concept of mandala is not wishy-washy spiritual imagery. It\'s an extremely powerful conceptual framework. It can serve as a direct and valid antidote to the nihilistic feelings that fuel both scientism and anti-science sentiment. Instead of misguided rebellion against cosmology, the mandala restores to the observer his rightful place as the sacred center (kyil) from which the world (\'khor) unfolds. The mandala doesn\'t deny Copernicus. It simply says: regardless of where the earth is in space, you are here. The entire field of experience radiates from this point. The vastness of the universe is not a refutation of your centrality — it is the content of your periphery. The galaxies are part of ',
                    {
                      id: 'your_mandala_trigger',
                      depth: 5,
                      preview: 'YOUR Mandala',
                      content: [
                        'Things sharpen as they come into focus; the resolution increases, like textures gaining a level of detail (LOD) in a computer game when you get closer. A human life, when early, is blurry — it\'s an insinuation, an open possibility. The more it crystallizes, the closer it resembles its final form: first, as it gets sharper and sharper, an uncomfortable level of detail emerges — wrinkles, pores, hair. Eventually the final "chunk" loads… But the crystallization that happens before that is a sight to behold for those with perspective. The quickening of the body starts with the stages of embryonic development: ',
                        {
                          id: 'kalala',
                          depth: 6,
                          preview: 'Kalala',
                          content: ['(a spot, slippery coagulation)']
                        },
                        ', ',
                        {
                          id: 'arbuda',
                          depth: 6,
                          preview: 'Arbuda',
                          content: ['(“Mass”, “Flickering Stage”)']
                        },
                        ', ',
                        {
                          id: 'peshi',
                          depth: 6,
                          preview: 'Peśī',
                          content: ['(“Soft Flesh”, “Oblong”)']
                        },
                        ', ',
                        {
                          id: 'ghana',
                          depth: 6,
                          preview: 'Ghana',
                          content: ['("Solid lump," "club-shape," or "budding stage.")']
                        },
                        ' and ',
                        {
                          id: 'prashakha',
                          depth: 6,
                          preview: 'Praśākha',
                          content: ['("Emergence of limbs.")']
                        },
                        '. Then, until a certain period of "peak," the increase in resolution seems subjectively like a positive thing — we call it "growing up." But don\'t be fooled: once the game starts loading, it doesn\'t stop. This doesn\'t only happen to the body. Maybe not soon, but one terrifying morning you WILL see your face in the bathroom mirror as-it-is. This doesn\'t only happen to the body. Neuroplasticity — the ability to form synaptic connections between previously unconnected neurons — goes too. You fall into the same old groove, your perspective gets moulded and at one point — freezes. Perhaps never to thaw again. Could this be the great betrayal that we sensed might happen, as children, but couldn\'t articulate? The promise we gave each other then, perhaps wordlessly — was that we would never, EVER become like those horrible, boring, dead adults — and it is now irrevocably broken. Could this perhaps be the paradise lost? The lost innocence. The original sin, ',
                        {
                          id: 'exile_eden_trigger',
                          depth: 6,
                          preview: 'exile from Eden',
                          content: [
                            'While reading Mircea Eliade\'s book on symbolism (The Symbolism of the Center), a line struck me. It described Europeans whose idea of paradise was island life, like the people of Oceania. Reality, of course, did not confirm this vision. This reminds me of the first time I flew to Bhutan. On the plane, I could hear Westerners whispering, "Shangri-La, Shangri-La." Shangri-La is, of course, an invention. This leads me to the phenomenon of singing bowls — they are a scam. People yearn for fiction more than for truth. They are begging to be scammed. The majority of materials about Buddhism in the West are tainted with misconceptions. The so-called Tibetan Book of the Dead is neither a book nor for the dead. I wonder if this is a sign of the times — a Kali Yuga — or simply human nature clinging to falsehoods. People buy thangkas with cartoonishly incorrect depictions of mandalas. Asians have their own delusions. One of them is the West itself. Asians also tend to be even more prone to the sweet allure of what is essentially the ontological nihilism of modern science. Another question: is it wise to admonish a fool? All things under the sun feel meaningless. What astonishes me most is this relentless drive toward the inauthentic. In all this: perhaps a white-piller would say that people tend to gravitate towards meta-truths rather than factual truths. Many myths are false factually but true symbolically. A black-piller would say people are dumber than ever and the world is going to hell. If humanity is declining, should you fight the decline, ignore it, or work only on your own liberation? Revolution, Accelerationism, or retreat? ',
                            '###FREE###Or just put parentheses around anything at all and everything, and multiply the whole damned thing by 0. The Giant Thigle ( ) that embraces all. Namaste.'
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
