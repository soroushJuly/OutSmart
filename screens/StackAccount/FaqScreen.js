import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getAllFaqs } from '../../utils/api/api-faq';
import { useState, useEffect } from 'react';

const FaqScreen = () => {
    const [faqs, setFaqs] = useState([
        // Some dummy FAQs
        { question: 'What is OutSmart?', answer: 'OutSmart is a productivity app designed to help you manage your tasks efficiently.' },
        { question: 'How do I use OutSmart?', answer: 'You can start by creating an account and adding your tasks to the dashboard.' },
        { question: 'Is OutSmart free?', answer: 'Yes, OutSmart offers a free version with basic features. You can upgrade to premium for more advanced features.' },]);

    useEffect(() => {
        const fetchFaqs = async () => {
            const { data, success } = await getAllFaqs();

            if (success) {
                // Update the state with the fetched FAQs
                setFaqs((faqs) => [...faqs, ...data]);
            }
        };

        fetchFaqs();
        // only run this effect once
    }, []);

    return (
        <ScrollView style={styles.container}>
            {faqs.map((faq, index) => (
                <View key={index} style={styles.faqItem}>
                    <Text style={styles.question}>{faq?.question}</Text>
                    <Text style={styles.answer}>{faq?.answer}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    faqItem: {
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    answer: {
        fontSize: 16,
        color: '#555',
    },
});

export default FaqScreen;