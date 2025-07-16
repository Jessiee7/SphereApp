import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, Dimensions } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type Policy = {
  policyName: string;
  policyNumber: string;
  status: 'Active' | 'Lapsed';
  nextPremiumDue: string;
  startDate: string;
  maturityDate: string;
  sumAssured: string;
  premiumFrequency: string;
  lastPremiumPaid: string;
  nextPremiumAmount: string;
};

interface PolicyCardProps {
  policy: Policy;
  viewMode?: 'list' | 'grid';
}

const { width } = Dimensions.get('window');

const PolicyCard: React.FC<PolicyCardProps> = ({ policy, viewMode = 'list' }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => !prev);
  };

  const statusEmoji = policy.status === 'Active' ? '🟢' : '🔴';
  const calendarEmoji = '📅';
  const arrow = expanded ? '▲' : '▼';

  if (viewMode === 'grid') {
    return (
      <View style={styles.gridCardWrapper}>
        <View style={styles.gridCard}>
          <View style={styles.gridHeader}>
            <Text style={styles.gridPolicyName} numberOfLines={1}>{policy.policyName}</Text>
            <View style={[styles.gridStatusBadge, policy.status === 'Active' ? styles.gridActive : styles.gridLapsed]}>
              <Text style={styles.gridStatusText}>{policy.status}</Text>
            </View>
          </View>
          <View style={styles.gridRow}>
            <Text style={styles.gridLabel}>{calendarEmoji} </Text>
            <Text style={styles.gridValue}>{policy.nextPremiumDue}</Text>
          </View>
          <View style={styles.gridRow}>
            <Text style={styles.gridLabel}>Sum: </Text>
            <Text style={styles.gridValue}>{policy.sumAssured}</Text>
          </View>
        </View>
      </View>
    );
  }

  // List mode (detailed)
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.accentBar} />
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.policyName}>{policy.policyName}</Text>
          <View style={styles.statusRow}>
            <Text style={styles.statusEmoji}>{statusEmoji}</Text>
            <Text style={[styles.status, policy.status === 'Active' ? styles.active : styles.lapsed]}>{policy.status}</Text>
          </View>
        </View>
        <Text style={styles.policyNumber}>Policy No: <Text style={{fontWeight:'bold'}}>{policy.policyNumber}</Text></Text>
        <View style={styles.premiumRow}>
          <Text style={styles.calendarEmoji}>{calendarEmoji}</Text>
          <Text style={styles.nextPremiumDue}>Next Premium Due: <Text style={{fontWeight:'bold'}}>{policy.nextPremiumDue}</Text></Text>
        </View>
        <TouchableOpacity onPress={handleToggle} style={styles.readMoreBtn} activeOpacity={0.7}>
          <Text style={styles.readMoreText}>{expanded ? 'Hide Details' : 'Read More'} {arrow}</Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.details}>
            <Text style={styles.sectionHeader}>Policy Details</Text>
            <View style={styles.detailRow}><Text style={styles.detailLabel}>Start Date:</Text><Text style={styles.detailValue}>{policy.startDate}</Text></View>
            <View style={styles.detailRow}><Text style={styles.detailLabel}>Maturity Date:</Text><Text style={styles.detailValue}>{policy.maturityDate}</Text></View>
            <View style={styles.detailRow}><Text style={styles.detailLabel}>Sum Assured:</Text><Text style={styles.detailValue}>{policy.sumAssured}</Text></View>
            <View style={styles.detailRow}><Text style={styles.detailLabel}>Premium Frequency:</Text><Text style={styles.detailValue}>{policy.premiumFrequency}</Text></View>
            <View style={styles.detailRow}><Text style={styles.detailLabel}>Last Premium Paid:</Text><Text style={styles.detailValue}>{policy.lastPremiumPaid}</Text></View>
            <View style={styles.detailRow}><Text style={styles.detailLabel}>Next Premium Amount:</Text><Text style={styles.detailValue}>{policy.nextPremiumAmount}</Text></View>
          </View>
        )}
      </View>
    </View>
  );
};

const cardWidth = (width - 16 * 2 - 12) / 2; // 16px margin on both sides, 12px gap between cards

const styles = StyleSheet.create({
  // Grid mode styles
  gridCardWrapper: {
    width: cardWidth,
    marginHorizontal: 6,
    marginVertical: 10,
  },
  gridCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    minHeight: 110,
    justifyContent: 'center',
    shadowColor: '#002C5F',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  gridHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  gridPolicyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002C5F',
    flex: 1,
    marginRight: 4,
  },
  gridStatusBadge: {
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  gridActive: {
    backgroundColor: '#E0F2F1',
  },
  gridLapsed: {
    backgroundColor: '#FFEBEE',
  },
  gridStatusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#002C5F',
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  gridLabel: {
    color: '#555',
    fontSize: 13,
    fontWeight: '600',
  },
  gridValue: {
    color: '#002C5F',
    fontWeight: 'bold',
    fontSize: 13,
  },

  // List mode styles
  cardWrapper: {
    flexDirection: 'row',
    marginVertical: 12,
    marginHorizontal: 16,
    alignItems: 'stretch',
  },
  accentBar: {
    width: 5,
    borderRadius: 6,
    backgroundColor: '#002C5F',
    marginRight: 0,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    shadowColor: '#002C5F',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusEmoji: {
    fontSize: 16,
    marginRight: 3,
  },
  policyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002C5F',
    letterSpacing: 0.2,
  },
  status: {
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 14,
    overflow: 'hidden',
  },
  active: {
    backgroundColor: '#E0F2F1',
    color: '#002C5F',
  },
  lapsed: {
    backgroundColor: '#FFEBEE',
    color: '#FF6F61',
  },
  policyNumber: {
    marginTop: 2,
    color: '#555',
    fontSize: 15,
  },
  premiumRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  calendarEmoji: {
    fontSize: 15,
    marginRight: 4,
  },
  nextPremiumDue: {
    color: '#555',
    fontSize: 15,
  },
  readMoreBtn: {
    marginTop: 14,
    alignSelf: 'flex-start',
    backgroundColor: '#002C5F',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  readMoreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  details: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  sectionHeader: {
    fontWeight: 'bold',
    color: '#002C5F',
    fontSize: 16,
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  detailLabel: {
    color: '#555',
    fontWeight: '600',
    fontSize: 14,
  },
  detailValue: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default PolicyCard; 