'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion.jsx'
import Link from 'next/link'

export default function FAQs() {
const faqItems = [
    {
        id: 'item-1',
        question: 'How long does a project typically take?',
        answer: 'Project timelines vary depending on the scope and complexity. Most branding or design projects take 2-6 weeks from concept to final delivery. We provide an estimated timeline during the proposal phase.',
    },
    {
        id: 'item-2',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and bank transfers. For larger or ongoing projects, we can set up milestone-based payments to make the process smoother.',
    },
    {
        id: 'item-3',
        question: 'Can I request changes or revisions?',
        answer: 'Absolutely! We offer multiple revision rounds depending on your project package. Our goal is to ensure the final deliverable aligns perfectly with your vision.',
    },
    {
        id: 'item-4',
        question: 'Do you work with clients internationally?',
        answer: 'Yes! Fewlix Creative Studio collaborates with clients worldwide. We handle remote communication seamlessly through video calls, emails, and project management tools.',
    },
    {
        id: 'item-5',
        question: 'What if I’m not satisfied with the work?',
        answer: 'Your satisfaction is our priority. We work closely with you throughout the project and provide revision rounds to ensure the final outcome meets your expectations. Open communication is key!',
    },
]


    return (
        <section className="bg-muted py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div>
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}